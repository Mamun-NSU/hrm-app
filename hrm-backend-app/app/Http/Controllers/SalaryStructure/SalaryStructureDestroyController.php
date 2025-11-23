<?php

namespace App\Http\Controllers\SalaryStructure;

use App\Http\Controllers\Controller;
use App\Models\SalaryStructure;
use Illuminate\Http\JsonResponse;

class SalaryStructureDestroyController extends Controller
{
    public function __invoke(SalaryStructure $salaryStructure): JsonResponse
    {
        $salaryStructure->delete();

        return response()->json([
            'message' => 'Salary Structure Deleted Successfully.'
        ]);
    }
}
