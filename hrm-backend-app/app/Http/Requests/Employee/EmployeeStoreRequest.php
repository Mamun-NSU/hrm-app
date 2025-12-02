<?php

namespace App\Http\Requests\Employee;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'date_of_birth' => 'nullable|date',
            'department_id' => 'nullable|exists:departments,id',
            'designation_id' => 'nullable|exists:designations,id',
            'employee_code' => 'required|unique:employees,employee_code',
            'employment_status' => 'in:Active,Probation,Resigned',
            'gender' => 'nullable|in:Male,Female,Other',
            'join_date' => 'nullable|date',
            'phone' => 'nullable|string|max:20|unique:employees,phone',
            'salary_base' => 'numeric|min:0',
            'user_id' => 'required|exists:users,id',
        ];
    }
}
