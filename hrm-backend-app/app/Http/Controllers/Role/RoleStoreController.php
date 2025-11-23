<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Http\Requests\Role\RoleStoreRequest;
use App\Models\Role;
use Illuminate\Http\JsonResponse;

class RoleStoreController extends Controller
{
    public function __invoke(RoleStoreRequest $request): JsonResponse
    {
        $role = Role::create($request->validated());

        return response()->json([
            'data' => [
                'role' => $role,
            ],
            'message' => 'Role Store Successfully.',
        ]);
    }
}
