<?php

namespace App\Http\Controllers;

use App\Models\Payroll;
use App\Models\SalaryStructure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PayrollController extends Controller
{
    public function index()
    {
        // Load employee → user also for displaying name
        $payrolls = Payroll::with('employee.user')->get();
        return response()->json($payrolls);
    }

    public function store(Request $request)
    {
        // 1. Validate request
        $validator = Validator::make($request->all(), [
            'employee_id' => 'required|exists:employees,id',
            'month_year'  => 'required|date_format:Y-m',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // 2. Prevent duplicate payroll for same month
        $exists = Payroll::where('employee_id', $request->employee_id)
                         ->where('month_year', $request->month_year)
                         ->first();

        if ($exists) {
            return response()->json([
                'message' => 'Payroll already generated for this employee for this month.'
            ], 409);
        }

        // 3. Fetch salary structure
        $salary = SalaryStructure::where('employee_id', $request->employee_id)->first();

        if (!$salary) {
            return response()->json([
                'message' => 'Salary structure not found for this employee.'
            ], 404);
        }

        // 4. Calculate salary
        $gross = $salary->basic_salary + $salary->allowance_amount;
        $net   = $gross - $salary->deduction_amount;

        // 5. Store payroll
        $payroll = Payroll::create([
            'employee_id'  => $request->employee_id,
            'month_year'   => $request->month_year,
            'gross_salary' => $gross,
            'net_salary'   => $net,
            'generated_at' => now(),
        ]);

        return response()->json([
            'message' => 'Payroll generated successfully',
            'payroll' => $payroll,
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $payroll = Payroll::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'month_year'  => 'date_format:Y-m',
            'gross_salary'=> 'numeric',
            'net_salary'  => 'numeric',
            'generated_at'=> 'date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $payroll->update($request->all());

        return response()->json([
            'message' => 'Payroll updated successfully',
            'payroll' => $payroll,
        ]);
    }

    public function destroy($id)
    {
        $payroll = Payroll::findOrFail($id);
        $payroll->delete();

        return response()->json([
            'message' => 'Payroll deleted successfully'
        ]);
    }
}
