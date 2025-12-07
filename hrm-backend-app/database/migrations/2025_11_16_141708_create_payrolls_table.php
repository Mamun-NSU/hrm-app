<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('payrolls', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->string('employee_id', 26);
            $table->string('month_year', 7);
            $table->decimal('gross_salary', 15, 2)->default(0)->unsigned();
            $table->decimal('net_salary', 15, 2)->default(0)->unsigned();
            $table->date('generated_at');
            $table->timestamps();
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->index('employee_id');
            $table->index('month_year'); 
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payrolls');
    }
};
