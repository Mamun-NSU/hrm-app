<?php

namespace App\Http\Controllers\Attendance;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use App\Models\Employee;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;

class AttendanceListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();

        if ($user->role && $user->role->name === 'Admin') {
            $attendances = Attendance::with(['employee.user'])
                ->orderBy('date', 'desc')
                ->get();
        } else {
            $employee = Employee::where('user_id', $user->id)->first();

            if (!$employee) {
                return response()->json(['message' => 'Employee record not found'], 404);
            }

            $attendances = Attendance::with(['employee.user'])
                ->where('employee_id', $employee->id)
                ->orderBy('date', 'desc')
                ->get();
        }

        return response()->json([
            'data' => [
                'attendances' => $attendances
            ],
            'message' => 'Attendance List Found Successfully.'
        ]);
    }
}
