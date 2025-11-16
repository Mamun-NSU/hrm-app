<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\LeaveType;

class LeaveTypeSeeder extends Seeder
{
    public function run()
    {
        LeaveType::create(['name'=>'Casual','description'=>'Casual leave','days_per_year'=>10]);
        LeaveType::create(['name'=>'Medical','description'=>'Medical leave','days_per_year'=>15]);
        LeaveType::create(['name'=>'Annual','description'=>'Annual leave','days_per_year'=>20]);
    }
}

