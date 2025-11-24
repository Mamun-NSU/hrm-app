<?php

namespace App\Http\Controllers\Attendance;

use App\Http\Controllers\Controller;
use App\Models\Attendance;
use Illuminate\Http\JsonResponse;

class AttendanceDestroyController extends Controller
{
    public function __invoke(Attendance $attendance): JsonResponse
    {
        $attendance->delete();
        return response()->json(['message' => 'Attendance Deleted Successfully']);
    }
}
