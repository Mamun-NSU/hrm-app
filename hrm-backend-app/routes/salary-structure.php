<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SalaryStructure\{
    SalaryStructureListController,
    SalaryStructureStoreController,
    SalaryStructureShowController,
    SalaryStructureUpdateController,
    SalaryStructureDestroyController,
};

Route::middleware(['auth:sanctum', 'isAdmin'])->prefix('salary-structure')->group(function () { 
    Route::get('list', SalaryStructureListController::class);
    Route::post('store', SalaryStructureStoreController::class);
    Route::prefix('{salaryStructure}')->group(function () {
        Route::get('show', SalaryStructureShowController::class);
        Route::put('update', SalaryStructureUpdateController::class);
        Route::delete('delete', SalaryStructureDestroyController::class);
    });

});
