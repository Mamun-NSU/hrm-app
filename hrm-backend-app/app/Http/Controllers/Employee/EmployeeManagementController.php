<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Services\Employee\EmployeeService;
use App\Repositories\Employee\EmployeeRepository;
use Illuminate\Http\JsonResponse;

class EmployeeManagementController extends Controller
{
    public function __construct(
        private EmployeeService $service,
        private EmployeeRepository $repo
    ) {}

    public function store(StoreEmployeeRequest $request): JsonResponse
    {
        $employee = $this->service->create($request->validated());

        return response()->json(new EmployeeResource(
            $employee->load(['department', 'designation', 'user.role'])
        ), 201);
    }

    public function update(UpdateEmployeeRequest $request, int $id): JsonResponse
    {
        $employee = $this->repo->find($id);

        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }

        $employee = $this->service->update($employee, $request->validated());

        return response()->json(new EmployeeResource(
            $employee->load(['department', 'designation', 'user.role'])
        ));
    }
}
