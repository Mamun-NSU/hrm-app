<?php

namespace App\Http\Controllers\Payroll;

use App\Http\Controllers\Controller;
use App\Models\Payroll;
use Illuminate\Http\JsonResponse;

class PayrollShowController extends Controller
{
    public function __invoke(Payroll $payroll): JsonResponse
    {
        $payroll->load(['employee.user']);

        return response()->json([
            'data' => ['payroll' => $payroll],
            'message' => 'Payroll Found Successfully.',
        ]);
    }
}
