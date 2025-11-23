<?php

namespace App\Http\Controllers\SalaryStructure;

use App\Http\Controllers\Controller;
use App\Models\SalaryStructure;
use Illuminate\Http\JsonResponse;

class SalaryStructureListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $structures = SalaryStructure::with('employee.user')->get();

        return response()->json([
            'data' => [
                'salary_structures' => $structures
            ],
            'message' => 'Salary Structure List Found Successfully.',
        ]);
    }
}
