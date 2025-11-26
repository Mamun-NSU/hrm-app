<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'applicant_email',
        'applicant_name',
        'applicant_phone',
        'applied_at',
        'employee_id', 
        'recruitment_id',
        'resume_link',
        'status',
        'user_id',   
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function recruitment()
    {
        return $this->belongsTo(Recruitment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
