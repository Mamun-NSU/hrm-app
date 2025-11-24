<?php

use App\Http\Controllers\Role\{
    RoleListController,
    RoleStoreController,
    RoleShowController,
    RoleUpdateController,
    RoleDestroyController,
};
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::prefix('role')->group(function () {
        Route::get('list', RoleListController::class);
        Route::post('store', RoleStoreController::class);
        Route::prefix('{role}')->group(function () {
            Route::get('show', RoleShowController::class);
            Route::put('update', RoleUpdateController::class);
            Route::delete('delete', RoleDestroyController::class);
        });
    });
});
