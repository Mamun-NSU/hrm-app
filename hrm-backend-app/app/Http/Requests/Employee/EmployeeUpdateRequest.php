<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmployeeUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $employeeId = $this->route('id');

        return [
            'department_id' => 'nullable|exists:departments,id',
            'designation_id' => 'nullable|exists:designations,id',
            'employee_code' => [
            'required',
                Rule::unique('employees', 'employee_code')
                ->ignore($this->employee->id),
            ],
            'phone' => 'nullable|string|max:20',
            'gender' => 'nullable|in:Male,Female,Other',
            'date_of_birth' => 'nullable|date',
            'join_date' => 'nullable|date',
            'employment_status' => 'in:Active,Probation,Resigned',
            'salary_base' => 'numeric|min:0',
        ];
    }
}
