<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'month_year',       // e.g., "2025-11"
        'gross_salary',
        'net_salary',
        'generated_at',     // date payroll was processed
    ];

    // Relationship: each payroll belongs to an employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}

