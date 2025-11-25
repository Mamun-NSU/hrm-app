<?php

namespace App\Http\Requests\JobApplication;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class JobApplicationEmployeeStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Auth::check();
    }

    public function rules(): array
    {
        return [
            'recruitment_id' => 'required|exists:recruitments,id',
            'resume_link' => 'required|string|max:255',
        ];
    }
}
