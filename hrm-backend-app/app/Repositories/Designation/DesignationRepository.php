<?php

namespace App\Repositories\Designation;

use App\Models\Designation;

class DesignationRepository
{
    public function all() { return Designation::all(); }
    public function find($id) { return Designation::find($id); }
    public function create(array $data) { return Designation::create($data); }
    public function update(Designation $designation, array $data) { $designation->update($data); return $designation; }
    public function delete(Designation $designation) { return $designation->delete(); }
}
