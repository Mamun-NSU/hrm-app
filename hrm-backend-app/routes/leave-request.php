<?php

use App\Http\Controllers\LeaveRequest\{
    LeaveRequestListController,
    LeaveRequestStoreController,
    LeaveRequestUpdateController,
    LeaveRequestDestroyController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('leave-request')->group(function () {
    Route::get('list', LeaveRequestListController::class);
    Route::post('store', LeaveRequestStoreController::class);

    Route::middleware(['isAdmin'])->group(function () {    
        Route::prefix('{leaveRequest}')->group(function () {
            Route::put('update', LeaveRequestUpdateController::class);
            Route::delete('delete', LeaveRequestDestroyController::class);
        });
    });
});
