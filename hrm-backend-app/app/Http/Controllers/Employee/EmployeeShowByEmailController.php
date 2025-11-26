<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;

class EmployeeShowByEmailController extends Controller
{
    public function __invoke($email): JsonResponse
    {
        $employee = Employee::with(['department', 'designation', 'user.role'])
            ->whereHas('user', function ($query) use ($email) {
                $query->where('email', $email);
            })
            ->first();

        if (!$employee) {
            return response()->json([
                'data' => null,
                'message' => 'Employee not found for this user.',
            ], 404);
        }

        return response()->json([
            'data' => [
                'employee' => $employee,
            ],
            'message' => 'Employee found successfully.',
        ]);
    }
}
