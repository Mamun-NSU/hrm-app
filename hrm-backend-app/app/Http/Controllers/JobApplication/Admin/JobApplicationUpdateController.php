<?php

namespace App\Http\Controllers\JobApplication\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobApplication\JobApplicationUpdateRequest;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;

class JobApplicationUpdateController extends Controller
{
    public function __invoke(JobApplicationUpdateRequest $request, JobApplication $jobApplication): JsonResponse
    {
        $jobApplication->update($request->validated());

        return response()->json([
            'data' => [
                'application' => $jobApplication,
            ],
            'message' => 'Application Updated Successfully.',
        ]);
    }
}
