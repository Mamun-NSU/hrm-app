<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\Department\DepartmentController;
use App\Http\Controllers\Designation\DesignationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\LeaveRequestController;
use App\Http\Controllers\LeaveTypeController;
use App\Http\Controllers\PayrollController;
use App\Http\Controllers\PerformanceEvaluationController;
use App\Http\Controllers\PerformanceKPIController;
use App\Http\Controllers\SalaryStructureController;
use App\Http\Controllers\TrainingController;
use App\Http\Controllers\EmployeeTrainingController;
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

Route::prefix('departments')->group(function () {
    Route::get('/', [DepartmentController::class, 'index']);
    Route::get('/{id}', [DepartmentController::class, 'show']);
    Route::post('/', [DepartmentController::class, 'store']);
    Route::put('/{id}', [DepartmentController::class, 'update']);
    Route::delete('/{id}', [DepartmentController::class, 'destroy']);
});

Route::prefix('designations')->group(function () {
    Route::get('/', [DesignationController::class, 'index']);
    Route::get('/{id}', [DesignationController::class, 'show']);
    Route::post('/', [DesignationController::class, 'store']);
    Route::put('/{id}', [DesignationController::class, 'update']);
    Route::delete('/{id}', [DesignationController::class, 'destroy']);
});

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    // Route::apiResource('departments', DepartmentController::class);
    // Route::apiResource('designations', DesignationController::class);
    Route::apiResource('roles', RoleController::class);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/attendance', [AttendanceController::class, 'index']);
    Route::post('/attendance', [AttendanceController::class, 'markAttendance']); 
    Route::get('/attendance/{id}', [AttendanceController::class, 'show']);
    Route::put('/attendance/{id}', [AttendanceController::class, 'update']);
    Route::delete('/attendance/{id}', [AttendanceController::class, 'destroy']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/leaves', [LeaveRequestController::class, 'index']);
    Route::post('/leaves', [LeaveRequestController::class, 'store']);
    Route::middleware('isAdmin')->group(function () {
        Route::put('/leaves/{id}', [LeaveRequestController::class, 'update']);
        Route::delete('/leaves/{id}', [LeaveRequestController::class, 'destroy']);
    });
});

Route::get('/leave-types', [LeaveTypeController::class, 'index'])->middleware('auth:sanctum');

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::post('/leave-types', [LeaveTypeController::class, 'store']);
    Route::get('/leave-types/{id}', [LeaveTypeController::class, 'show']);
    Route::put('/leave-types/{id}', [LeaveTypeController::class, 'update']);
    Route::delete('/leave-types/{id}', [LeaveTypeController::class, 'destroy']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('salary-structures', SalaryStructureController::class);
    Route::apiResource('payrolls', PayrollController::class);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('performance-kpis', PerformanceKPIController::class);
    Route::apiResource('performance-evaluations', PerformanceEvaluationController::class);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('trainings', TrainingController::class);
    Route::apiResource('employee-trainings', EmployeeTrainingController::class);
});

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

Route::get('/recruitments', [RecruitmentController::class, 'indexPublic']);

Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    Route::get('/admin/recruitments', [RecruitmentController::class, 'index']);
    Route::post('/admin/recruitments', [RecruitmentController::class, 'store']);
    Route::get('/admin/recruitments/{id}', [RecruitmentController::class, 'show']);
    Route::put('/admin/recruitments/{id}', [RecruitmentController::class, 'update']);
    Route::delete('/admin/recruitments/{id}', [RecruitmentController::class, 'destroy']);
});

require __DIR__ . '/employee.php';
