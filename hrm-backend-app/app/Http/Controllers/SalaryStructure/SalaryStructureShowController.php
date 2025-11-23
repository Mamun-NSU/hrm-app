<?php

namespace App\Http\Controllers\SalaryStructure;

use App\Http\Controllers\Controller;
use App\Models\SalaryStructure;
use Illuminate\Http\JsonResponse;

class SalaryStructureShowController extends Controller
{
    public function __invoke(SalaryStructure $salaryStructure): JsonResponse
    {
        $salaryStructure->load('employee.user');

        return response()->json([
            'data' => [
                'salary_structure' => $salaryStructure
            ],
            'message' => 'Salary Structure Found Successfully.',
        ]);
    }
}
