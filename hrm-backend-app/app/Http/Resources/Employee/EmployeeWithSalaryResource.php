<?php

namespace App\Http\Resources\Employee;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeWithSalaryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'   => $this->id,
            'payrolls' => $this->payrolls,
            'salary_structure' => $this->salaryStructure ? [
                'basic_salary'      => $this->salaryStructure->basic_salary,
                'allowance_amount'  => $this->salaryStructure->allowance_amount,
                'deduction_amount'  => $this->salaryStructure->deduction_amount,
            ] : null,
            'user' => [
                'name' => $this->user->name ?? null
            ],
        ];
    }
}
