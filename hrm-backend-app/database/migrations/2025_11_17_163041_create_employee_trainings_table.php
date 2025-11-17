<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up() {
        Schema::create('employee_trainings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained()->onDelete('cascade');
            $table->foreignId('training_id')->constrained()->onDelete('cascade');
            $table->enum('status', ['pending', 'completed', 'in_progress'])->default('pending');
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
     public function down() {
        Schema::dropIfExists('employee_trainings');
    }
};
