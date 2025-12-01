<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;

class Training extends Model
{
    use HasFactory, HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
    ];

    public function employees()
    {
        return $this->belongsToMany(
            Employee::class,
            'employee_trainings',
            'training_id',
            'employee_id'
        )
        ->withPivot('status')
        ->withTimestamps();
    }

    public function employeeTrainings()
    {
        return $this->hasMany(
            EmployeeTraining::class,
            'training_id',
            'id'
        );
    }
}
