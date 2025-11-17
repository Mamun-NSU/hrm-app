<?php

namespace App\Http\Controllers;

use App\Models\Training;
use Illuminate\Http\Request;


class TrainingController extends Controller
{
    public function index() {
        return Training::all();
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $training = Training::create($validated);
        return response()->json($training, 201);
    }

    public function show(Training $training) {
        return $training;
    }

    public function update(Request $request, Training $training) {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
        ]);

        $training->update($validated);
        return response()->json($training);
    }

    public function destroy(Training $training) {
        $training->delete();
        return response()->json(['message' => 'Training deleted successfully']);
    }
}