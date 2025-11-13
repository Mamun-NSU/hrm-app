<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Employee;
use App\Models\Attendance;
use Carbon\Carbon;

class AuthController extends Controller
{
    // Register user
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user
        ], 201);
    }

    // Login user and create token + attendance check-in
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        // Record attendance check-in
        $employee = Employee::where('user_id', $user->id)->first();
        if ($employee) {
            $today = Carbon::today()->toDateString();
            $attendance = Attendance::firstOrCreate(
                ['employee_id' => $employee->id, 'date' => $today],
                ['status' => 'Present', 'check_in_time' => Carbon::now()]
            );
        }

        return response()->json([
            'token' => $token,
            'user' => $user
        ]);
    }

    // Logout user (revoke current token + attendance check-out)
    public function logout(Request $request)
    {
        $user = Auth::user();

        // Attendance check-out
        $employee = Employee::where('user_id', $user->id)->first();
        if ($employee) {
            $today = Carbon::today()->toDateString();
            $attendance = Attendance::where('employee_id', $employee->id)
                                    ->where('date', $today)
                                    ->first();
            if ($attendance) {
                $attendance->update([
                    'check_out_time' => Carbon::now(),
                    'status' => 'Absent', // You can customize logic for late, present, etc.
                ]);
            }
        }

        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    // Get authenticated user
    public function me()
    {
        $user = Auth::user();
        return response()->json($user);
    }
}



// namespace App\Http\Controllers\API;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
// use App\Models\User;

// class AuthController extends Controller
// {
//     // Register user
//     public function register(Request $request)
//     {
//         $request->validate([
//             'name' => 'required|string|max:255',
//             'email' => 'required|email|unique:users,email',
//             'password' => 'required|string|confirmed|min:6',
//         ]);

//         $user = User::create([
//             'name' => $request->name,
//             'email' => $request->email,
//             'password' => bcrypt($request->password),
//         ]);

//         return response()->json([
//             'message' => 'User registered successfully',
//             'user' => $user
//         ], 201);
//     }

//     // Login user and create token
//     public function login(Request $request)
//     {
//         $request->validate([
//             'email' => 'required|email',
//             'password' => 'required|string',
//         ]);

//         if (!Auth::attempt($request->only('email', 'password'))) {
//             return response()->json(['message' => 'Invalid credentials'], 401);
//         }

//         $user = Auth::user();
//         $token = $user->createToken('auth_token')->plainTextToken;

//         return response()->json([
//             'token' => $token,
//             'user' => $user
//         ]);
//     }

//     // Logout user (revoke current token)
//     public function logout(Request $request)
//     {
//         $request->user()->currentAccessToken()->delete();

//         return response()->json([
//             'message' => 'Logged out successfully'
//         ]);
//     }

//     // Get authenticated user
//     public function me(Request $request)
//     {
//         return response()->json($request->user());
//     }
// }
