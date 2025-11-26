<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerformanceEvaluation extends Model
{
    use HasFactory;
    
    protected $table = 'performance_evaluations';
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
        return $this->belongsTo(Employee::class);
    }

    public function kpi()
    {
        return $this->belongsTo(PerformanceKPI::class, 'kpi_id');
    }
}
