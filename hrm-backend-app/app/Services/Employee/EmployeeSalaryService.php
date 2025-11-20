<?php

namespace App\Services\Employee;

use App\Repositories\Employee\EmployeeSalaryRepository;

class EmployeeSalaryService
{
    protected $repo;

    public function __construct(EmployeeSalaryRepository $repo)
    {
        $this->repo = $repo;
    }

    public function employeesWithSalary()
    {
        return $this->repo->getEmployeesWithSalary();
    }
}
