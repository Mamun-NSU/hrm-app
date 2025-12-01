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

        if ($user->role?->name === 'Admin') {
            $leaves = LeaveRequest::with(['employee.user', 'leaveType'])
                ->latest()
                ->get();
        } else {
            $employeeId = $user->employee?->id;

            $leaves = LeaveRequest::with(['employee.user', 'leaveType'])
                ->when($employeeId, function ($query, $employeeId) {
                    return $query->where('employee_id', $employeeId);
                })
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
