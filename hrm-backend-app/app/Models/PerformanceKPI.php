<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PerformanceKPI extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'description'];
    protected $table = 'performance_kpis';
    
    public function evaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'kpi_id');
    }
}

