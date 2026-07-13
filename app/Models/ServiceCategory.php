<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    protected $fillable = [
        'service_id',
        'parent_id',
        'name',
        'slug',
        'icon',
        'status'
    ];

    // 🔗 Category belongs to Service
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    // 🔗 Self parent category (optional)
    public function parent()
    {
        return $this->belongsTo(ServiceCategory::class, 'parent_id');
    }

    // 🔗 Child categories (optional)
    public function children()
    {
        return $this->hasMany(ServiceCategory::class, 'parent_id');
    }

public function subCategories()
{
    return $this->hasMany(ServiceSubCategory::class, 'service_category_id');
}
}