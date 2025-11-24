<?php

namespace App\Http\Controllers\LeaveRequest;

use App\Http\Controllers\Controller;
use App\Models\LeaveRequest;
use Illuminate\Http\JsonResponse;

class LeaveRequestDestroyController extends Controller
{
    public function __invoke(LeaveRequest $leave_request): JsonResponse
    {
        $leave_request->delete();

        return response()->json([
            'message' => 'Leave Request Deleted Successfully.',
        ]);
    }
}
