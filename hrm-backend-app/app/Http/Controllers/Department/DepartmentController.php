<?php

namespace App\Http\Controllers\Department;

use App\Http\Controllers\Controller;
use App\Http\Requests\Department\StoreDepartmentRequest;
use App\Http\Requests\Department\UpdateDepartmentRequest;
use App\Http\Resources\Department\DepartmentResource;
use App\Services\Department\DepartmentService;
use App\Repositories\Department\DepartmentRepository;
use Illuminate\Http\JsonResponse;

class DepartmentController extends Controller
{
    public function __construct(
        private DepartmentService $service,
        private DepartmentRepository $repo
    ) {}

    public function index(): JsonResponse
    {
        $departments = $this->repo->all();
        return response()->json(DepartmentResource::collection($departments));
    }

    public function show(int $id): JsonResponse
    {
        $department = $this->repo->find($id);
        if (!$department) {
            return response()->json(['message' => 'Department not found'], 404);
        }
        return response()->json(new DepartmentResource($department));
    }

    public function store(StoreDepartmentRequest $request): JsonResponse
    {
        $department = $this->service->create($request->validated());
        return response()->json(new DepartmentResource($department), 201);
    }

    public function update(UpdateDepartmentRequest $request, int $id): JsonResponse
    {
        $department = $this->repo->find($id);
        if (!$department) {
            return response()->json(['message' => 'Department not found'], 404);
        }

        $department = $this->service->update($department, $request->validated());
        return response()->json(new DepartmentResource($department));
    }

    public function destroy(int $id): JsonResponse
    {
        $department = $this->repo->find($id);
        if (!$department) {
            return response()->json(['message' => 'Department not found'], 404);
        }

        $this->repo->delete($department);
        return response()->json(['message' => 'Department deleted successfully']);
    }
}
