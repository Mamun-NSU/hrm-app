<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\JsonResponse;

class RoleListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $roles = Role::all();

        return response()->json([
            'data' => [
                'roles' => $roles,
            ],
            'message' => 'Role List Found Successfully.',
        ]);
    }
}
