<?php

namespace App\Http\Controllers\PerformanceKPI;

use App\Http\Controllers\Controller;
use App\Models\PerformanceKPI;
use Illuminate\Http\JsonResponse;

class PerformanceKPIShowController extends Controller
{
    public function __invoke(PerformanceKPI $performanceKPI): JsonResponse
    {
        return response()->json([
            'data' => ['kpi' => $performanceKPI],
            'message' => 'KPI Found successfully',
        ]);
    }
}
