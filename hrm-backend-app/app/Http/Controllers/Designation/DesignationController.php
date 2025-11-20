<?php

namespace App\Http\Controllers\Designation;

use App\Http\Controllers\Controller;
use App\Http\Requests\Designation\StoreDesignationRequest;
use App\Http\Requests\Designation\UpdateDesignationRequest;
use App\Http\Resources\Designation\DesignationResource;
use App\Services\Designation\DesignationService;
use App\Repositories\Designation\DesignationRepository;
use Illuminate\Http\JsonResponse;

class DesignationController extends Controller
{
    public function __construct(
        private DesignationService $service,
        private DesignationRepository $repo
    ) {}

    public function index(): JsonResponse
    {
        $designations = $this->repo->all();
        return response()->json(DesignationResource::collection($designations));
    }

    public function show(int $id): JsonResponse
    {
        $designation = $this->repo->find($id);
        if (!$designation) {
            return response()->json(['message' => 'Designation not found'], 404);
        }
        return response()->json(new DesignationResource($designation));
    }

    public function store(StoreDesignationRequest $request): JsonResponse
    {
        $designation = $this->service->create($request->validated());
        return response()->json(new DesignationResource($designation), 201);
    }

    public function update(UpdateDesignationRequest $request, int $id): JsonResponse
    {
        $designation = $this->repo->find($id);
        if (!$designation) {
            return response()->json(['message' => 'Designation not found'], 404);
        }

        $designation = $this->service->update($designation, $request->validated());
        return response()->json(new DesignationResource($designation));
    }

    public function destroy(int $id): JsonResponse
    {
        $designation = $this->repo->find($id);
        if (!$designation) {
            return response()->json(['message' => 'Designation not found'], 404);
        }

        $this->repo->delete($designation);
        return response()->json(['message' => 'Designation deleted successfully']);
    }
}
