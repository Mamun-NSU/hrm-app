<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\JsonResponse;

class RoleShowController extends Controller
{
    public function __invoke(Role $role): JsonResponse
    {
        return response()->json([
            'data' => [
                'role' => $role,
            ],
            'message' => 'Role Find Successfully.',
        ]);
    }
}
