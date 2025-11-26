<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'end_date',
        'start_date',
        'title', 
    ];

    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_trainings')
            ->withPivot('status')
            ->withTimestamps();
    }

    public function employeeTrainings()
    {
        return $this->hasMany(EmployeeTraining::class);
    }
}
