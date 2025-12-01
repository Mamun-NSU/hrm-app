<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('performance_evaluations', function (Blueprint $table) {
            $table->ulid('id')->primary();      
            $table->string('employee_id');       
            $table->string('kpi_id');            
            $table->integer('score');
            $table->text('remarks')->nullable();
            $table->date('evaluation_date');
            $table->string('evaluated_by');     
            $table->timestamps();

            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->foreign('kpi_id')->references('id')->on('performance_kpis')->onDelete('cascade');

            $table->index('employee_id');
            $table->index('kpi_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('performance_evaluations');
    }
};
