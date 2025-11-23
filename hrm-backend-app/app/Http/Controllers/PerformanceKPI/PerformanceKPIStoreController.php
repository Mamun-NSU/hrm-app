<?php

namespace App\Http\Controllers\PerformanceKPI;

use App\Http\Controllers\Controller;
use App\Http\Requests\PerformanceKPI\PerformanceKPIStoreRequest;
use App\Models\PerformanceKPI;
use Illuminate\Http\JsonResponse;

class PerformanceKPIStoreController extends Controller
{
    public function __invoke(PerformanceKPIStoreRequest $request): JsonResponse
    {
        $kpi = PerformanceKPI::create($request->validated());

        return response()->json([
            'data' => ['kpi' => $kpi],
            'message' => 'KPI Store Successfully',
        ], 201);
    }
}
