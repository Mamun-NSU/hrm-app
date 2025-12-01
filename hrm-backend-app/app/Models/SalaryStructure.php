<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;

class SalaryStructure extends Model
{
    use HasFactory, HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'employee_id',
        'basic_salary',
        'house_rent',
        'medical_allowance',
        'transport_allowance',
        'other_allowance',
        'taxes_deduction',
        'security_deduction',
        'allowance_amount',
        'deduction_amount',
    ];

    protected $casts = [
        'basic_salary'        => 'decimal:2',
        'house_rent'          => 'decimal:2',
        'medical_allowance'   => 'decimal:2',
        'transport_allowance' => 'decimal:2',
        'other_allowance'     => 'decimal:2',
        'taxes_deduction'     => 'decimal:2',
        'security_deduction'  => 'decimal:2',
        'allowance_amount'    => 'decimal:2',
        'deduction_amount'    => 'decimal:2',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id', 'id');
    }

    public function payrolls()
    {
        return $this->hasMany(
            Payroll::class,
            'employee_id',
            'employee_id'
        );
    }
}
