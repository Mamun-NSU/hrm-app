<?php

namespace App\Http\Controllers\Attendance;

use App\Http\Controllers\Controller;
use App\Http\Requests\Attendance\AttendanceStoreRequest;
use App\Models\Attendance;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class AttendanceStoreController extends Controller
{
    public function __invoke(AttendanceStoreRequest $request): JsonResponse
    {
        $user = Auth::user();
        $employee = Employee::where('user_id', $user->id)->first();

        if (!$employee) {
            return response()->json([
                'message' => 'Employee record not found'
            ], 404);
        }

        if (!in_array($request->type, ['login', 'logout'])) {
            return response()->json([
                'message' => 'Invalid attendance type'
            ], 422);
        }

        $today = Carbon::now()->toDateString();
        $currentTime = Carbon::now()->format('H:i:s');

        $attendance = Attendance::firstOrNew([
            'employee_id' => $employee->id,
            'date' => $today
        ]);

        if ($request->type === 'login') {
            if (!$attendance->exists) {
                $attendance->check_in_time = $currentTime;
                $attendance->status = Carbon::now()->format('H:i') > '09:30' ? 'Late' : 'Present';
                $attendance->save();
            }

            return response()->json([
                'data' => [
                'attendance' => $attendance,
                ],
                'message' => 'Check-in recorded',
                ]);
            }

        if ($request->type === 'logout') {
            $attendance->check_out_time = $currentTime;

            if (!$attendance->check_in_time) {
                $attendance->status = 'Present';
            }

            $attendance->save();

            return response()->json([
                'data' => [
                'attendance' => $attendance,
                ],
                'message' => 'Check-out recorded',
                ]);
            }

        return response()->json([
            'data' => [
                'attendance' => $attendance,
            ],
            'message' => 'Attendance Stored Successfully.',
        ]);
    }
}
