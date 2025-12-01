<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Concerns\HasUlids;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUlids;

    /**
     * ULID primary key configuration
     */
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * Mass-assignable fields
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
    ];

    /**
     * Hidden fields
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Attribute casting
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Relationships
     */

    // One-to-one with Employee
    public function employee()
    {
        return $this->hasOne(Employee::class, 'user_id', 'id');
    }

    // One-to-many with JobApplication
    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'user_id', 'id');
    }

    // Belongs to Role
    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }
}
