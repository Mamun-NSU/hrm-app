<?php

namespace App\Http\Controllers\Employee;
use App\Http\Controllers\Controller;
use App\Services\Employee\EmployeeSalaryService;
use App\Http\Resources\Employee\EmployeeWithSalaryResource;

class EmployeeSalaryController extends Controller
{
    protected $service;

    public function __construct(EmployeeSalaryService $service)
    {
        $this->service = $service;
    }

    public function employeesWithSalary()
    {
        $employees = $this->service->employeesWithSalary();

        return EmployeeWithSalaryResource::collection($employees);
    }
}
