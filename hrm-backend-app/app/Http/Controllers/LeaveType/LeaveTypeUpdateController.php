<?php

namespace App\Http\Controllers\LeaveType;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaveType\LeaveTypeUpdateRequest;
use App\Models\LeaveType;
use Illuminate\Http\JsonResponse;

class LeaveTypeUpdateController extends Controller
{
    public function __invoke(LeaveTypeUpdateRequest $request, LeaveType $leaveType): JsonResponse
    {
        $leaveType->update($request->validated());

        return response()->json([
            'data' => [
                'leave_type' => $leaveType,
            ],
            'message' => 'Leave Type Updated Successfully.',
        ]);
    }
}
