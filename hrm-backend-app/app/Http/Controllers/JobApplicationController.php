<?php

namespace App\Http\Controllers;

use App\Models\JobApplication;
use App\Models\Recruitment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class JobApplicationController extends Controller
{
    // ========================
    // PUBLIC ACCESS
    // ========================

    public function getOpenJobs()
    {
        // Fetch all open jobs along with their department
        $jobs = \App\Models\Recruitment::with('department')
            ->where('status', 'open') // optional: only open jobs
            ->get();

        return response()->json($jobs);
    }

    public function storePublic(Request $request)
    {
        $request->validate([
            'recruitment_id' => 'required|exists:recruitments,id',
            'applicant_name' => 'required|string|max:255',
            'applicant_email' => 'required|email|max:255',
            'applicant_phone' => 'required|string|max:20',
            'resume_link' => 'required|string|max:255',
        ]);

        $application = JobApplication::create([
            'recruitment_id' => $request->recruitment_id,
            'applicant_name' => $request->applicant_name,
            'applicant_email' => $request->applicant_email,
            'applicant_phone' => $request->applicant_phone,
            'resume_link' => $request->resume_link,
            'status' => 'pending',
            'applied_at' => now(),
        ]);

        return response()->json([
            'message' => 'Application submitted successfully!',
            'data' => $application,
        ], 201);
    }

    // ========================
    // EMPLOYEE ACCESS
    // ========================

    // Fetch all job applications for the logged-in employee
    public function employeeIndex()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Admin: fetch all job applications
        if ($user->role_id === 1) {
            $applications = JobApplication::with('recruitment')->get();
        } 
        // Employee: fetch only their own applications
        elseif ($user->role_id === 3) {
            $applications = JobApplication::with('recruitment')
                ->where('employee_id', $user->id)
                ->get();
        } 
        else {
            // Other roles: forbidden
            return response()->json(['message' => 'Forbidden'], 403);
        }

        return response()->json($applications);
    }


    public function storeEmployee(Request $request)
    {
        $request->validate([
            'recruitment_id' => 'required|exists:recruitments,id',
            'resume_link' => 'required|string|max:255',
        ]);

        $user = Auth::user();
        $employee = $user->employee;

        if (!$employee) {
            return response()->json([
                'message' => 'Only employees can apply via this route.'
            ], 403);
        }

        $application = JobApplication::create([
            'recruitment_id' => $request->recruitment_id,
            'applicant_name' => $user->name,
            'applicant_email' => $user->email,
            'applicant_phone' => $employee->phone,
            'resume_link' => $request->resume_link,
            'user_id' => $user->id,
            'employee_id' => $employee->id,
            'status' => 'pending',
            'applied_at' => now(),
        ]);

        return response()->json([
            'message' => 'Application submitted successfully!',
            'data' => $application,
        ], 201);
    }

    // ========================
    // ADMIN ACCESS
    // ========================
    public function index()
    {
        $applications = JobApplication::with(['recruitment.department', 'employee.user'])
                                      ->latest()
                                      ->get();

        return response()->json($applications);
    }

    public function show($id)
    {
        $application = JobApplication::with(['recruitment.department', 'employee.user'])
                                     ->findOrFail($id);

        return response()->json($application);
    }

    public function update(Request $request, $id)
    {
        $application = JobApplication::findOrFail($id);

        $request->validate([
            'status' => 'required|in:pending,reviewed,hired,rejected,shortlisted',
        ]);

        $application->update([
            'status' => $request->status,
        ]);

        return response()->json([
            'message' => 'Application status updated successfully!',
            'data' => $application,
        ]);
    }

    public function destroy($id)
    {
        $application = JobApplication::findOrFail($id);
        $application->delete();

        return response()->json([
            'message' => 'Application deleted successfully!'
        ]);
    }
}
