<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'department_id',
        'designation_id',
        'employee_code',
        'phone',
        'gender',
        'date_of_birth',
        'join_date',
        'employment_status',
        'salary_base',
    ];

    // Relationships

    // Employee belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Employee belongs to a department
    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    // Employee belongs to a designation
    public function designation()
    {
        return $this->belongsTo(Designation::class);
    }

    // Employee has many leave requests
    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class);
    }

    // Employee has one salary structure
    public function salaryStructure()
    {
        return $this->hasOne(SalaryStructure::class);
    }

    // Employee has many payroll records
    public function payrolls()
    {
        return $this->hasMany(Payroll::class);
    }

    // Relationship: One Employee can have many Performance Evaluations
    public function performanceEvaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'employee_id');
    }
}
