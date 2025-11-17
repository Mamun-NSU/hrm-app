<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\DepartmentController;
use App\Http\Controllers\API\DesignationController;
use App\Http\Controllers\API\EmployeeController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\LeaveRequestController;
use App\Http\Controllers\LeaveTypeController;
use App\Http\Controllers\PayrollController;
use App\Http\Controllers\PerformanceEvaluationController;
use App\Http\Controllers\PerformanceKPIController;
use App\Http\Controllers\SalaryStructureController;



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


Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::apiResource('departments', DepartmentController::class);
    Route::apiResource('designations', DesignationController::class);
    Route::apiResource('roles', RoleController::class);
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/attendance', [AttendanceController::class, 'index']);
    Route::post('/attendance', [AttendanceController::class, 'markAttendance']); // login/logout
    Route::get('/attendance/{id}', [AttendanceController::class, 'show']);
    Route::put('/attendance/{id}', [AttendanceController::class, 'update']);
    Route::delete('/attendance/{id}', [AttendanceController::class, 'destroy']);
});


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/leaves', [LeaveRequestController::class, 'index']);   // view my leaves
    Route::post('/leaves', [LeaveRequestController::class, 'store']);  // request leave

    Route::middleware('isAdmin')->group(function () {
        Route::put('/leaves/{id}', [LeaveRequestController::class, 'update']);  // approve/reject
        Route::delete('/leaves/{id}', [LeaveRequestController::class, 'destroy']); // delete leave
    });
});


Route::get('/leave-types', [LeaveTypeController::class, 'index'])->middleware('auth:sanctum');



Route::middleware(['auth:sanctum'])->group(function () {

    // Salary Structure Routes
    Route::apiResource('salary-structures', SalaryStructureController::class);

    // Payroll Routes
    Route::apiResource('payrolls', PayrollController::class);
});


Route::middleware(['auth:sanctum'])->group(function () {

    Route::apiResource('performance-kpis', PerformanceKPIController::class);
    Route::apiResource('performance-evaluations', PerformanceEvaluationController::class);

});






