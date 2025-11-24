<?php

namespace App\Http\Controllers\LeaveRequest;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaveRequest\LeaveRequestUpdateRequest;
use App\Models\LeaveRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LeaveRequestUpdateController extends Controller
{
    public function __invoke(LeaveRequestUpdateRequest $request, LeaveRequest $leave_request): JsonResponse
    {
        $leave_request->update([
            'approved_by' => Auth::id(),
            'status' => $request->status,
           
        ]);

        return response()->json([
            'data' => [
                'leave_request' => $leave_request,
            ],
            'message' => "Leave {$request->status} successfully.",
        ]);
    }
}
