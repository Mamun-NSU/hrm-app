<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Http\Requests\Department\DepartmentUpdateRequest;
use App\Models\Department;
use Illuminate\Http\JsonResponse;

class DepartmentUpdateController extends Controller
{
    public function __invoke(DepartmentUpdateRequest $request, Department $department): JsonResponse
    {
        $department->update($request->validated());

        return response()->json([
            'data' => [
                'department' => $department,
            ],
            'message' => 'Department Update Successfully.',
        ]);
    }
}
