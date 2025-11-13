<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\Employee;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    // Get all attendance records
    public function index()
    {
        $attendances = Attendance::with(['employee.user'])->orderBy('date', 'desc')->get();
        return response()->json($attendances);
    }

    // Mark attendance on login/logout
    public function markAttendance(Request $request)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'type' => 'required|in:login,logout'
        ]);

        $employee_id = $request->employee_id;
        $type = $request->type;
        $today = Carbon::now()->toDateString();

        $attendance = Attendance::firstOrCreate(
            ['employee_id' => $employee_id, 'date' => $today],
            ['status' => 'Present']
        );

        if ($type === 'login') {
            // Mark check-in if not already
            if (!$attendance->check_in_time) {
                $attendance->check_in_time = Carbon::now()->format('H:i:s');
                // Mark late if after 09:30
                $attendance->status = Carbon::now()->format('H:i') > '09:30' ? 'Late' : 'Present';
            }
        }

        if ($type === 'logout') {
            // Cannot logout before check-in
            if (!$attendance->check_in_time) {
                return response()->json(['message' => 'Cannot check-out before check-in'], 400);
            }
            $attendance->check_out_time = Carbon::now()->format('H:i:s');
        }

        $attendance->save();

        return response()->json([
            'message' => "Attendance $type recorded successfully",
            'attendance' => $attendance
        ]);
    }

    // View single attendance
    public function show($id)
    {
        $attendance = Attendance::with(['employee.user'])->findOrFail($id);
        return response()->json($attendance);
    }

    // Update attendance manually (optional)
    public function update(Request $request, $id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->update($request->only(['check_in_time', 'check_out_time', 'status']));
        return response()->json(['message' => 'Attendance updated', 'attendance' => $attendance]);
    }

    // Delete attendance record
    public function destroy($id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->delete();
        return response()->json(['message' => 'Attendance record deleted']);
    }
}
