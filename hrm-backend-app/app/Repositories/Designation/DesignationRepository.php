<?php

namespace App\Repositories\Designation;

use App\Models\Designation;

class DesignationRepository
{
    public function all() { return Designation::all(); }
    public function create(array $data) { return Designation::create($data); }
    public function delete(Designation $designation) { return $designation->delete(); }
    public function find($id) { return Designation::find($id); }
    public function update(array $data, Designation $designation) { $designation->update($data); return $designation; }
}
