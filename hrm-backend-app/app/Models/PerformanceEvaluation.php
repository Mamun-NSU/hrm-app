<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;

class PerformanceEvaluation extends Model
{
    use HasFactory, HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'evaluated_by',
        'evaluation_date',
        'employee_id',
        'kpi_id',
        'remarks',
        'score',
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    public function kpi()
    {
        return $this->belongsTo(PerformanceKPI::class, 'kpi_id');
    }
}
