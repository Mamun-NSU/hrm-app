<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeTraining extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'status',
        'training_id',
    ];

    protected $casts = [
        'status' => 'string',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function training()
    {
        return $this->belongsTo(Training::class);
    }
}
