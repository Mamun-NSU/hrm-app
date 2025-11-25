<?php

use App\Http\Controllers\Recruitment\{
    RecruitmentDestroyController,
    RecruitmentListPublicController,
    RecruitmentListController,
    RecruitmentStoreController,
    RecruitmentShowController,
    RecruitmentUpdateController,
};
use Illuminate\Support\Facades\Route;

Route::get('/recruitment/public/list', RecruitmentListPublicController::class);

Route::middleware(['auth:sanctum'])->prefix('recruitment')->group(function () {

    Route::get('list', RecruitmentListController::class);
    Route::prefix('{recruitment}')->group(function () {
        Route::get('show', RecruitmentShowController::class);
    });
    Route::middleware(['isAdmin'])->group(function () {
        Route::post('store', RecruitmentStoreController::class);
        Route::prefix('{recruitment}')->group(function () {
            Route::put('update', RecruitmentUpdateController::class);
            Route::delete('delete', RecruitmentDestroyController::class);
        });
    });
});
