<?php

namespace App\Http\Controllers;

use App\Models\SalaryStructure;
use Illuminate\Http\Request;

class SalaryStructureController extends Controller
{
    /**
     * Show all salary structures
     */
    public function index()
    {
        $structures = SalaryStructure::with('employee.user')->get();

        return response()->json([
            'status' => true,
            'data' => $structures
        ], 200);
    }

    /**
     * Store a salary structure
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'employee_id'        => 'required|exists:employees,id|unique:salary_structures,employee_id',
            'basic_salary'       => 'required|numeric|min:0',
            'house_rent'         => 'nullable|numeric|min:0',
            'medical_allowance'  => 'nullable|numeric|min:0',
            'transport_allowance'=> 'nullable|numeric|min:0',
            'other_allowance'    => 'nullable|numeric|min:0',
            'taxes_deduction'    => 'nullable|numeric|min:0',
            'security_deduction' => 'nullable|numeric|min:0',
        ]);

        // Auto calculate totals
        $validated['allowance_amount'] =
            ($validated['house_rent'] ?? 0) +
            ($validated['medical_allowance'] ?? 0) +
            ($validated['transport_allowance'] ?? 0) +
            ($validated['other_allowance'] ?? 0);

        $validated['deduction_amount'] =
            ($validated['taxes_deduction'] ?? 0) +
            ($validated['security_deduction'] ?? 0);

        $structure = SalaryStructure::create($validated);

        return response()->json([
            'status' => true,
            'message' => 'Salary structure created successfully.',
            'data' => $structure,
        ], 201);
    }

    /**
     * Show a single salary structure
     */
    public function show(SalaryStructure $salaryStructure)
    {
        $salaryStructure->load('employee.user');

        return response()->json([
            'status' => true,
            'data' => $salaryStructure
        ], 200);
    }

    /**
     * Update a salary structure
     */
    public function update(Request $request, SalaryStructure $salaryStructure)
    {
        $validated = $request->validate([
            'basic_salary'       => 'required|numeric|min:0',
            'house_rent'         => 'nullable|numeric|min:0',
            'medical_allowance'  => 'nullable|numeric|min:0',
            'transport_allowance'=> 'nullable|numeric|min:0',
            'other_allowance'    => 'nullable|numeric|min:0',
            'taxes_deduction'    => 'nullable|numeric|min:0',
            'security_deduction' => 'nullable|numeric|min:0',
        ]);

        // Auto calculation on update
        $validated['allowance_amount'] =
            ($validated['house_rent'] ?? 0) +
            ($validated['medical_allowance'] ?? 0) +
            ($validated['transport_allowance'] ?? 0) +
            ($validated['other_allowance'] ?? 0);

        $validated['deduction_amount'] =
            ($validated['taxes_deduction'] ?? 0) +
            ($validated['security_deduction'] ?? 0);

        $salaryStructure->update($validated);

        return response()->json([
            'status' => true,
            'message' => 'Salary structure updated successfully.',
            'data' => $salaryStructure,
        ], 200);
    }

    /**
     * Delete salary structure
     */
    public function destroy(SalaryStructure $salaryStructure)
    {
        $salaryStructure->delete();

        return response()->json([
            'status' => true,
            'message' => 'Salary structure deleted successfully.'
        ], 200);
    }
}
