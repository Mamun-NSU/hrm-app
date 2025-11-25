<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserShowController extends Controller
{
    public function __invoke($id)
    {
        $user = User::with('role')->findOrFail($id);

        return response()->json([
            'data' => [
                'user'    => $user,
            ],
            'message' => 'User Found Successfully',
        ]);
    }
}
