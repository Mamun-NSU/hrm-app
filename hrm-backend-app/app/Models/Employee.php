<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Employee extends Model
{
    use HasFactory, HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',              
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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = Str::ulid()->toBase32();
            }
        });
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function designation()
    {
        return $this->belongsTo(Designation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function attendanceRecords()
    {
        return $this->hasMany(Attendance::class, 'employee_id');
    }

    public function trainings()
    {
        return $this->belongsToMany(Training::class, 'employee_trainings')
                    ->withPivot('status')
                    ->withTimestamps();
    }

    public function employeeTrainings()
    {
        return $this->hasMany(EmployeeTraining::class, 'employee_id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'employee_id');
    }

    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class, 'employee_id');
    }

    public function salaryStructure()
    {
        return $this->hasOne(SalaryStructure::class, 'employee_id', 'id');
    }

    public function payrolls()
    {
        return $this->hasMany(Payroll::class, 'employee_id', 'id');
    }

    public function performanceEvaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'employee_id');
    }
}
