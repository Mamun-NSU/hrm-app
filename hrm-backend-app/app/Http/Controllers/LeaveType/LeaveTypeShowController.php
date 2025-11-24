<?php

namespace App\Http\Controllers\LeaveType;

use App\Http\Controllers\Controller;
use App\Models\LeaveType;
use Illuminate\Http\JsonResponse;

class LeaveTypeShowController extends Controller
{
    public function __invoke(LeaveType $leaveType): JsonResponse
    {
        return response()->json([
            'data' => [
                'leave_type' => $leaveType,
            ],
            'message' => 'Leave Type Found Successfully.',
        ]);
    }
}
