<?php

use App\Http\Controllers\User\{
    UserDestroyController,
    UserListController,
    UserStoreController,
    UserShowController,
    UserUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::prefix('user')->group(function () {
    Route::get('list', UserListController::class);
    Route::post('store', UserStoreController::class);
    Route::prefix('{user}')->group(function () {
        Route::get('show', UserShowController::class);
        Route::put('update', UserUpdateController::class);
        Route::delete('delete', UserDestroyController::class);
    });
});
