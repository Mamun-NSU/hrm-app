<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeaveRequest extends Model
{
    protected $fillable = [
        'approved_by',
        'employee_id',
        'from_date',
        'leave_type_id',
        'reason',
        'status',
        'to_date',
        
    ];

    protected $casts = [
        'from_date' => 'date',
        'to_date'   => 'date',
    ];

    public function approver()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function leaveType()
    {
        return $this->belongsTo(LeaveType::class);
    }
}
