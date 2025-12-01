<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->ulid('id')->primary(); 
            $table->string('user_id');
            $table->string('department_id')->nullable();
            $table->string('designation_id')->nullable(); 
            $table->string('employee_code')->unique();
            $table->string('phone')->nullable();
            $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
            $table->date('date_of_birth')->nullable();
            $table->date('join_date')->nullable();
            $table->enum('employment_status', ['Active', 'Probation', 'Resigned'])->default('Active');
            $table->decimal('salary_base', 10, 2)->default(0);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('set null');
            $table->foreign('designation_id')->references('id')->on('designations')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
