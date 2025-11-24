<?php

namespace App\Http\Requests\LeaveType;

use Illuminate\Foundation\Http\FormRequest;

class LeaveTypeUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'days_per_year' => 'required|integer|min:0',
            'description'   => 'nullable|string',
            'name'          => 'required|string|max:255|unique:leave_types,name,' . $this->leave_type->id,   
        ];
    }

    public function messages(): array
    {
        return [
            'days_per_year.required' => 'Leave days per year is required.',
            'name.required'          => 'Leave type name is required.',
            'name.unique'            => 'This leave type name already exists.',
        ];
    }
}
