<?php

namespace App\Http\Controllers\Attendance;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use Illuminate\Http\JsonResponse;

class AttendanceShowController extends Controller
{
    public function __invoke(Attendance $attendance): JsonResponse
    {
        $attendance->load('employee.user');
        
        return response()->json([
            'data' => [
                'attendance' => $attendance
            ],
            'message' => 'Attendance Find Successfully.',
        ]);
    }
}
