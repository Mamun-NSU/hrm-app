<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'me']);



// // DEFULT Controllers
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\Auth\RegisteredUserController;
// use App\Http\Controllers\Auth\AuthenticatedSessionController;

// Route::post('/register', [RegisteredUserController::class, 'store']);
// Route::post('/login', [AuthenticatedSessionController::class, 'store']);
// Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
//     ->middleware('auth:sanctum');

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

