<?php

namespace App\Http\Requests\LeaveRequest;

use Illuminate\Foundation\Http\FormRequest;

class LeaveRequestStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'from_date'     => 'required|date',
            'leave_type_id' => 'required|exists:leave_types,id',
            'reason'        => 'nullable|string|max:500',
            'to_date'       => 'required|date|after_or_equal:from_date', 
        ];
    }
}
