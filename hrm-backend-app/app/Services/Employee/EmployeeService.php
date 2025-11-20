<?php

namespace App\Services\Employee;

use App\Models\Employee;
use App\Repositories\Employee\EmployeeRepository;

class EmployeeService
{
    public function __construct(private EmployeeRepository $repo) {}

    public function create(array $data)
    {
        $employee = $this->repo->create($data);
        return $employee->load('user.role');
    }

    public function update(Employee $employee, array $data)
    {
        $employee = $this->repo->update($employee, $data);
        return $employee->load('user.role');
    }
}
