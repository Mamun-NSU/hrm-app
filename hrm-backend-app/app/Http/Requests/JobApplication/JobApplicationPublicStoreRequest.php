<?php

namespace App\Http\Requests\JobApplication;

use Illuminate\Foundation\Http\FormRequest;

class JobApplicationPublicStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'applicant_email' => 'required|email|max:255',
            'applicant_name' => 'required|string|max:255',
            'applicant_phone' => 'required|string|max:20',
            'recruitment_id' => 'required|exists:recruitments,id',
            'resume_link' => 'required|string|max:255',
        ];
    }
}
