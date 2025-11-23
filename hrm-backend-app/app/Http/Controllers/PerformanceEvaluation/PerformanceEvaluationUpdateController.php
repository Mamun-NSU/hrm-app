<?php

namespace App\Http\Controllers\PerformanceEvaluation;

use App\Http\Controllers\Controller;
use App\Http\Requests\PerformanceEvaluation\PerformanceEvaluationUpdateRequest;
use App\Models\PerformanceEvaluation;
use Illuminate\Http\JsonResponse;

class PerformanceEvaluationUpdateController extends Controller
{
    public function __invoke(PerformanceEvaluationUpdateRequest $request, PerformanceEvaluation $performanceEvaluation): JsonResponse
    {
        $performanceEvaluation->update($request->validated());

        return response()->json([
            'data' => ['evaluation' => $performanceEvaluation],
            'message' => 'Performance Evaluation Updated Successfully',
        ]);
    }
}
