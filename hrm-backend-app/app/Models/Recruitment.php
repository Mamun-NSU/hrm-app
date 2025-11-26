<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recruitment extends Model
{
    use HasFactory;

    protected $fillable = [
        'department_id',
        'position',
        'status',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class);
    }
}
