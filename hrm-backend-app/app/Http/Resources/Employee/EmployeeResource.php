<?php

namespace App\Http\Resources\Employee;

use App\Http\Resources\Department\DepartmentResource;
use App\Http\Resources\Designation\DesignationResource;
use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'                => $this->id,
            'employee_code'     => $this->employee_code,
            'phone'             => $this->phone,
            'gender'            => $this->gender,
            'date_of_birth'     => $this->date_of_birth,
            'join_date'         => $this->join_date,
            'employment_status' => $this->employment_status,
            'salary_base'       => $this->salary_base,

            // RELATIONSHIPS
            'department'  => $this->whenLoaded('department', fn() =>
                new DepartmentResource($this->department)
            ),

            'designation' => $this->whenLoaded('designation', fn() =>
                new DesignationResource($this->designation)
            ),

            'user' => $this->whenLoaded('user', fn() =>
                new UserResource($this->user)
            ),

            // EXTRA FIELD — Role Name (Safe)
            'role_name' => $this->user?->role?->name ?? 'Not Assigned',
        ];
    }
}
