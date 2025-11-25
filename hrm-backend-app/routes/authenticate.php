<?php

use App\Http\Controllers\Authenticate\{
    AuthenticateLoginController,
    AuthenticateLogoutController,
    AuthenticateRegisterController,
    AuthenticateUserAboutController,
};
use Illuminate\Support\Facades\Route;

Route::post('/login', AuthenticateLoginController::class);
Route::post('/register', AuthenticateRegisterController::class);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/about/user', AuthenticateUserAboutController::class);
    Route::post('/logout', AuthenticateLogoutController::class);
});
