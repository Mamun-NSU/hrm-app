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
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class);
    }

    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class);
    }

    public function salaryStructure()
    {
        return $this->hasOne(SalaryStructure::class);
    }

    public function payrolls()
    {
        return $this->hasMany(Payroll::class);
    }

    public function performanceEvaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'employee_id');
    }

    // EmployeeTraining relationships
    public function trainings()
    {
        return $this->belongsToMany(Training::class, 'employee_trainings')
                    ->withPivot('status')
                    ->withTimestamps();
    }

    public function employeeTrainings()
    {
        return $this->hasMany(EmployeeTraining::class);
    }
}
