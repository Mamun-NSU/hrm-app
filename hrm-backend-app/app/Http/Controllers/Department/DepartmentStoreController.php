<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Http\Requests\Department\DepartmentStoreRequest;
use App\Models\Department;
use Illuminate\Http\JsonResponse;

class DepartmentStoreController extends Controller
{
    public function __invoke(DepartmentStoreRequest $request): JsonResponse
    {
        $department = Department::create($request->validated());

        return response()->json([
            'data' => [
                'department' => $department,
            ],
            'message' => 'Department Store Successfully.',
        ]);
    }
}
