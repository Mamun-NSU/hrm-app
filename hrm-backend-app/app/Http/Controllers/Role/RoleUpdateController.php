<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Http\Requests\Role\RoleUpdateRequest;
use App\Models\Role;
use Illuminate\Http\JsonResponse;

class RoleUpdateController extends Controller
{
    public function __invoke(RoleUpdateRequest $request, Role $role): JsonResponse
    {
        $role->update($request->validated());

        return response()->json([
            'data' => [
                'role' => $role,
            ],
            'message' => 'Role Update Successfully.',
        ]);
    }
}
