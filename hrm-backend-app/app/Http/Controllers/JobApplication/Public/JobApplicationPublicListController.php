<?php

namespace App\Http\Controllers\JobApplication\Public;

use App\Http\Controllers\Controller;
use App\Models\Recruitment;
use Illuminate\Http\JsonResponse;

class JobApplicationPublicListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $jobs = Recruitment::with('department')
            ->where('status', 'open')
            ->latest()
            ->get();

        return response()->json([
            'data' => [
                'jobs' => $jobs,
            ],
            'message' => 'Public Job List Found Successfully.',
        ]);
    }
}
