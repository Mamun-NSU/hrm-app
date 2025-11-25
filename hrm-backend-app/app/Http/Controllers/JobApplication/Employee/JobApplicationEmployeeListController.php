<?php

namespace App\Http\Controllers\JobApplication\Employee;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class JobApplicationEmployeeListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();
        $employee = $user->employee;

        if (!$employee) {
            return response()->json(['message' => 'Only employees can access this.'], 403);
        }

        $applications = JobApplication::with('recruitment.department')
            ->where('employee_id', $employee->id)
            ->latest()
            ->get();

        return response()->json([
            'data' => [
                'applications' => $applications,
            ],
            'message' => 'Employee Applications Found Successfully.',
        ]);
    }
}
