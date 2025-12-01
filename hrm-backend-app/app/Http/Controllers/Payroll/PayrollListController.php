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

        if ($user->role?->name === 'Admin') {
            $payrolls = Payroll::with('employee.user')->get();
        } else {
            $employeeId = $user->employee?->id;

            $payrolls = Payroll::with('employee.user')
                ->when($employeeId, function ($query, $employeeId) {
                    return $query->where('employee_id', $employeeId);
                })
                ->get();
        }

        return response()->json([
            'data' => ['payrolls' => $payrolls],
            'message' => 'Payroll List Found Successfully.',
        ]);
    }
}
