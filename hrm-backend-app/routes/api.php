<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LeaveRequestController;
use App\Http\Controllers\LeaveTypeController;
use App\Http\Controllers\RecruitmentController;
use App\Http\Controllers\JobApplicationController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'me']);

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::post('/job-applications/public', [JobApplicationController::class, 'storePublic']);
Route::get('/job-recruitments', [JobApplicationController::class, 'getOpenJobs']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/job-applications/employee', [JobApplicationController::class, 'employeeIndex']);
    Route::post('/job-applications/employee', [JobApplicationController::class, 'storeEmployee']);
});

Route::middleware('auth:sanctum')->get('/job-applications/employee', [JobApplicationController::class, 'employeeIndex']);

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::get('/job-applications', [JobApplicationController::class, 'index']);
    Route::get('/job-applications/{id}', [JobApplicationController::class, 'show']);
    Route::put('/job-applications/{id}', [JobApplicationController::class, 'update']);
    Route::delete('/job-applications/{id}', [JobApplicationController::class, 'destroy']);
});

require __DIR__ . '/attendance.php';
require __DIR__ . '/department.php';
require __DIR__ . '/designation.php';
require __DIR__ . '/employee.php';
require __DIR__ . '/employee-training.php';
require __DIR__ . '/job-application.php';
require __DIR__ . '/leave-request.php';
require __DIR__ . '/leave-type.php';
require __DIR__ . '/payroll.php';
require __DIR__ . '/performance-evaluation.php';
require __DIR__ . '/performance-kpi.php';
require __DIR__ . '/recruitment.php';
require __DIR__ . '/role.php';
require __DIR__ . '/salary-structure.php';
require __DIR__ . '/training.php';
