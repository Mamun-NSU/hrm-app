<?php

namespace App\Http\Controllers\PerformanceEvaluation;

use App\Http\Controllers\Controller;
use App\Models\PerformanceEvaluation;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class PerformanceEvaluationListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $user = Auth::user();

        $evaluations = $user->role_id === 1
            ? PerformanceEvaluation::with('employee.user', 'kpi')->get()
            : PerformanceEvaluation::with('employee.user', 'kpi')
                ->where('employee_id', $user->employee->id)
                ->get();

        return response()->json([
            'data' => ['evaluations' => $evaluations],
            'message' => 'Performance Evaluations List Find successfully',
        ]);
    }
}
