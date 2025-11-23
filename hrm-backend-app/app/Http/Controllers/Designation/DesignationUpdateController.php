<?php

namespace App\Http\Controllers\Designation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Designation\UpdateDesignationRequest;
use App\Models\Designation;
use Illuminate\Http\JsonResponse;

class DesignationUpdateController extends Controller
{
    public function __invoke(UpdateDesignationRequest $request, Designation $designation): JsonResponse
    {
        $designation->update($request->validated());

        return response()->json([
            'data' => [
                'designation' => $designation,
            ],
            'message' => 'Designation Updated Successfully.',
        ]);
    }
}
