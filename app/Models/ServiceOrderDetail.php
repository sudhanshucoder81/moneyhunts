<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ServiceOrderDetail extends Model
{
    protected $fillable = [
        'service_order_id',
        'service_id',
        'category_id',
        'sub_category_id',
        'amount',
        'status',
        'remarks'
    ];

    public function order()
    {
        return $this->belongsTo(ServiceOrder::class);
    }

    
    public function serviceOrder()
    {
        return $this->belongsTo(ServiceOrder::class);
    }


    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }


    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'category_id');
    }


    public function subCategory()
    {
        return $this->belongsTo(ServiceSubCategory::class, 'sub_category_id');
    }
}