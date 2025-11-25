<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use App\Models\Employee;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticateLogoutController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $user = Auth::user();

        $employee = Employee::where('user_id', $user->id)->first();
        if ($employee) {
            $attendance = Attendance::where('employee_id', $employee->id)
                ->where('date', Carbon::today()->toDateString())
                ->first();

            if ($attendance) {
                $attendance->update([
                    'check_out_time' => Carbon::now(),
                ]);
            }
        }

        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged Out Successfully.',
        ]);
    }
}
