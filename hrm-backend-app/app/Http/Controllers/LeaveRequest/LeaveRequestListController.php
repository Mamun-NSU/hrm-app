<?php

namespace App\Http\Controllers\LeaveRequest;

use App\Http\Controllers\Controller;
use App\Models\LeaveRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LeaveRequestListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();

        if ($user->role_id === 1) {
            $leaves = LeaveRequest::with(['employee.user', 'leaveType'])->latest()->get();
        } else {
            $leaves = LeaveRequest::with(['employee.user', 'leaveType'])
                ->where('employee_id', $user->employee->id)
                ->latest()
                ->get();
        }

        return response()->json([
            'data' => [
                'leave_requests' => $leaves,
            ],
            'message' => 'Leave Request List Found Successfully.',
        ]);
    }
}
