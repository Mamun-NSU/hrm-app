<?php

use App\Http\Controllers\EmployeeTraining\{
    EmployeeTrainingListController,
    EmployeeTrainingShowController,
    EmployeeTrainingStoreController,
    EmployeeTrainingUpdateController,
    EmployeeTrainingDestroyController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->prefix('employee-training')->group(function () {
    Route::get('list', EmployeeTrainingListController::class);
    Route::prefix('{employeeTraining}')->group(function () {
        Route::get('show', EmployeeTrainingShowController::class);
    });
    Route::middleware(['isAdmin'])->group(function () {
        Route::post('store', EmployeeTrainingStoreController::class);
        Route::prefix('{employeeTraining}')->group(function () {
            Route::put('update', EmployeeTrainingUpdateController::class);
            Route::delete('delete', EmployeeTrainingDestroyController::class);
        });
    });
});
