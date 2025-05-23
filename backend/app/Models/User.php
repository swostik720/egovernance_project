<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, MustVerifyEmail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function citizenship()
    {
        return $this->hasOne(Citizenship::class);
    }
    public function license()
    {
        return $this->hasOne(License::class);
    }
    public function birthcertificate()
    {
        return $this->hasOne(BirthCertificate::class);
    }
    public function pan()
    {
        return $this->hasOne(Pan::class);
    }
    public function plus2()
    {
        return $this->hasOne(Plus2::class);
    }
    public function voter()
    {
        return $this->hasOne(Voter::class);
    }

}
