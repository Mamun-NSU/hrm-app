<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserUpdateController extends Controller
{
    public function __invoke(UserUpdateRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update([
            'email'    => $request->email ?? $user->email,
            'name'     => $request->name ?? $user->name,
            'password' => $request->password ? Hash::make($request->password) : $user->password,
            'role_id'  => $request->role_id ?? $user->role_id,
        ]);
        
        return response()->json([
            'data' => [
                'user'    => $user,
            ],
            'message' => 'User updated successfully',
        ]);
    }
}
