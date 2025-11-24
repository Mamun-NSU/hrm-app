<?php

namespace App\Http\Controllers\LeaveType;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaveType\LeaveTypeStoreRequest;
use App\Models\LeaveType;
use Illuminate\Http\JsonResponse;

class LeaveTypeStoreController extends Controller
{
    public function __invoke(LeaveTypeStoreRequest $request): JsonResponse
    {
        $leaveType = LeaveType::create($request->validated());

        return response()->json([
            'data' => [
                'leave_type' => $leaveType,
            ],
            'message' => 'Leave Type Created Successfully.',
        ]);
    }
}
