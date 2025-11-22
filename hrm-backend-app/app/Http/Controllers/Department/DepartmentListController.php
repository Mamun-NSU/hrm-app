<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\JsonResponse;

class DepartmentListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $departments = Department::all();

        return response()->json([
            'data' => [
                'departments' => $departments,
            ],
            'message' => 'Department List Found Successfully.',
        ]);
    }
}
