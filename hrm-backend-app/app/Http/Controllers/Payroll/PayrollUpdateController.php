<?php

namespace App\Http\Controllers\Payroll;

use App\Http\Controllers\Controller;
use App\Http\Requests\Payroll\PayrollUpdateRequest;
use App\Models\Payroll;
use Illuminate\Http\JsonResponse;

class PayrollUpdateController extends Controller
{
    public function __invoke(PayrollUpdateRequest $request, Payroll $payroll): JsonResponse
    {
        $payroll->update($request->validated());

        $payroll->load('employee.user');

        return response()->json([
            'data' => ['payroll' => $payroll],
            'message' => 'Payroll Updated Successfully.',
        ]);
    }
}
