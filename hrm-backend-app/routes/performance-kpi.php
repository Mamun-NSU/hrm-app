<?php

use App\Http\Controllers\PerformanceKPI\{
    PerformanceKPIDestroyController,
    PerformanceKPIListController,
    PerformanceKPIShowController,
    PerformanceKPIStoreController,
    PerformanceKPIUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::prefix('performance-kpi')->group(function () {
        Route::get('list', PerformanceKPIListController::class);
        Route::post('store', PerformanceKPIStoreController::class);
        Route::prefix('{performanceKPI}')->group(function () {
            Route::get('show', PerformanceKPIShowController::class);
            Route::put('update', PerformanceKPIUpdateController::class);
            Route::delete('delete', PerformanceKPIDestroyController::class);
        });
    });
});
