<?php

namespace App\Http\Controllers\Recruitment;

use App\Http\Controllers\Controller;
use App\Http\Requests\Recruitment\RecruitmentUpdateRequest;
use App\Models\Recruitment;

class RecruitmentUpdateController extends Controller
{
    public function __invoke(RecruitmentUpdateRequest $request, Recruitment $recruitment)
    {
        $recruitment->update($request->validated());

        return response()->json([
            'data' => [
                'recruitment' => $recruitment
            ],
            'message' => 'Job Post Updated Successfully!',
        ]);
    }
}
