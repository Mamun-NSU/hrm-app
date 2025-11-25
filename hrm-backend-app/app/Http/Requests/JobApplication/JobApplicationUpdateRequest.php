<?php

namespace App\Http\Requests\JobApplication;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class JobApplicationUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::user()?->role?->name === 'Admin';
    }

    public function rules(): array
    {
        return [
            'status' => 'required|in:pending,reviewed,hired,rejected,shortlisted',
        ];
    }
}
