<?php

namespace App\Http\Controllers\Attendance;

use App\Http\Controllers\Controller;
use App\Http\Requests\Attendance\AttendanceUpdateRequest;
use App\Models\Attendance;
use Illuminate\Http\JsonResponse;

class AttendanceUpdateController extends Controller
{
    public function __invoke(AttendanceUpdateRequest $request, Attendance $attendance): JsonResponse
    {
        $attendance->update($request->validated());

         return response()->json([
            'data' => [
                'attendance' => $attendance,
            ],
            'message' => 'Attendance Updated Successfully.',
        ]);
    }
}
