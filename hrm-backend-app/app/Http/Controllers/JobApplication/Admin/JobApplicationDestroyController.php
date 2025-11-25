<?php

namespace App\Http\Controllers\JobApplication\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;

class JobApplicationDestroyController extends Controller
{
    public function __invoke(JobApplication $jobApplication): JsonResponse
    {
        $jobApplication->delete();

        return response()->json([
            'message' => 'Job Application Deleted Successfully.',
        ]);
    }
}
