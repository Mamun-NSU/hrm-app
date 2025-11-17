<?php

namespace App\Http\Controllers;

use App\Models\PerformanceEvaluation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PerformanceEvaluationController extends Controller
{

    public function index() {
        $user = Auth::user();

        if ($user->role_id === 1) {
            // Admin: get all evaluations
            $evaluations = PerformanceEvaluation::with('employee.user', 'kpi')->get();
        } else {
            // Non-admin: get only evaluations of the logged-in employee
            $evaluations = PerformanceEvaluation::with('employee.user', 'kpi')
                ->where('employee_id', $user->employee->id)
                ->get();
        }

        return response()->json($evaluations);
    }


    public function store(Request $request) {
        $validated = $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'kpi_id' => 'required|exists:performance_kpis,id',
            'score' => 'required|integer|min:1|max:10',
            'remarks' => 'nullable|string',
            'evaluation_date' => 'required|date',
            'evaluated_by' => 'required|string',
        ]);

        $evaluation = PerformanceEvaluation::create($validated);
        return response()->json($evaluation, 201);
    }

    public function show(PerformanceEvaluation $performanceEvaluation) {
        return $performanceEvaluation->load('employee.user', 'kpi');
    }

    public function update(Request $request, PerformanceEvaluation $performanceEvaluation) {
        $validated = $request->validate([
            'score' => 'required|integer|min:1|max:10',
            'remarks' => 'nullable|string',
            'evaluation_date' => 'required|date',
            'evaluated_by' => 'required|string',
        ]);

        $performanceEvaluation->update($validated);
        return response()->json($performanceEvaluation);
    }

    public function destroy(PerformanceEvaluation $performanceEvaluation) {
        $performanceEvaluation->delete();
        return response()->json(['message' => 'Performance evaluation deleted successfully']);
    }

}
