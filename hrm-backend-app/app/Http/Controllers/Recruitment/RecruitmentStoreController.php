<?php

namespace App\Http\Controllers\Recruitment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Recruitment\RecruitmentStoreRequest;
use App\Models\Recruitment;

class RecruitmentStoreController extends Controller
{
    public function __invoke(RecruitmentStoreRequest $request)
    {
        $recruitment = Recruitment::create($request->validated());

        return response()->json([
            'data' => [
                'recruitment' => $recruitment,
            ],
            'message' => 'Job Post Store Successfully!',
        ]);
    }
}
