<?php

namespace App\Http\Controllers;

use App\Models\EmployeeTraining;
use App\Models\Employee;
use App\Models\Training;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class EmployeeTrainingController extends Controller
{
    /**
     * Display a listing of all Employee Trainings.
     */
    public function index()
    {
        $user = Auth::user();

        if ($user->role_id === 1) {
            // Admin: fetch all employee trainings
            $employeeTrainings = EmployeeTraining::with('employee.user', 'training')->get();
        } else {
            // Regular employee: fetch only their own trainings
            $employeeTrainings = EmployeeTraining::with('employee.user', 'training')
                ->where('employee_id', $user->employee->id)
                ->get();
        }

        return response()->json($employeeTrainings);
    }


    /**
     * Store a newly created Employee Training.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'employee_id' => 'required|exists:employees,id',
            'training_id' => 'required|exists:trainings,id',
            'status' => 'required|string|in:pending,completed,in-progress',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $employeeTraining = EmployeeTraining::create($request->all());
        return response()->json($employeeTraining, 201);
    }

    /**
     * Display the specified Employee Training.
     */
    public function show($id)
    {
        $employeeTraining = EmployeeTraining::with('employee.user', 'training')->find($id);

        if (!$employeeTraining) {
            return response()->json(['message' => 'Employee Training not found'], 404);
        }

        return response()->json($employeeTraining);
    }

    /**
     * Update the specified Employee Training.
     */
    public function update(Request $request, $id)
    {
        $employeeTraining = EmployeeTraining::find($id);

        if (!$employeeTraining) {
            return response()->json(['message' => 'Employee Training not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'employee_id' => 'required|exists:employees,id',
            'training_id' => 'required|exists:trainings,id',
            'status' => 'required|string|in:pending,completed,in-progress',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $employeeTraining->update($request->all());

        return response()->json($employeeTraining);
    }

    /**
     * Remove the specified Employee Training.
     */
    public function destroy($id)
    {
        $employeeTraining = EmployeeTraining::find($id);

        if (!$employeeTraining) {
            return response()->json(['message' => 'Employee Training not found'], 404);
        }

        $employeeTraining->delete();

        return response()->json(['message' => 'Employee Training deleted successfully']);
    }
}
