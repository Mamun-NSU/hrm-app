<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::dropIfExists('leave_requests');

        Schema::create('leave_requests', function (Blueprint $table) {
            $table->ulid('id')->primary();

            $table->string('employee_id');
            $table->foreign('employee_id')
                  ->references('id')
                  ->on('employees')
                  ->onDelete('cascade');

            $table->string('leave_type_id');
            $table->foreign('leave_type_id')
                  ->references('id')
                  ->on('leave_types')
                  ->onDelete('cascade');

            $table->date('from_date');
            $table->date('to_date');
            $table->text('reason')->nullable();
            $table->enum('status', ['Pending', 'Approved', 'Rejected'])->default('Pending');

            $table->string('approved_by', 26)->nullable();
            $table->foreign('approved_by')
                  ->references('id')
                  ->on('users')
                  ->onDelete('set null');

            $table->timestamps();

            $table->index('employee_id');
            $table->index('leave_type_id');
            $table->index('approved_by');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('leave_requests');
    }
};
