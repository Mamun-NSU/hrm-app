<?php

namespace App\Http\Controllers\LeaveRequest;

use App\Http\Controllers\Controller;
use App\Models\LeaveRequest;
use Illuminate\Http\JsonResponse;

class LeaveRequestShowController extends Controller
{
    public function __invoke(LeaveRequest $leaveRequest): JsonResponse
    {
        $leaveRequest->load(['employee.user', 'leaveType']);

        return response()->json([
            'data' => [
                'leave_request' => $leaveRequest,
            ],
            'message' => 'Leave Request Found Successfully.',
        ]);
    }
}
