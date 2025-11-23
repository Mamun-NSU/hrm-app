<?php

namespace App\Http\Requests\PerformanceEvaluation;

use Illuminate\Foundation\Http\FormRequest;

class PerformanceEvaluationUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'evaluated_by' => 'required|string',
            'evaluation_date' => 'required|date',
            'remarks' => 'nullable|string',
            'score' => 'required|integer|min:1|max:10',   
        ];
    }
}
