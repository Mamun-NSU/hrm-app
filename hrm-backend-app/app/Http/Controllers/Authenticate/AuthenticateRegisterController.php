<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authenticate\AuthenticateRegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;

class AuthenticateRegisterController extends Controller
{
    public function __invoke(AuthenticateRegisterRequest $request): JsonResponse
    {
        $user = User::create([
            'email'    => $request->email,
            'name'     => $request->name, 
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'data' => [
                'user' => $user,
            ],
            'message' => 'User Registered Successfully.',
        ]);
    }
}
