<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('recruitments', function (Blueprint $table) {
            $table->ulid('id')->primary(); 
            $table->string('position');
            $table->string('department_id');
            $table->enum('status', ['open', 'closed'])->default('open');
            $table->timestamps();

            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade');

            $table->index('department_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('recruitments');
    }
};
