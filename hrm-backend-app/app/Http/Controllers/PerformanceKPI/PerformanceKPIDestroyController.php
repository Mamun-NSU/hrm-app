<?php

namespace App\Http\Controllers\PerformanceKPI;

use App\Http\Controllers\Controller;
use App\Models\PerformanceKPI;
use Illuminate\Http\JsonResponse;

class PerformanceKPIDestroyController extends Controller
{
    public function __invoke(PerformanceKPI $performanceKPI): JsonResponse
    {
        $performanceKPI->delete();

        return response()->json([
            'message' => 'KPI Deleted Successfully',
        ]);
    }
}
