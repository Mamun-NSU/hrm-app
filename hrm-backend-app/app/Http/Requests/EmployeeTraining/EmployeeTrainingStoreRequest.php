<?php

namespace App\Http\Requests\EmployeeTraining;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeTrainingStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'employee_id' => 'required|exists:employees,id',
            'status' => 'required|string|in:pending,completed,in_progress,cancelled',
            'training_id' => 'required|exists:trainings,id',
        ];
    }
}
