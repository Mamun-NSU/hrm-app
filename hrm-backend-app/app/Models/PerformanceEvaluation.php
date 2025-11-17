<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerformanceEvaluation extends Model
{
    use HasFactory;
    protected $table = 'performance_evaluations';

    protected $fillable = [
        'employee_id',
        'kpi_id',
        'score',
        'remarks',
        'evaluation_date',
        'evaluated_by'
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function kpi()
    {
        return $this->belongsTo(PerformanceKPI::class, 'kpi_id');
    }
}
