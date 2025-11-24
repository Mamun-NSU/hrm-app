<?php

use App\Http\Controllers\Training\{
    TrainingListController,
    TrainingShowController,
    TrainingStoreController,
    TrainingUpdateController,
    TrainingDestroyController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'isAdmin'])->prefix('training')->group(function () { 
    Route::get('list', TrainingListController::class);
    Route::post('store', TrainingStoreController::class);
    Route::prefix('{training}')->group(function () {
        Route::get('show', TrainingShowController::class);
        Route::put('update', TrainingUpdateController::class);
        Route::delete('delete', TrainingDestroyController::class);
    });
});
