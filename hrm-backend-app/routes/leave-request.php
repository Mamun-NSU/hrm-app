<?php

use App\Http\Controllers\LeaveRequest\{
    LeaveRequestDestroyController,
    LeaveRequestListController,
    LeaveRequestStoreController,
    LeaveRequestShowController,
    LeaveRequestUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('leave-request')->group(function () {
    Route::get('list', LeaveRequestListController::class);
    Route::post('store', LeaveRequestStoreController::class);
     Route::prefix('{leaveRequest}')->group(function () {
        Route::get('show', LeaveRequestShowController::class);
    });

    Route::middleware(['isAdmin'])->group(function () {    
        Route::prefix('{leaveRequest}')->group(function () {
            Route::put('update', LeaveRequestUpdateController::class);
            Route::delete('delete', LeaveRequestDestroyController::class);
        });
    });
});
