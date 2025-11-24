<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Models\Training;
use Illuminate\Http\JsonResponse;

class TrainingShowController extends Controller
{
    public function __invoke(Training $training): JsonResponse
    {
        return response()->json([
            'data' => [
                'training' => $training,
            ],
            'message' => 'Training Found Successfully.',
        ]);
    }
}
