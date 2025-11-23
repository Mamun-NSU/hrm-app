<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employee\EmployeeStoreRequest;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;

class EmployeeStoreController extends Controller
{
    public function __invoke(EmployeeStoreRequest $request): JsonResponse
    {
        $employee = Employee::create($request->validated());

        $employee->load(['department', 'designation', 'user.role']);

        return response()->json([
            'data' => [
                'employee' => $employee,
            ],
            'message' => 'Employee Store Successfully.',
        ]);
    }
}
