<?php

namespace App\Http\Controllers\PerformanceEvaluation;

use App\Http\Controllers\Controller;
use App\Models\PerformanceEvaluation;
use Illuminate\Http\JsonResponse;

class PerformanceEvaluationDestroyController extends Controller
{
    public function __invoke(PerformanceEvaluation $performanceEvaluation): JsonResponse
    {
        $performanceEvaluation->delete();

        return response()->json([
            'message' => 'Performance Evaluation Deleted Successfully',
        ]);
    }
}
