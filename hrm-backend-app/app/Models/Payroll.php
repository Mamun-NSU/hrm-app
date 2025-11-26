<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'generated_at',     
        'gross_salary',
        'month_year',      
        'net_salary', 
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function salaryStructure()
    {
        return $this->hasOne(SalaryStructure::class, 'employee_id', 'employee_id');
    }
}
