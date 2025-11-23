<?php

namespace App\Http\Controllers\PerformanceEvaluation;

use App\Http\Controllers\Controller;
use App\Models\PerformanceEvaluation;
use Illuminate\Http\JsonResponse;

class PerformanceEvaluationShowController extends Controller
{
    public function __invoke(PerformanceEvaluation $performanceEvaluation): JsonResponse
    {
        return response()->json([
            'data' => ['evaluation' => $performanceEvaluation->load('employee.user', 'kpi')],
            'message' => 'Performance Evaluation Find Successfully',
        ]);
    }
}
