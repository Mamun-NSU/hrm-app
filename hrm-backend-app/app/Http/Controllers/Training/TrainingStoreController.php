<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Http\Requests\Training\TrainingStoreRequest;
use App\Models\Training;
use Illuminate\Http\JsonResponse;

class TrainingStoreController extends Controller
{
    public function __invoke(TrainingStoreRequest $request): JsonResponse
    {
        $training = Training::create($request->validated());

        return response()->json([
            'data' => [
                'training' => $training,
            ],
            'message' => 'Training Created Successfully.',
        ], 201);
    }
}
