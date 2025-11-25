<?php

namespace App\Http\Controllers\Recruitment;

use App\Http\Controllers\Controller;
use App\Models\Recruitment;
use Illuminate\Http\JsonResponse;

class RecruitmentListPublicController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $recruitments = Recruitment::where('status', 'open')
            ->with('department')
            ->latest()
            ->get();

        return response()->json([
            'data' => [
                'recruitments' => $recruitments,
            ],
            'message' => 'Public Job Post List Found Successfully!',
        ]);
    }
}
