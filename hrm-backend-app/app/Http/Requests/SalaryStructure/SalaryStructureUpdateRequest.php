<?php

namespace App\Http\Requests\SalaryStructure;

use Illuminate\Foundation\Http\FormRequest;

class SalaryStructureUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'basic_salary'       => 'required|numeric|min:0',
            'house_rent'         => 'nullable|numeric|min:0',
            'medical_allowance'  => 'nullable|numeric|min:0',
            'other_allowance'    => 'nullable|numeric|min:0',
            'taxes_deduction'    => 'nullable|numeric|min:0',
            'transport_allowance'=> 'nullable|numeric|min:0',         
            'security_deduction' => 'nullable|numeric|min:0',
        ];
    }
}
