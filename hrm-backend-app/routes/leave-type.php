<?php

use App\Http\Controllers\LeaveType\{
    LeaveTypeListController,
    LeaveTypeShowController,
    LeaveTypeStoreController,
    LeaveTypeUpdateController,
    LeaveTypeDestroyController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('leave-type')->group(function () {
    Route::get('list', LeaveTypeListController::class);
    Route::prefix('{leaveType}')->group(function () {
        Route::get('show', LeaveTypeShowController::class);
    });
    Route::middleware(['isAdmin'])->group(function () {
        Route::post('store', LeaveTypeStoreController::class);
        Route::prefix('{leaveType}')->group(function () {
            Route::put('update', LeaveTypeUpdateController::class);
            Route::delete('delete', LeaveTypeDestroyController::class);
        });
    });
});
