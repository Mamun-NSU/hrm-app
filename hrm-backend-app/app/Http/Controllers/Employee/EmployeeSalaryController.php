<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;

class EmployeeSalaryController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $employees = Employee::with([
            'department',
            'designation',
            'user.role',
            'salaryStructure',
        ])->get();

        return response()->json([
            'data' => [
                'employees' => $employees,
            ],
            'message' => 'Employee Salary List Found Successfully.',
        ]);
    }
}

