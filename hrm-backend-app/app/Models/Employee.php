<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'date_of_birth',
        'department_id',
        'designation_id',
        'employee_code',
        'employment_status',
        'gender',
        'join_date',
        'phone',
        'salary_base',
        'user_id',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class);
    }

    public function employeeTrainings()
    {
        return $this->hasMany(EmployeeTraining::class);
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class);
    }


    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class);
    }

    public function payrolls()
    {
        return $this->hasMany(Payroll::class);
    }

    public function performanceEvaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'employee_id');
    }

    public function salaryStructure()
    {
        return $this->hasOne(SalaryStructure::class);
    }

    public function trainings()
    {
        return $this->belongsToMany(Training::class, 'employee_trainings')
                    ->withPivot('status')
                    ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
