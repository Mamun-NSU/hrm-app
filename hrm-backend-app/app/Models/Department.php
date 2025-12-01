<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;

class Department extends Model
{
    use HasFactory, HasUlids;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = ['name'];

    public function employees()
    {
        return $this->hasMany(Employee::class, 'department_id', 'id');
    }

    public function recruitments()
    {
        return $this->hasMany(Recruitment::class, 'department_id', 'id');
    }
}
