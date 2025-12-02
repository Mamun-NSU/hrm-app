<?php

namespace App\Http\Controllers\Authenticate;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AuthenticateUserAboutController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user()->load('role');

        return response()->json([
            'data' => [
                'user' => $user,
            ],
            'message' => 'Authenticated User Found Successfully.',
        ]);
    }
}
