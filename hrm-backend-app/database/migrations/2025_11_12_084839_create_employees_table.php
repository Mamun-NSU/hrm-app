<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');

    $table->foreignId('department_id')
          ->nullable()
          ->constrained()
          ->onDelete('set null');

    $table->foreignId('designation_id')
          ->nullable()
          ->constrained()
          ->onDelete('set null');

    $table->string('employee_code')->unique();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('phone')->nullable();
    $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
    $table->date('date_of_birth')->nullable();
    $table->date('join_date')->nullable();
    $table->enum('employment_status', ['Active', 'Probation', 'Resigned'])->default('Active');
    $table->decimal('salary_base', 10, 2)->default(0);
    $table->timestamps();
});

    }

    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};

