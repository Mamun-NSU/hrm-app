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
            'date_of_birth'     => $this->date_of_birth,
            'department'  => $this->whenLoaded('department', fn() =>
                new DepartmentResource($this->department)
            ),
            'designation' => $this->whenLoaded('designation', fn() =>
                new DesignationResource($this->designation)
            ),
            'employee_code' => $this->employee_code,
            'employment_status' => $this->employment_status,
            'gender' => $this->gender,
            'id' => $this->id,
            'join_date'         => $this->join_date,
            'phone'             => $this->phone,
            'role_name' => $this->user?->role?->name ?? 'Not Assigned',
            'salary_base'       => $this->salary_base,
            'user' => $this->whenLoaded('user', fn() =>
                new UserResource($this->user)
            ),
        ];
    }
}
