<?php

namespace App\Http\Controllers\EmployeeTraining;

use App\Http\Controllers\Controller;
use App\Models\EmployeeTraining;
use Illuminate\Http\JsonResponse;

class EmployeeTrainingShowController extends Controller
{
    public function __invoke(EmployeeTraining $employeeTraining): JsonResponse
    {
        $employeeTraining->load(['employee.user', 'training']);

        return response()->json([
            'data' => [
                'employee_training' => $employeeTraining,
            ],
            'message' => 'Employee Training Found Successfully.',
        ]);
    }
}
