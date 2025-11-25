<?php

namespace App\Http\Controllers\JobApplication\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobApplication\JobApplicationEmployeeStoreRequest;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class JobApplicationEmployeeStoreController extends Controller
{
    public function __invoke(JobApplicationEmployeeStoreRequest $request): JsonResponse
    {
        $user = Auth::user();
        $employee = $user->employee;

        if (!$employee) {
            return response()->json([
                'message' => 'Only Employees Can Apply.',
            ], 403);
        }

        $application = JobApplication::create([
            'applied_at' => now(),
            'applicant_email' => $user->email,
            'applicant_name' => $user->name,
            'applicant_phone' => $employee->phone,
            'employee_id' => $employee->id,
            'recruitment_id' => $request->recruitment_id,
            'resume_link' => $request->resume_link,
            'status' => 'pending',
            'user_id' => $user->id,  
        ]);

        return response()->json([
            'data' => [
                'application' => $application,
            ],
            'message' => 'Employee Application Submitted Successfully.',
        ]);
    }
}
