<?php

namespace App\Http\Controllers;

use App\Models\Payroll;
use App\Models\SalaryStructure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class PayrollController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // If admin, fetch all payrolls
        if ($user->role_id === 1) {
            $payrolls = Payroll::with('employee.user')->get();
        } else {
            // For employee, fetch only their own payrolls
            $payrolls = Payroll::with('employee.user')
                ->where('employee_id', $user->employee->id)
                ->get();
        }

        return response()->json($payrolls);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'employee_id' => 'required|exists:employees,id',
            'month_year'  => 'required|string',
            'generated_at'=> 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $salaryStructure = SalaryStructure::where('employee_id', $request->employee_id)->first();

        if (!$salaryStructure) {
            return response()->json(['message' => 'Salary structure not found for this employee.'], 422);
        }

        $grossSalary = $salaryStructure->basic_salary + $salaryStructure->allowance_amount;
        $netSalary   = $grossSalary - $salaryStructure->deduction_amount;

        $payroll = Payroll::create([
            'employee_id' => $request->employee_id,
            'month_year'  => $request->month_year,
            'gross_salary'=> $grossSalary,
            'net_salary'  => $netSalary,
            'generated_at'=> $request->generated_at,
        ]);

        return response()->json($payroll, 201);
    }

    public function update(Request $request, $id)
    {
        $payroll = Payroll::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'generated_at'=> 'date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        if ($request->has('generated_at')) {
            $payroll->generated_at = $request->generated_at;
        }

        $payroll->save();
        return response()->json($payroll);
    }

    public function destroy($id)
    {
        $payroll = Payroll::findOrFail($id);
        $payroll->delete();
        return response()->json(['message' => 'Payroll deleted successfully']);
    }
}
