<?php

namespace App\Http\Controllers\Recruitment;

use App\Http\Controllers\Controller;
use App\Models\Recruitment;

class RecruitmentShowController extends Controller
{
    public function __invoke(Recruitment $recruitment)
    {
        $recruitment->load([
            'department',
            'jobApplications' => fn ($q) => $q->orderBy('applied_at', 'desc'),
        ]);

        $recruitment->applications_count = $recruitment->jobApplications->count();

        return response()->json([
            'data' => [
                'recruitment' => $recruitment
            ],
            'message' => 'Job Post Found Successfully!',
        ]);
    }
}
