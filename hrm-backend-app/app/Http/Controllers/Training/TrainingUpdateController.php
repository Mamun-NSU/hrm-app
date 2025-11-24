<?php

namespace App\Http\Controllers\Training;

use App\Http\Controllers\Controller;
use App\Http\Requests\Training\TrainingUpdateRequest;
use App\Models\Training;
use Illuminate\Http\JsonResponse;

class TrainingUpdateController extends Controller
{
    public function __invoke(TrainingUpdateRequest $request, Training $training): JsonResponse
    {
        $training->update($request->validated());

        return response()->json([
            'data' => [
                'training' => $training,
            ],
            'message' => 'Training Updated Successfully.',
        ]);
    }
}
