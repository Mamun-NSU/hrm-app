<?php

namespace App\Http\Controllers\Payroll;

use App\Http\Controllers\Controller;
use App\Http\Requests\Payroll\PayrollStoreRequest;
use App\Models\Payroll;
use App\Models\SalaryStructure;
use Illuminate\Http\JsonResponse;

class PayrollStoreController extends Controller
{
    public function __invoke(PayrollStoreRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $existing = Payroll::where('employee_id', $validated['employee_id'])
            ->where('month_year', $validated['month_year'])
            ->first();

        if ($existing) {
            return response()->json([
                'message' => 'Payroll already exists for this month.',
            ], 422);
        }

        $structure = SalaryStructure::where('employee_id', $validated['employee_id'])->first();

        if (!$structure) {
            return response()->json([
                'message' => 'Salary structure not found for this employee.',
            ], 422);
        }

        $gross = $structure->basic_salary + $structure->allowance_amount;
        $net   = $gross - $structure->deduction_amount;

        $payroll = Payroll::create([
            'employee_id' => $validated['employee_id'],
            'month_year'  => $validated['month_year'],
            'gross_salary'=> $gross,
            'net_salary'  => $net,
            'generated_at'=> $validated['generated_at'],
        ]);

        $payroll->load('employee.user');

        return response()->json([
            'data' => ['payroll' => $payroll],
            'message' => 'Payroll Created Successfully.',
        ], 201);
    }
}
