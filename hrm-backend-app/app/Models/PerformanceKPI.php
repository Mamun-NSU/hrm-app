<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUlids;

class PerformanceKPI extends Model
{
    use HasFactory, HasUlids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $table = 'performance_kpis';
    protected $fillable = ['name', 'description'];

    public function evaluations()
    {
        return $this->hasMany(PerformanceEvaluation::class, 'kpi_id');
    }
}
