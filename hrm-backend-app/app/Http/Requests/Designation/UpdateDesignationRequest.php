<?php

namespace App\Http\Requests\Designation;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDesignationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // You can implement role/permission check here if needed
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        // Get the ID from the route
        $id = $this->route('id');

        return [
            'title' => 'required|string|max:255|unique:designations,title,' . $id,
        ];
    }

    /**
     * Custom messages (optional)
     */
    public function messages(): array
    {
        return [
            'title.required' => 'The designation title is required.',
            'title.unique' => 'This designation already exists.',
            'title.max' => 'The designation title cannot exceed 255 characters.',
        ];
    }
}
