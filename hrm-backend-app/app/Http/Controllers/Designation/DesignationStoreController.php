<?php

namespace App\Http\Controllers\Designation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Designation\StoreDesignationRequest;
use App\Models\Designation;
use Illuminate\Http\JsonResponse;

class DesignationStoreController extends Controller
{
    public function __invoke(StoreDesignationRequest $request): JsonResponse
    {
        $designation = Designation::create($request->validated());

        return response()->json([
            'data' => [
                'designation' => $designation,
            ],
            'message' => 'Designation Created Successfully.',
        ], 201);
    }
}
