<?php

namespace App\Http\Controllers\Recruitment;

use App\Http\Controllers\Controller;
use App\Models\Recruitment;

class RecruitmentDestroyController extends Controller
{
    public function __invoke(Recruitment $recruitment)
    {
        $recruitment->delete();

        return response()->json([
            'message' => 'Job post deleted successfully!'
        ]);
    }
}
