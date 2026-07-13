<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class ServiceOrder extends Model
{
    protected $fillable = [
        'order_no',
        'user_id',
        'reg_no',
        'total_amount',
        'status',
        'payment_status',
        'remarks',
    ];
public function user()
{
    return $this->belongsTo(User::class);
}
    public function details()
    {
        return $this->hasMany(ServiceOrderDetail::class);
    }
}