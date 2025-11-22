<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;

class EmployeeDestroyController extends Controller
{
    public function __invoke(Employee $employee): JsonResponse
    {
        $employee->delete();
        
        return response()->json(['message' => 'Employee deleted successfully']);
    }
}
