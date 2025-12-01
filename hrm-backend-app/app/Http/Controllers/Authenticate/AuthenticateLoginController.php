<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authenticate\AuthenticateLoginRequest;
use App\Models\Employee;
use App\Models\Attendance;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthenticateLoginController extends Controller
{
    public function __invoke(AuthenticateLoginRequest $request): JsonResponse
    {
        // Attempt login
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        // Get logged-in user and load role relationship
        $user = Auth::user()->load('role');

        // Create Sanctum token
        $token = $user->createToken('auth_token')->plainTextToken;

        // Check employee record and record attendance
        $employee = Employee::where('user_id', $user->id)->first();
        if ($employee) {
            Attendance::firstOrCreate(
                ['employee_id' => $employee->id, 'date' => Carbon::today()->toDateString()],
                ['status' => 'Present', 'check_in_time' => Carbon::now()]
            );
        }

        // Return response with user including role
        return response()->json([
            'data' => [
                'token' => $token,
                'user'  => $user,
            ],
            'message' => 'Login Successful.',
        ]);
    }
}
