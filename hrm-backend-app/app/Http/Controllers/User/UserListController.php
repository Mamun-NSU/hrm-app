<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $users = User::with('role')->get();

        return response()->json([
            'data' => [
                'users' => $users,
            ],
            'message' => 'User List Found Successfully.',
        ]);
    }
}
