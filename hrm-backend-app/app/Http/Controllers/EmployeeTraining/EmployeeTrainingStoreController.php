<?php

namespace App\Http\Controllers\EmployeeTraining;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeTraining\EmployeeTrainingStoreRequest;
use App\Models\EmployeeTraining;
use Illuminate\Http\JsonResponse;

class EmployeeTrainingStoreController extends Controller
{
    public function __invoke(EmployeeTrainingStoreRequest $request): JsonResponse
    {
        $training = EmployeeTraining::create($request->validated());

        $training->load(['employee.user', 'training']);

        return response()->json([
            'data' => [
                'employee_training' => $training,
            ],
            'message' => 'Employee Training Created Successfully.',
        ], 201);
    }
}
