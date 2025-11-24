<?php

namespace App\Http\Controllers\LeaveType;

use App\Http\Controllers\Controller;
use App\Models\LeaveType;
use Illuminate\Http\JsonResponse;

class LeaveTypeListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $leaveTypes = LeaveType::all();

        return response()->json([
            'data' => [
                'leave_types' => $leaveTypes,
            ],
            'message' => 'Leave Type List Found Successfully.',
        ]);
    }
}
