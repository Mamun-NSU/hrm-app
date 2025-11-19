<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    // GET /api/employees
    public function index()
    {
        $employees = Employee::with(['user.role', 'department', 'designation'])->get();

        // Append role_name to each employee
        $employees->transform(function ($employee) {
            $employee->role_name = $employee->user ? ($employee->user->role->name ?? 'Not Assigned') : 'Not Assigned';
            return $employee;
        });

        return response()->json($employees);
    }

    // Fetch employees with salary structure and payrolls
    public function employeesWithSalary()
    {
        $employees = Employee::with([
            'user',              // relationship to user table
            'salaryStructure',   // relationship to salary structure
            'payrolls'           // relationship to payrolls
        ])->get();

        return response()->json($employees);
    }

    // GET /api/employees/{id}
    public function show($id)
    {
        $employee = Employee::with(['user.role', 'department', 'designation'])->find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        // // Add role_name
        // $employee->role_name = $employee->user ? ($employee->user->role->name ?? 'Not Assigned') : 'Not Assigned';

        return response()->json($employee);
    }

    // POST /api/employees
    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'department_id' => 'nullable|exists:departments,id',
            'designation_id' => 'nullable|exists:designations,id',
            'employee_code' => 'required|unique:employees,employee_code',
            'phone' => 'nullable|string|max:20',
            'gender' => 'nullable|in:Male,Female,Other',
            'date_of_birth' => 'nullable|date',
            'join_date' => 'nullable|date',
            'employment_status' => 'in:Active,Probation,Resigned',
            'salary_base' => 'numeric|min:0',
        ]);

        $employee = Employee::create($validated);

        // Add role_name after creation
        $employee->load('user.role');
        $employee->role_name = $employee->user ? ($employee->user->role->name ?? 'Not Assigned') : 'Not Assigned';

        return response()->json([
            'message' => 'Employee created successfully',
            'employee' => $employee
        ], 201);
    }

    // PUT /api/employees/{id}
    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        $validated = $request->validate([
            'department_id' => 'nullable|exists:departments,id',
            'designation_id' => 'nullable|exists:designations,id',
            'employee_code' => 'required|unique:employees,employee_code,' . $employee->id,
            'phone' => 'nullable|string|max:20',
            'gender' => 'nullable|in:Male,Female,Other',
            'date_of_birth' => 'nullable|date',
            'join_date' => 'nullable|date',
            'employment_status' => 'in:Active,Probation,Resigned',
            'salary_base' => 'numeric|min:0',
        ]);

        $employee->update($validated);

        // Add role_name after update
        $employee->load('user.role');
        $employee->role_name = $employee->user ? ($employee->user->role->name ?? 'Not Assigned') : 'Not Assigned';

        return response()->json([
            'message' => 'Employee updated successfully',
            'employee' => $employee
        ]);
    }

    // DELETE /api/employees/{id}
    public function destroy($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        $employee->delete();

        return response()->json(['message' => 'Employee deleted successfully']);
    }
}
