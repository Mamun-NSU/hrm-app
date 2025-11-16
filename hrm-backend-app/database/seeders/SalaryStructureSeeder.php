<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SalaryStructure;

class SalaryStructureSeeder extends Seeder
{
    public function run(): void
    {
        $salaryData = [
            [
                'employee_id'     => 11,
                'basic_salary'    => 20000.00,
                'allowance_amount'=> 5000.00,
                'deduction_amount'=> 2000.00,
            ],
            [
                'employee_id'     => 13,
                'basic_salary'    => 25000.00,
                'allowance_amount'=> 4000.00,
                'deduction_amount'=> 1500.00,
            ],
            [
                'employee_id'     => 9,
                'basic_salary'    => 18000.00,
                'allowance_amount'=> 3000.00,
                'deduction_amount'=> 1000.00,
            ],
            [
                'employee_id'     => 10,
                'basic_salary'    => 22000.00,
                'allowance_amount'=> 4500.00,
                'deduction_amount'=> 2500.00,
            ],
        ];

        foreach ($salaryData as $data) {
            SalaryStructure::create($data);
        }
    }
}
