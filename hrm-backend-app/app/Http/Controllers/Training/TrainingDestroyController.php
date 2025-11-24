<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Models\Training;
use Illuminate\Http\JsonResponse;

class TrainingDestroyController extends Controller
{
    public function __invoke(Training $training): JsonResponse
    {
        $training->delete();

        return response()->json([
            'message' => 'Training Deleted Successfully.',
        ]);
    }
}
