<?php

namespace App\Http\Controllers;

use App\Models\Recruitment;
use Illuminate\Http\Request;

class RecruitmentController extends Controller
{
    // ========================
    // Public: List all open job posts
    // ========================
    public function indexPublic()
    {
        $recruitments = Recruitment::where('status', 'open')
                                   ->with('department')
                                   ->latest()
                                   ->get();

        return response()->json($recruitments);
    }

    // ========================
    // Admin: List all job posts
    // ========================
    public function index()
    {
        $recruitments = Recruitment::with('department')->latest()->get();
        return response()->json($recruitments);
    }

    // ========================
    // Admin: Create job post
    // ========================
    public function store(Request $request)
    {
        $request->validate([
            'position' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id',
            'status' => 'required|in:open,closed',
        ]);

        $recruitment = Recruitment::create($request->all());

        return response()->json([
            'message' => 'Job post created successfully!',
            'data' => $recruitment
        ], 201);
    }

    // ========================
    // Admin: Show single job post with applications
    // ========================
    public function show($id)
    {
        $recruitment = Recruitment::with([
            'department',
            'jobApplications' => function ($query) {
                $query->orderBy('applied_at', 'desc');
            },
        ])->findOrFail($id);

        // Include number of applications
        $recruitment->applications_count = $recruitment->jobApplications->count();

        return response()->json($recruitment);
    }


    // ========================
    // Admin: Update job post
    // ========================
    public function update(Request $request, $id)
    {
        $recruitment = Recruitment::findOrFail($id);

        $request->validate([
            'position' => 'sometimes|required|string|max:255',
            'department_id' => 'sometimes|required|exists:departments,id',
            'status' => 'sometimes|required|in:open,closed',
        ]);

        $recruitment->update($request->all());

        return response()->json([
            'message' => 'Job post updated successfully!',
            'data' => $recruitment
        ]);
    }

    // ========================
    // Admin: Delete job post
    // ========================
    public function destroy($id)
    {
        $recruitment = Recruitment::findOrFail($id);
        $recruitment->delete();

        return response()->json([
            'message' => 'Job post deleted successfully!'
        ]);
    }
}
