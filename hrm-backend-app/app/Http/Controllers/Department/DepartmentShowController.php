<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\JsonResponse;

class DepartmentShowController extends Controller
{
    public function __invoke(Department $department): JsonResponse
    {
        return response()->json([
            'data' => [
                'department' => $department,
            ],
            'message' => 'Department Find Successfully.',
        ]);
    }
}
