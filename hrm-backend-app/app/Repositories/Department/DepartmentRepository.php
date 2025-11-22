<?php

namespace App\Repositories\Department;

use App\Models\Department;

class DepartmentRepository
{
    public function all() { return Department::all(); }
    public function create(array $data) { return Department::create($data); }
    public function delete(Department $department) { return $department->delete(); }
    public function find($id) { return Department::find($id); }
    public function update(array $data, Department $department ) { $department->update($data); return $department; } 
}
