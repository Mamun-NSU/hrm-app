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

        if ($user->role?->name === 'Admin') {
            $training = EmployeeTraining::with('employee.user', 'training')->get();
        } else {
            $employeeId = $user->employee?->id;

            $training = EmployeeTraining::with('employee.user', 'training')
                ->when($employeeId, function ($query, $employeeId) {
                    return $query->where('employee_id', $employeeId);
                })
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
