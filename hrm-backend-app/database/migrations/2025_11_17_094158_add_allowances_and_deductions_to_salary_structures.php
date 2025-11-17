<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('salary_structures', function (Blueprint $table) {
            // Allowances (nullable, default 0 to be safe)
            $table->decimal('house_rent', 10, 2)->default(0)->after('basic_salary');
            $table->decimal('medical_allowance', 10, 2)->default(0)->after('house_rent');
            $table->decimal('transport_allowance', 10, 2)->default(0)->after('medical_allowance');
            $table->decimal('other_allowance', 10, 2)->default(0)->after('transport_allowance');

            // Deductions
            $table->decimal('taxes_deduction', 10, 2)->default(0)->after('other_allowance');
            $table->decimal('security_deduction', 10, 2)->default(0)->after('taxes_deduction');

            // Totals (already exist, but if not, ensure they exist)
            if (!Schema::hasColumn('salary_structures', 'allowance_amount')) {
                $table->decimal('allowance_amount', 10, 2)->default(0)->after('security_deduction');
            }
            if (!Schema::hasColumn('salary_structures', 'deduction_amount')) {
                $table->decimal('deduction_amount', 10, 2)->default(0)->after('allowance_amount');
            }
        });
    }

    public function down(): void
    {
        Schema::table('salary_structures', function (Blueprint $table) {
            $table->dropColumn([
                'house_rent',
                'medical_allowance',
                'transport_allowance',
                'other_allowance',
                'taxes_deduction',
                'security_deduction',
            ]);
            // Do not drop allowance_amount/deduction_amount here if they already existed originally.
        });
    }
};
