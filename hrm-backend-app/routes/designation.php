<?php

use App\Http\Controllers\Designation\{
    DesignationDestroyController,
    DesignationListController,
    DesignationShowController,
    DesignationStoreController,
    DesignationUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::prefix('designation')->group(function () {
    Route::get('list', DesignationListController::class);
    Route::post('store', DesignationStoreController::class);
    Route::prefix('{designation}')->group(function () {
        Route::get('show', DesignationShowController::class);
        Route::put('update', DesignationUpdateController::class);
        Route::delete('delete', DesignationDestroyController::class);
    });

});
