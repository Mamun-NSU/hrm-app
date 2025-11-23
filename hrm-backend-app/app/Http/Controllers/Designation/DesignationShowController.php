<?php

namespace App\Http\Controllers\Designation;

use App\Http\Controllers\Controller;
use App\Models\Designation;
use Illuminate\Http\JsonResponse;

class DesignationShowController extends Controller
{
    public function __invoke(Designation $designation): JsonResponse
    {
        return response()->json([
            'data' => [
                'designation' => $designation,
            ],
            'message' => 'Designation Found Successfully.',
        ]);
    }
}
