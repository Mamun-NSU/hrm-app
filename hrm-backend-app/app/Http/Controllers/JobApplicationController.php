<?php

namespace App\Http\Controllers;

use App\Models\JobApplication;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    // Public: Apply for job
    public function store(Request $request)
    {
        $request->validate([
            'recruitment_id' => 'required|exists:recruitments,id',
            'applicant_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'resume_link' => 'nullable|string',
        ]);

        $application = JobApplication::create($request->all());
        return response()->json($application, 201);
    }

    // Admin/HR: List all applications
    public function index()
    {
        return JobApplication::with('recruitment')->get();
    }

    // Admin/HR: Update status
    public function update(Request $request, $id)
    {
        $request->validate(['status' => 'required|in:pending,reviewed,rejected,accepted']);
        $application = JobApplication::findOrFail($id);
        $application->update($request->only('status'));
        return response()->json($application);
    }

    public function destroy($id)
    {
        $application = JobApplication::findOrFail($id);
        $application->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
