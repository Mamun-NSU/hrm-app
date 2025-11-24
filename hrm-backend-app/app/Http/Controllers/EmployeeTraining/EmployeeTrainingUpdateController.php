<?php

namespace App\Http\Controllers\EmployeeTraining;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeTraining\EmployeeTrainingUpdateRequest;
use App\Models\EmployeeTraining;
use Illuminate\Http\JsonResponse;

class EmployeeTrainingUpdateController extends Controller
{
    public function __invoke(
        EmployeeTrainingUpdateRequest $request,
        EmployeeTraining $employeeTraining
    ): JsonResponse
    {
        $employeeTraining->update($request->validated());

        $employeeTraining->load(['employee.user', 'training']);

        return response()->json([
            'data' => [
                'employee_training' => $employeeTraining,
            ],
            'message' => 'Employee Training Updated Successfully.',
        ]);
    }
}
