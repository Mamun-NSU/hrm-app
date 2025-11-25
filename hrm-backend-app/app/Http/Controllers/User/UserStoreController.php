<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserStoreRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserStoreController extends Controller
{
    public function __invoke(UserStoreRequest $request)
    {
        $user = User::create([
            'email'    => $request->email,
            'name'     => $request->name,
            'password' => Hash::make($request->password),
            'role_id'  => $request->role_id,
        ]);
        
        return response()->json([
            'data' => [
                'user'    => $user,
            ],
            'message' => 'User Store Successfully',
        ]);
    }
}
