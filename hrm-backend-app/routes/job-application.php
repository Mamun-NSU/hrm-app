<?php

use App\Http\Controllers\JobApplication\Admin\{
    JobApplicationListController,
    JobApplicationShowController,
    JobApplicationUpdateController,
    JobApplicationDestroyController
};
use App\Http\Controllers\JobApplication\Employee\{
    JobApplicationEmployeeListController,
    JobApplicationEmployeeStoreController
};
use App\Http\Controllers\JobApplication\Public\{
    JobApplicationPublicListController,
    JobApplicationPublicStoreController
};

use Illuminate\Support\Facades\Route;

Route::prefix('job-application')->group(function () {
    Route::get('public/list', JobApplicationPublicListController::class);
    Route::post('public/store', JobApplicationPublicStoreController::class);
});

Route::middleware(['auth:sanctum'])->prefix('job-application')->group(function () {
    Route::get('employee/list', JobApplicationEmployeeListController::class);
    Route::post('employee/store', JobApplicationEmployeeStoreController::class);

    Route::middleware(['isAdmin'])->group(function () {
        Route::get('list', JobApplicationListController::class);
        Route::prefix('{jobApplication}')->group(function () {
            Route::get('show', JobApplicationShowController::class);
            Route::put('update', JobApplicationUpdateController::class);
            Route::delete('delete', JobApplicationDestroyController::class);
        });
    });
});
