<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'email' => $this->email,
            'id' => $this->id,
            'name' => $this->name,
            'role' => $this->role ? [
                'id' => $this->role->id,
                'name' => $this->role->name,
            ] : [
                'id' => null,
                'name' => 'Not Assigned',
            ],
        ];
    }
}
