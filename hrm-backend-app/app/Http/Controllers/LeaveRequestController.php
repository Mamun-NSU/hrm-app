<?php

namespace App\Http\Controllers;

use App\Models\LeaveRequest;
use App\Models\LeaveType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LeaveRequestController extends Controller
{
    /**
     * View all leave requests.
     * - Admin → sees all
     * - Employee → sees own only
     */
    public function index()
    {
        $user = Auth::user();

        // Admin sees all leaves
        if ($user->role_id === 1) {
            $leaves = LeaveRequest::with(['employee.user', 'leaveType'])->latest()->get();
        }
        // Employee sees only their own
        else {
            $leaves = LeaveRequest::with(['employee.user', 'leaveType'])
                ->where('employee_id', $user->employee->id)
                ->latest()
                ->get();
        }

        return response()->json($leaves);
    }

    /**
     * Submit leave request (Employee only)
     */
    public function store(Request $request)
    {
        $request->validate([
            'leave_type_id' => 'required|exists:leave_types,id',
            'from_date'     => 'required|date',
            'to_date'       => 'required|date|after_or_equal:from_date',
            'reason'        => 'nullable|string|max:500',
        ]);

        $employee = Auth::user()->employee;

        if (!$employee) {
            return response()->json(['message' => 'Employee record not found'], 404);
        }

        $leave = LeaveRequest::create([
            'employee_id'   => $employee->id,
            'leave_type_id' => $request->leave_type_id,
            'from_date'     => $request->from_date,
            'to_date'       => $request->to_date,
            'reason'        => $request->reason,
            'status'        => 'Pending',
        ]);

        return response()->json(['message' => 'Leave request submitted', 'data' => $leave], 201);
    }

    /**
     * Approve or Reject (Admin only)
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:Approved,Rejected',
        ]);

        $leave = LeaveRequest::find($id);

        if (!$leave) {
            return response()->json(['message' => 'Leave request not found'], 404);
        }

        $leave->status = $request->status;
        $leave->approved_by = Auth::id();
        $leave->save();

        return response()->json(['message' => "Leave {$request->status}", 'data' => $leave]);
    }

    /**
     * Delete a leave request (Admin only)
     */
    public function destroy($id)
    {
        $leave = LeaveRequest::find($id);

        if (!$leave) {
            return response()->json(['message' => 'Leave request not found'], 404);
        }

        $leave->delete();

        return response()->json(['message' => 'Leave request deleted']);
    }
}
