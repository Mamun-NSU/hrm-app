<?php

namespace App\Http\Requests\Training;

use Illuminate\Foundation\Http\FormRequest;

class TrainingUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'description' => 'nullable|string',
            'end_date' => 'required|date|after_or_equal:start_date',
            'start_date' => 'required|date',
            'title' => 'required|string|max:255',   
        ];
    }
}
