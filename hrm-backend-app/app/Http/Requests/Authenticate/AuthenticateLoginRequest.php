<?php

namespace App\Http\Requests\Authenticate;

use Illuminate\Foundation\Http\FormRequest;

class AuthenticateLoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|string',
        ];
    }
}
