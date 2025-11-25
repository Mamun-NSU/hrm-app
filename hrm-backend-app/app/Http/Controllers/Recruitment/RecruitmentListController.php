<?php

namespace App\Http\Controllers\Recruitment;

use App\Http\Controllers\Controller;
use App\Models\Recruitment;

class RecruitmentListController extends Controller
{
    public function __invoke()
    {
        $recruitments = Recruitment::with('department')
            ->latest()
            ->get();

        return response()->json([
            'data' => [
                'recruitments' => $recruitments
            ],
            'message' => 'Job Post List Found Successfully!',
        ]);
    }
}
