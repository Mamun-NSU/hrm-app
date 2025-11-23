<?php

namespace App\Http\Controllers\Designation;

use App\Http\Controllers\Controller;
use App\Models\Designation;
use Illuminate\Http\JsonResponse;

class DesignationDestroyController extends Controller
{
    public function __invoke(Designation $designation): JsonResponse
    {
        $designation->delete();

        return response()->json([
            'message' => 'Designation Deleted Successfully.',
        ]);
    }
}
