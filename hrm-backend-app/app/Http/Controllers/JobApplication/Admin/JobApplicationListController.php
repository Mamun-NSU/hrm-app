<?php

namespace App\Http\Controllers\JobApplication\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;

class JobApplicationListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $applications = JobApplication::with(['employee.user', 'recruitment.department',])
            ->latest()
            ->get();

        return response()->json([
            'data' => [
                'applications' => $applications,
            ],
            'message' => 'Application List Found Successfully.',
        ]);
    }
}
