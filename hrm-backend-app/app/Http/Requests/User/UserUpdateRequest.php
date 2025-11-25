<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $id = $this->route('id') ?? $this->route('user');

        return [
            'email'    => "sometimes|email|unique:users,email,{$id}",
            'name'     => 'sometimes|string|max:255',
            'password' => 'sometimes|string|min:6',
            'role_id'  => 'nullable|exists:roles,id',
        ];
    }
}


