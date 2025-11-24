<?php

use App\Http\Controllers\Payroll\{
    PayrollListController,
    PayrollShowController,
    PayrollStoreController,
    PayrollUpdateController,
    PayrollDestroyController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('payroll')->group(function () {
    Route::get('list', PayrollListController::class);
    Route::prefix('{payroll}')->group(function () {
        Route::get('show', PayrollShowController::class);
    });
    Route::middleware(['isAdmin'])->group(function () {
        Route::post('store', PayrollStoreController::class);
        Route::prefix('{payroll}')->group(function () {
            Route::put('update', PayrollUpdateController::class);
            Route::delete('delete', PayrollDestroyController::class);
        });
    });
});
