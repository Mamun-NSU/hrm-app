<?php

namespace App\Services\Designation;

use App\Models\Designation;

class DesignationService
{
    public function create(array $data): Designation { return Designation::create($data); }
    public function update(Designation $designation, array $data): Designation
    {
        $designation->update($data);
        return $designation;
    }
}
