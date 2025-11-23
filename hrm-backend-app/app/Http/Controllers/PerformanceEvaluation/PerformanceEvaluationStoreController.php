<?php

namespace App\Http\Controllers\PerformanceEvaluation;

use App\Http\Controllers\Controller;
use App\Http\Requests\PerformanceEvaluation\PerformanceEvaluationStoreRequest;
use App\Models\PerformanceEvaluation;
use Illuminate\Http\JsonResponse;

class PerformanceEvaluationStoreController extends Controller
{
    public function __invoke(PerformanceEvaluationStoreRequest $request): JsonResponse
    {
        $evaluation = PerformanceEvaluation::create($request->validated());

        return response()->json([
            'data' => ['evaluation' => $evaluation],
            'message' => 'Performance Evaluation Store Successfully',
        ], 201);
    }
}
