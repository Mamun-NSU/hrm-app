<?php

namespace App\Http\Controllers;

use App\Models\Recruitment;
use Illuminate\Http\Request;

class RecruitmentController extends Controller
{
    // Public: List all job posts
    public function index()
    {
        return Recruitment::with('department')->get();
    }

    // Public: Show single job post
    public function show($id)
    {
        return Recruitment::with('department')->findOrFail($id);
    }

    // Admin/HR Only
    public function store(Request $request)
    {
        $request->validate([
            'position' => 'required|string',
            'department_id' => 'required|exists:departments,id',
            'status' => 'required|in:open,closed',
        ]);

        $recruitment = Recruitment::create($request->all());
        return response()->json($recruitment, 201);
    }

    public function update(Request $request, $id)
    {
        $recruitment = Recruitment::findOrFail($id);
        $recruitment->update($request->all());
        return response()->json($recruitment);
    }

    public function destroy($id)
    {
        $recruitment = Recruitment::findOrFail($id);
        $recruitment->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}

