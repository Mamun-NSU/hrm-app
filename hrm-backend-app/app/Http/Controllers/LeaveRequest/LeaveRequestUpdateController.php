<?php

namespace App\Http\Controllers\LeaveRequest;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaveRequest\LeaveRequestUpdateRequest;
use App\Models\LeaveRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LeaveRequestUpdateController extends Controller
{
    public function __invoke(LeaveRequestUpdateRequest $request, LeaveRequest $leaveRequest): JsonResponse
    {
        $status = ucfirst(strtolower($request->status));

        $leaveRequest->update([
            'approved_by' => Auth::id(),
            'status' => $status,
        ]);

        $leaveRequest = $leaveRequest->fresh(['employee.user', 'leaveType']);

        return response()->json([
            'data' => [
                'leave_request' => $leaveRequest,
            ],
            'message' => "Leave {$status} successfully.",
        ]);
    }
}
