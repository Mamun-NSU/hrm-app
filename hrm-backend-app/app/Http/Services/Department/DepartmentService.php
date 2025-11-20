<?php

namespace App\Services\Department;

use App\Models\Department;

class DepartmentService
{
    public function create(array $data): Department { return Department::create($data); }
    public function update(Department $department, array $data): Department
    {
        $department->update($data);
        return $department;
    }
}
