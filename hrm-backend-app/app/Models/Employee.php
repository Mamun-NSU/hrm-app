<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory, HasUlids;

    protected $keyType = 'string';
    public $incrementing = false;

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

    public function attendanceRecords()
    {
        return $this->hasMany(Attendance::class, 'employee_id', 'id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id', 'id');
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class, 'designation_id', 'id');
    }

    public function employeeTrainings()
    {
        return $this->hasMany(EmployeeTraining::class, 'employee_id', 'id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'employee_id', 'id');
    }

    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class, 'employee_id', 'id');
    }

    public function payrolls()
    {
        return $this->hasMany(Payroll::class, 'employee_id', 'id');
    }

    public function performanceEvaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'employee_id', 'id');
    }

    public function salaryStructure()
    {
        return $this->hasOne(SalaryStructure::class, 'employee_id', 'id');
    }

    public function trainings()
    {
        return $this->belongsToMany(Training::class, 'employee_trainings', 'employee_id', 'training_id')
                    ->withPivot('status')
                    ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
