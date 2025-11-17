<?php

namespace App\Http\Controllers;

use App\Models\PerformanceKPI;
use Illuminate\Http\Request;

class PerformanceKPIController extends Controller
{
    
public function index() {
    return PerformanceKPI::all();
}

public function store(Request $request) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
    ]);
    $kpi = PerformanceKPI::create($validated);
    return response()->json($kpi, 201);
}

// public function show(PerformanceKPI $performanceKPI) {
//     return $performanceKPI;
// }

public function show($id) {
    $kpi = PerformanceKPI::find($id);

    if (!$kpi) {
        return response()->json(['message' => 'KPI not found'], 404);
    }

    return response()->json($kpi);
}


public function update(Request $request, PerformanceKPI $performanceKPI) {
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
    ]);
    $performanceKPI->update($validated);
    return response()->json($performanceKPI);
}

public function destroy(PerformanceKPI $performanceKPI) {
    $performanceKPI->delete();
    return response()->json(['message' => 'KPI deleted successfully']);
}

}
