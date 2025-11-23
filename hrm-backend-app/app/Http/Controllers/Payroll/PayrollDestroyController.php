<?php

namespace App\Http\Controllers\Payroll;

use App\Http\Controllers\Controller;
use App\Models\Payroll;
use Illuminate\Http\JsonResponse;

class PayrollDestroyController extends Controller
{
    public function __invoke(Payroll $payroll): JsonResponse
    {
        $payroll->delete();

        return response()->json([
            'message' => 'Payroll Deleted Successfully.',
        ]);
    }
}
