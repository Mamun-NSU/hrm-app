<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;

class EmployeeShowController extends Controller
{
    public function __invoke(Employee $employee): JsonResponse
    {
        $employee = $employee->load(['department', 'designation', 'user.role']);

        return response()->json([
            'data' => [
                'employee' => $employee,
            ],
            'message' => 'Employee Find Successfully.',
        ]);
    }
}
