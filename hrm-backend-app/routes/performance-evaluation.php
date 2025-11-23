<?php

use App\Http\Controllers\PerformanceEvaluation\{
    PerformanceEvaluationDestroyController,
    PerformanceEvaluationListController,
    PerformanceEvaluationShowController,
    PerformanceEvaluationStoreController,
    PerformanceEvaluationUpdateController
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('performance-evaluation')->group(function () {
    Route::get('list', PerformanceEvaluationListController::class);
    Route::prefix('{performanceEvaluation}')->group(function () {
        Route::get('show', PerformanceEvaluationShowController::class);
    });
    Route::middleware(['isAdmin'])->group(function () {
        Route::post('store', PerformanceEvaluationStoreController::class);
        Route::prefix('{performanceEvaluation}')->group(function () {
            Route::put('update', PerformanceEvaluationUpdateController::class);
            Route::delete('delete', PerformanceEvaluationDestroyController::class);
        });
    });
});
