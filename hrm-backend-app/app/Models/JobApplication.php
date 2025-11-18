<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = ['recruitment_id', 'applicant_name', 'email', 'phone', 'resume_link', 'status', 'applied_at'];

    public function recruitment()
    {
        return $this->belongsTo(Recruitment::class);
    }
}
