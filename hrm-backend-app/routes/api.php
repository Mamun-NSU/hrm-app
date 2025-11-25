<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;

// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);
// Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
// Route::middleware('auth:sanctum')->get('/user', [AuthController::class, 'me']);

require __DIR__ . '/attendance.php';
require __DIR__ . '/authenticate.php';
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
require __DIR__ . '/user.php';
