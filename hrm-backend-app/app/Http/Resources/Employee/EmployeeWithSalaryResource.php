<?php

namespace App\Http\Resources\Employee;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeWithSalaryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'   => $this->id,

            // Frontend expects: emp.user?.name
            'user' => [
                'name' => $this->user->name ?? null
            ],

            // Frontend expects salary_structure.*
            'salary_structure' => $this->salaryStructure ? [
                'basic_salary'      => $this->salaryStructure->basic_salary,
                'allowance_amount'  => $this->salaryStructure->allowance_amount,
                'deduction_amount'  => $this->salaryStructure->deduction_amount,
            ] : null,

            // Frontend expects existing payrolls
            'payrolls' => $this->payrolls,
        ];
    }
}
