<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Designation;
use Illuminate\Http\Request;

class DesignationController extends Controller
{
    public function index()
    {
        return response()->json(Designation::all());
    }

    public function show($id)
    {
        $designation = Designation::find($id);
        if (!$designation) {
            return response()->json(['message' => 'Designation not found'], 404);
        }
        return response()->json($designation);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:designations,title',
        ]);

        $designation = Designation::create($validated);

        return response()->json([
            'message' => 'Designation created successfully',
            'designation' => $designation
        ], 201);
    }

    public function update(Request $request, $id)
    {
        $designation = Designation::find($id);
        if (!$designation) {
            return response()->json(['message' => 'Designation not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:designations,title,' . $id,
        ]);

        $designation->update($validated);

        return response()->json([
            'message' => 'Designation updated successfully',
            'designation' => $designation
        ]);
    }

    public function destroy($id)
    {
        $designation = Designation::find($id);
        if (!$designation) {
            return response()->json(['message' => 'Designation not found'], 404);
        }

        $designation->delete();

        return response()->json(['message' => 'Designation deleted successfully']);
    }
}

