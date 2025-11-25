<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email'    => 'required|email|unique:users,email',
            'name'     => 'required|string|max:255',
            'password' => 'required|string|min:6',
            'role_id'  => 'nullable|exists:roles,id',
        ];
    }
}
