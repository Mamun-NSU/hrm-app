<?php

namespace App\Repositories\Employee;

use App\Models\Employee;

class EmployeeRepository
{
    public function allWithRelations(array $relations = [])
    {
        return Employee::with($relations)->get();
    }

    public function findWithRelations(int $id, array $relations = [])
    {
        return Employee::with($relations)->find($id);
    }

    public function create(array $data)
    {
        return Employee::create($data);
    }

    public function update(Employee $employee, array $data)
    {
        $employee->update($data);
        return $employee;
    }

    public function delete(Employee $employee)
    {
        return $employee->delete();
    }

    // Optional: keep old methods for backward compatibility
    public function all()
    {
        return $this->allWithRelations(['user.role', 'department', 'designation']);
    }

    public function find($id)
    {
        return $this->findWithRelations($id, ['user.role', 'department', 'designation']);
    }
}
