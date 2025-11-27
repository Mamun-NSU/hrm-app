<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;

class LeaveType extends Model
{
    use HasUlids;

    protected $keyType = 'string';
    public $incrementing = false;
    protected $fillable = ['days_per_year', 'description', 'name'];

    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class);
    }
}
