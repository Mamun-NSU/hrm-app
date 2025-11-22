<?php

namespace App\Repositories\Employee;

use App\Models\Employee;

class EmployeeSalaryRepository
{
    public function getEmployeesWithSalary()
    {
        return Employee::with(['payrolls','salaryStructure','user'])
            ->orderBy('id')
            ->get();
    }
}
