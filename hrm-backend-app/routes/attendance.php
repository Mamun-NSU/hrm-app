<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Attendance\{
    AttendanceListController,
    AttendanceShowController,
    AttendanceUpdateController,
    AttendanceDestroyController,
    AttendanceStoreController,
};

Route::middleware(['auth:sanctum'])->group(function () {
    Route::prefix('attendance')->group(function () {
        Route::get('list', AttendanceListController::class);
        Route::post('store', AttendanceStoreController::class);
        Route::prefix('{attendance}')->group(function () {
            Route::get('show', AttendanceShowController::class);
            Route::put('update', AttendanceUpdateController::class);
            Route::delete('delete', AttendanceDestroyController::class);
        });
    });
});
