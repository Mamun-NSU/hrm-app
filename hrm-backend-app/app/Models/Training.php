<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
    ];

    // Many-to-Many with Employee via pivot table
    public function employees()
    {
        return $this->belongsToMany(Employee::class, 'employee_trainings')
                    ->withPivot('status')
                    ->withTimestamps();
    }

    // Optional: Direct access to EmployeeTraining records
    public function employeeTrainings()
    {
        return $this->hasMany(EmployeeTraining::class);
    }
}