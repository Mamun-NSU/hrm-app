<?php

namespace App\Http\Requests\Designation;

use Illuminate\Foundation\Http\FormRequest;

class DesignationStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function messages(): array
    {
        return [
            'title.max' => 'The designation title cannot exceed 255 characters.',
            'title.required' => 'The designation title is required.',
            'title.unique' => 'This designation already exists.', 
        ];
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255|unique:designations,title',
        ];
    }
}
