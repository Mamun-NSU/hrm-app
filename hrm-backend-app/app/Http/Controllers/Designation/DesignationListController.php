<?php

namespace App\Http\Controllers\Designation;

use App\Http\Controllers\Controller;
use App\Models\Designation;
use Illuminate\Http\JsonResponse;

class DesignationListController extends Controller
{
    public function __invoke(): JsonResponse
    {
        $designations = Designation::all();

        return response()->json([
            'data' => [
                'designations' => $designations,
            ],
            'message' => 'Designation List Found Successfully.',
        ]);
    }
}
