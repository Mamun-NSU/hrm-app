<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory, HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $table = 'attendance_records';
    
    protected $fillable = [
        'check_in_time',
        'check_out_time',
        'date',
        'employee_id',
        'status',
    ];

    protected $dates = ['check_in_time', 'check_out_time', 'date'];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id');
    }
}
