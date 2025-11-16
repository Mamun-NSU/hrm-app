<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalaryStructure extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'basic_salary',
        'allowance_amount',
        'deduction_amount',
    ];

    // Relationship: each salary structure belongs to an employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
