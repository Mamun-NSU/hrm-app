<?php

namespace App\Http\Controllers\PerformanceKPI;

use App\Http\Controllers\Controller;
use App\Models\PerformanceKPI;
use Illuminate\Http\JsonResponse;

class PerformanceKPIListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $kpis = PerformanceKPI::all();

        return response()->json([
            'data' => ['kpis' => $kpis],
            'message' => 'KPI List Found Successfully',
        ]);
    }
}
