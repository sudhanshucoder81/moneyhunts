<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'icon',
        'description',
        'status',
    ];

    protected $casts = [
        'status' => 'string',
    ];

    // Service -> Categories
    public function categories()
    {
        return $this->hasMany(ServiceCategory::class, 'service_id');
    }
}