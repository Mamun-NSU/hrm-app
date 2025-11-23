<?php

namespace App\Http\Requests\PerformanceKPI;

use Illuminate\Foundation\Http\FormRequest;

class PerformanceKPIUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'description' => 'nullable|string',
            'name' => 'required|string|max:255',
        ];
    }
}
