<?php

namespace App\Http\Controllers\LeaveRequest;

use App\Http\Controllers\Controller;
use App\Http\Requests\LeaveRequest\LeaveRequestStoreRequest;
use App\Models\LeaveRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LeaveRequestStoreController extends Controller
{
    public function __invoke(LeaveRequestStoreRequest $request): JsonResponse
    {
        $employee = Auth::user()->employee;

        if (!$employee) {
            return response()->json(['message' => 'Employee record not found'], 404);
        }

        $leave = LeaveRequest::create([
            'employee_id'   => $employee->id,
            'from_date'     => $request->from_date,
            'leave_type_id' => $request->leave_type_id,
            'reason'        => $request->reason,
            'status'        => 'Pending',
            'to_date'       => $request->to_date,  
        ]);

        return response()->json([
            'data' => [
                'leave_request' => $leave,
            ],
            'message' => 'Leave Request Submitted Successfully.',
        ]);
    }
}
