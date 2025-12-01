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
            $table->ulid('id')->primary();

            $table->string('recruitment_id');
            $table->string('user_id')->nullable();
            $table->string('employee_id')->nullable();

            $table->string('applicant_name')->nullable();
            $table->string('applicant_email')->nullable();
            $table->string('applicant_phone')->nullable();
            $table->string('resume_link')->nullable();

            $table->enum('status', ['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'])
                  ->default('pending');

            $table->timestamp('applied_at')->nullable();
            $table->timestamps();

            $table->foreign('recruitment_id')->references('id')->on('recruitments')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('employee_id')->references('id')->on('employees')->onDelete('set null');

            $table->index('recruitment_id');
            $table->index('user_id');
            $table->index('employee_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_applications');
    }
};
