<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'recruitment_id',
        'applicant_name',
        'applicant_email',
        'applicant_phone',
        'resume_link',
        'user_id',     // optional: linked if an employee applies
        'employee_id', // optional: linked if an employee applies
        'status',      // e.g., 'pending', 'reviewed', 'accepted', 'rejected'
        'applied_at',
    ];

    /**
     * Relationship: Application belongs to a recruitment
     */
    public function recruitment()
    {
        return $this->belongsTo(Recruitment::class);
    }

    /**
     * Relationship: Application may belong to a registered employee
     */
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    /**
     * Relationship: Application may belong to a registered user
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
