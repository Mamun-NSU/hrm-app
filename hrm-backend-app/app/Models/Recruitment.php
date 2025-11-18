<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    use HasFactory;

    protected $fillable = [
        'position',
        'department_id',
        'status', // e.g., 'open', 'closed'
    ];

    /**
     * Each recruitment belongs to a department
     */
    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * A job post can receive multiple job applications
     */
    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class);
    }
}


