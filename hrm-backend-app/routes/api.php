<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\DesignationController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\UserController;



Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'me']);



Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);


Route::apiResource('employees', EmployeeController::class);


Route::apiResource('departments', DepartmentController::class);


Route::apiResource('designations', DesignationController::class);




Route::middleware('auth:sanctum')->group(function () {
    Route::get('/attendance', [AttendanceController::class, 'index']);
    Route::post('/attendance/mark', [AttendanceController::class, 'markAttendance']);
    Route::get('/attendance/{id}', [AttendanceController::class, 'show']);
    Route::post('/attendance', [AttendanceController::class, 'markAttendance']); // login/logout
    Route::put('/attendance/{id}', [AttendanceController::class, 'update']);
    Route::delete('/attendance/{id}', [AttendanceController::class, 'destroy']);
});















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

