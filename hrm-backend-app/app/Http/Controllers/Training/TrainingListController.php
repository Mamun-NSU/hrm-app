<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Models\Training;
use Illuminate\Http\JsonResponse;

class TrainingListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $trainings = Training::all();

        return response()->json([
            'data' => [
                'trainings' => $trainings,
            ],
            'message' => 'Training List Found Successfully.',
        ]);
    }
}
