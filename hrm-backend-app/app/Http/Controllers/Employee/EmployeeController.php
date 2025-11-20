<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Http\Resources\Employee\EmployeeResource;
use App\Repositories\Employee\EmployeeRepository;
use Illuminate\Http\JsonResponse;

class EmployeeController extends Controller
{
    public function __construct(private EmployeeRepository $repo) {}

    public function index(): JsonResponse
    {
        $employees = $this->repo->allWithRelations(['department', 'designation', 'user.role']);
        return response()->json(EmployeeResource::collection($employees));
    }

    public function show(int $id): JsonResponse
    {
        $employee = $this->repo->findWithRelations($id, ['department', 'designation', 'user.role']);

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        return response()->json(new EmployeeResource($employee));
    }

    public function destroy(int $id): JsonResponse
    {
        $employee = $this->repo->find($id);

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        $this->repo->delete($employee);

        return response()->json(['message' => 'Employee deleted successfully']);
    }
}
