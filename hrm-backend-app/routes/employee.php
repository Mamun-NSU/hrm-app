<?php

use App\Http\Controllers\Employee\{
    EmployeeDestroyController, 
    EmployeeListController,
    EmployeeSalaryController,
    EmployeeShowByEmailController,
    EmployeeShowController, 
    EmployeeStoreController, 
    EmployeeUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::prefix('employee')->group(function () {
    Route::get('list', EmployeeListController::class);
    Route::get('with-salary', EmployeeSalaryController::class);
    Route::post('store', EmployeeStoreController::class);
    Route::prefix('{employee}')->group(function () {
        Route::get('show', EmployeeShowController::class);
        Route::get('email', EmployeeShowByEmailController::class);
        Route::put('update', EmployeeUpdateController::class);
        Route::delete('delete', EmployeeDestroyController::class);
    });
});
