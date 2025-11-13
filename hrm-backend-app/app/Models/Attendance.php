<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    // Explicitly define table name
    protected $table = 'attendance_records';

    protected $fillable = [
        'employee_id',
        'date',
        'check_in_time',
        'check_out_time',
        'status'
    ];

    protected $dates = ['date', 'check_in_time', 'check_out_time'];

    // Relation to Employee
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
