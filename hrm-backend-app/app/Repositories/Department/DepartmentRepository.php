<?php

namespace App\Repositories\Department;

use App\Models\Department;

class DepartmentRepository
{
    public function all() { return Department::all(); }
    public function find($id) { return Department::find($id); }
    public function create(array $data) { return Department::create($data); }
    public function update(Department $department, array $data) { $department->update($data); return $department; }
    public function delete(Department $department) { return $department->delete(); }
}
