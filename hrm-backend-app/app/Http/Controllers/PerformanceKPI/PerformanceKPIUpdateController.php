<?php

namespace App\Http\Controllers\PerformanceKPI;

use App\Http\Controllers\Controller;
use App\Http\Requests\PerformanceKPI\PerformanceKPIUpdateRequest;
use App\Models\PerformanceKPI;
use Illuminate\Http\JsonResponse;

class PerformanceKPIUpdateController extends Controller
{
    public function __invoke(PerformanceKPIUpdateRequest $request, PerformanceKPI $performanceKPI): JsonResponse
    {
        $performanceKPI->update($request->validated());

        return response()->json([
            'data' => ['kpi' => $performanceKPI],
            'message' => 'KPI Updated Successfully',
        ]);
    }
}
