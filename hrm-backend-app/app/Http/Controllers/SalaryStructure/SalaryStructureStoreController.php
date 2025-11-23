<?php

namespace App\Http\Controllers\SalaryStructure;

use App\Http\Controllers\Controller;
use App\Http\Requests\SalaryStructure\SalaryStructureStoreRequest;
use App\Models\SalaryStructure;
use Illuminate\Http\JsonResponse;

class SalaryStructureStoreController extends Controller
{
    public function __invoke(SalaryStructureStoreRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $validated['allowance_amount'] =
            ($validated['house_rent'] ?? 0) +
            ($validated['medical_allowance'] ?? 0) +
            ($validated['transport_allowance'] ?? 0) +
            ($validated['other_allowance'] ?? 0);

        $validated['deduction_amount'] =
            ($validated['taxes_deduction'] ?? 0) +
            ($validated['security_deduction'] ?? 0);

        $salaryStructure = SalaryStructure::create($validated);

        $salaryStructure->load('employee.user');

        return response()->json([
            'data' => [
                'salary_structure' => $salaryStructure,
            ],
            'message' => 'Salary Structure Stored Successfully.',
        ], 201);
    }
}
