<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up()
{
    Schema::create('job_applications', function (Blueprint $table) {
        $table->id();
        $table->foreignId('recruitment_id')->constrained()->onDelete('cascade');

        // Public applicant fields
        $table->string('applicant_name')->nullable();
        $table->string('applicant_email')->nullable();
        $table->string('applicant_phone')->nullable();
        $table->string('resume_link')->nullable();

        // Employee applicant fields
        $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
        $table->foreignId('employee_id')->nullable()->constrained()->onDelete('set null');

        $table->enum('status', ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'])
              ->default('pending');

        $table->timestamp('applied_at')->nullable();
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
