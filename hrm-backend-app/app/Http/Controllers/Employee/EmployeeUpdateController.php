<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;

class EmployeeUpdateController extends Controller
{
    public function __invoke(
        UpdateEmployeeRequest $request,
        Employee $employee, 
    ): JsonResponse
    {
    $employee->update($request->validated());

    $employee->load(['department', 'designation', 'user.role']);

        return response()->json([
            'data' => [
                'employee' => $employee,
            ],
            'message' => 'Employee Update Successfully.',
        ]);
    }
}
