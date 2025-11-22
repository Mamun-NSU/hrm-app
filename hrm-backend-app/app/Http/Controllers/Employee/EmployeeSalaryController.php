<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Services\Employee\EmployeeSalaryService;
use App\Http\Resources\Employee\EmployeeWithSalaryResource;
use Illuminate\Http\JsonResponse;

class EmployeeSalaryController extends Controller
{
    public function __construct(private EmployeeSalaryService $service) {}

    public function __invoke(): JsonResponse
    {
        $employees = $this->service->employeesWithSalary();

        return response()->json(
            EmployeeWithSalaryResource::collection($employees)
        );
    }
}
