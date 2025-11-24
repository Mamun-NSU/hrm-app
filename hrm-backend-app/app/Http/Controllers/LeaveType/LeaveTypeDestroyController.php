<?php

namespace App\Http\Controllers\LeaveType;

use App\Http\Controllers\Controller;
use App\Models\LeaveType;
use Illuminate\Http\JsonResponse;

class LeaveTypeDestroyController extends Controller
{
    public function __invoke(LeaveType $leaveType): JsonResponse
    {
        $leaveType->delete();

        return response()->json([
            'message' => 'Leave Type Deleted Successfully.',
        ]);
    }
}
