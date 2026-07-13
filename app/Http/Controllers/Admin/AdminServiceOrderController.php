<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ServiceOrder;
use Inertia\Inertia;

class AdminServiceOrderController extends Controller
{
     public function index()
{
    $orders = ServiceOrder::with([
        'user',
        'details',
    ])
    ->latest()
    ->paginate(20);

    return Inertia::render(
        'admin/ServiceOrders/Index',
        [
            'orders' => $orders,
        ]
    );
}
public function show($id)
{
    $order = ServiceOrder::with([
        'user',
        'details.service',
        'details.category',
        'details.subCategory'
    ])->findOrFail($id);


    return Inertia::render('admin/ServiceOrders/Show', [
        'order' => $order
    ]);
}
}