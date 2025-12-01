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

        if ($user->role?->name === 'Admin') {
            $evaluations = PerformanceEvaluation::with('employee.user', 'kpi')->get();
        } else {
            $employeeId = $user->employee?->id;

            $evaluations = PerformanceEvaluation::with('employee.user', 'kpi')
                ->when($employeeId, function ($query, $employeeId) {
                    return $query->where('employee_id', $employeeId);
                })
                ->get();
        }

        return response()->json([
            'data' => ['evaluations' => $evaluations],
            'message' => 'Performance Evaluations List Found Successfully.',
        ]);
    }
}
