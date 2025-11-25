<?php

namespace App\Http\Controllers\JobApplication\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;

class JobApplicationShowController extends Controller
{
    public function __invoke(JobApplication $jobApplication): JsonResponse
    {
        $jobApplication->load([ 'employee.user', 'recruitment.department',]);

        return response()->json([
            'data' => [
                'application' => $jobApplication,
            ],
            'message' => 'Application Found Successfully.',
        ]);
    }
}
