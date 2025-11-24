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
            'employee_id' => 'required|exists:employees,id',
            'evaluated_by' => 'required|string',
            'evaluation_date' => 'required|date',
            'kpi_id' => 'required|exists:performance_kpis,id',
            'remarks' => 'nullable|string',
            'score' => 'required|integer|min:1|max:10',   
        ];
    }
}
