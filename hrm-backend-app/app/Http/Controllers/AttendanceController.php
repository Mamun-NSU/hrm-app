<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\Employee;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class AttendanceController extends Controller
{
    // Show all attendance

public function index()
{
    $user = Auth::user();

    // 1. Admin → show all
    if ($user->role && $user->role->name === 'Admin') {
        return Attendance::with(['employee.user'])
            ->orderBy('date', 'desc')
            ->get();
    }

    // 2. Employee (including role_id = null) → show only their records
    $employee = Employee::where('user_id', $user->id)->first();

    if (!$employee) {
        return response()->json(['message' => 'Employee record not found'], 404);
    }

    return Attendance::with(['employee.user'])
        ->where('employee_id', $employee->id)
        ->orderBy('date', 'desc')
        ->get();
}



    // Auto attendance (Login / Logout)
    public function markAttendance(Request $request)
    {
        $request->validate([
            'type' => 'required|in:login,logout'
        ]);

        $user = Auth::user();
        $employee = Employee::where('user_id', $user->id)->first();

        if (!$employee) {
            return response()->json(['message' => 'Employee record not found'], 404);
        }

        $today = Carbon::now()->toDateString();
        $currentTime = Carbon::now()->format('H:i:s');

        // Find today's row
        $attendance = Attendance::where('employee_id', $employee->id)
            ->where('date', $today)
            ->first();

        // -------------------------------
        //  LOGIN (CHECK-IN)
        // -------------------------------
        if ($request->type === 'login') {
            if (!$attendance) {
                // First login of the day -> create
                $attendance = Attendance::create([
                    'employee_id' => $employee->id,
                    'date' => $today,
                    'check_in_time' => $currentTime,
                    'status' => Carbon::now()->format('H:i') > '09:30' ? 'Late' : 'Present'
                ]);
            }

            // Already logged in — do not overwrite check-in
            return response()->json([
                'message' => 'Check-in recorded',
                'attendance' => $attendance
            ]);
        }

        // -------------------------------
        //  LOGOUT (CHECK-OUT)
        // -------------------------------
        if ($request->type === 'logout') {
            // If no record exists → create with only check-out
            if (!$attendance) {
                $attendance = Attendance::create([
                    'employee_id' => $employee->id,
                    'date' => $today,
                    'check_in_time' => null,
                    'check_out_time' => $currentTime,
                    'status' => 'Present'
                ]);
            } else {
                // Update last logout time (always latest)
                $attendance->update([
                    'check_out_time' => $currentTime,
                ]);
            }

            return response()->json([
                'message' => 'Check-out recorded',
                'attendance' => $attendance
            ]);
        }
    }

    // Single record
    public function show($id)
    {
        $attendance = Attendance::with(['employee.user'])->findOrFail($id);
        return response()->json($attendance);
    }

    // Manual edit
    public function update(Request $request, $id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->update($request->only(['check_in_time', 'check_out_time', 'status']));
        return response()->json(['message' => 'Attendance updated', 'attendance' => $attendance]);
    }

    // Delete record
    public function destroy($id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->delete();
        return response()->json(['message' => 'Attendance deleted']);
    }
}
