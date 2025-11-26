<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeaveType extends Model
{
    protected $fillable = ['days_per_year', 'description', 'name'];

    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class);
    }
}
