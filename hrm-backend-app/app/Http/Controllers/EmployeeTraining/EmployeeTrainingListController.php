<?php

namespace App\Http\Controllers\EmployeeTraining;

use App\Http\Controllers\Controller;
use App\Models\EmployeeTraining;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class EmployeeTrainingListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();

        if ($user->role_id === 1) {
            $training = EmployeeTraining::with('employee.user', 'training')->get();
        } else {
            $training = EmployeeTraining::with('employee.user', 'training')
                ->where('employee_id', $user->employee->id)
                ->get();
        }

        return response()->json([
            'data' => [
                'employee_trainings' => $training,
            ],
            'message' => 'Employee Training List Found Successfully.',
        ]);
    }
}
