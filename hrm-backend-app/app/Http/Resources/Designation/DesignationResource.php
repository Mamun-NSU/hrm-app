<?php

namespace App\Http\Resources\Designation;

use Illuminate\Http\Resources\Json\JsonResource;

class DesignationResource extends JsonResource
{
    public function toArray($request): array
    {
        return ['id' => $this->id, 'title' => $this->title];
    }
}
