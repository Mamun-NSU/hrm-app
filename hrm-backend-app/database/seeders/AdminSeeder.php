<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\User;
use App\Models\Employee;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::create([
            'id' => Str::ulid()->toBase32(),
            'name' => 'Admin',
            'description' => 'Administrator with full access',
        ]);

        $adminUser = User::create([
            'id' => Str::ulid()->toBase32(),
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345678'),
            'role_id' => $adminRole->id,
        ]);

        Employee::create([
            'id' => Str::ulid()->toBase32(),
            'user_id' => $adminUser->id,
            'employee_code' => 'EMP001',
            'employment_status' => 'Active',
            'salary_base' => 0,
        ]);
    }
}
