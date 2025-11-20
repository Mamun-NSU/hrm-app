<?php

namespace App\Repositories\Employee;

use App\Models\Employee;

class EmployeeSalaryRepository
{
    public function getEmployeesWithSalary()
    {
        return Employee::with(['user', 'salaryStructure', 'payrolls'])
            ->orderBy('id')
            ->get();
    }
}
