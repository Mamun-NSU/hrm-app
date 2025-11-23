<?php

namespace App\Http\Requests\Role;

use Illuminate\Foundation\Http\FormRequest;

class RoleUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $roleId = $this->route('role');

        return [
            'name'        => 'required|string|max:255|unique:roles,name,' . $roleId->id,
            'description' => 'nullable|string|max:500',
        ];
    }
}
