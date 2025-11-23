<?php

namespace App\Http\Controllers\Payroll;

use App\Http\Controllers\Controller;
use App\Models\Payroll;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class PayrollListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();

        if ($user->role_id === 1) {
            $payrolls = Payroll::with('employee.user')->get();
        } else {
            $payrolls = Payroll::with('employee.user')
                ->where('employee_id', $user->employee->id)
                ->get();
        }

        return response()->json([
            'data' => ['payrolls' => $payrolls],
            'message' => 'Payroll List Found Successfully.',
        ]);
    }
}
