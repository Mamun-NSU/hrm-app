<?php

namespace App\Http\Controllers\JobApplication\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobApplication\JobApplicationPublicStoreRequest;
use App\Models\JobApplication;
use Illuminate\Http\JsonResponse;

class JobApplicationPublicStoreController extends Controller
{
    public function __invoke(JobApplicationPublicStoreRequest $request): JsonResponse
    {
        $application = JobApplication::create([
            ...$request->validated(),
            'applied_at' => now(),
            'status' => 'pending',
        ]);

        return response()->json([
            'data' => [
                'application' => $application,
            ],
            'message' => 'Public Application Submitted Successfully.',
        ]);
    }
}
