<?php

use App\Http\Controllers\Department\{
    DepartmentDestroyController,
    DepartmentListController,
    DepartmentShowController,
    DepartmentStoreController,
    DepartmentUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::prefix('department')->group(function () {
    Route::get('list', DepartmentListController::class);
    Route::post('store', DepartmentStoreController::class);
    Route::prefix('{department}')->group(function () {
        Route::get('show', DepartmentShowController::class);
        Route::put('update', DepartmentUpdateController::class);
        Route::delete('delete', DepartmentDestroyController::class);
    });

});
