<?php

namespace App\Http\Controllers\EmployeeTraining;

use App\Http\Controllers\Controller;
use App\Models\EmployeeTraining;
use Illuminate\Http\JsonResponse;

class EmployeeTrainingDestroyController extends Controller
{
    public function __invoke(EmployeeTraining $employeeTraining): JsonResponse
    {
        $employeeTraining->delete();

        return response()->json([
            'message' => 'Employee Training Deleted Successfully.',
        ]);
    }
}
