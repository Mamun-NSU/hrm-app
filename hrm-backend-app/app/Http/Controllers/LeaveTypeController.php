<?php

namespace App\Http\Controllers;

use App\Models\LeaveType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LeaveTypeController extends Controller
{
    // ========================
    // ADMIN ONLY CRUD
    // ========================

    // Get all leave types
    public function index()
    {
        $leaveTypes = LeaveType::all();
        return response()->json($leaveTypes);
    }

    // Store a new leave type
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'         => 'required|string|max:255|unique:leave_types,name',
            'description'  => 'nullable|string',
            'days_per_year'=> 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $leaveType = LeaveType::create($validator->validated());

        return response()->json([
            'message' => 'Leave type created successfully',
            'data'    => $leaveType
        ], 201);
    }

    // Show a specific leave type by ID
    public function show($id)
    {
        $leaveType = LeaveType::find($id);

        if (!$leaveType) {
            return response()->json(['message' => 'Leave type not found'], 404);
        }

        return response()->json($leaveType);
    }

    // Update a leave type
    public function update(Request $request, $id)
    {
        $leaveType = LeaveType::find($id);

        if (!$leaveType) {
            return response()->json(['message' => 'Leave type not found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'name'         => 'required|string|max:255|unique:leave_types,name,' . $id,
            'description'  => 'nullable|string',
            'days_per_year'=> 'required|integer|min:0',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $leaveType->update($validator->validated());

        return response()->json([
            'message' => 'Leave type updated successfully',
            'data'    => $leaveType
        ]);
    }

    // Delete a leave type
    public function destroy($id)
    {
        $leaveType = LeaveType::find($id);

        if (!$leaveType) {
            return response()->json(['message' => 'Leave type not found'], 404);
        }

        $leaveType->delete();

        return response()->json([
            'message' => 'Leave type deleted successfully'
        ]);
    }
}
