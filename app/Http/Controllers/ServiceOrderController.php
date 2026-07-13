<?php

namespace App\Http\Controllers;

use App\Models\ServiceOrder;
use App\Models\ServiceOrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ServiceOrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'items' => ['required', 'array', 'min:1'],
        ]);

        DB::beginTransaction();

        try {

            $totalAmount = collect($request->items)
                ->sum(fn($item) => $item['amount'] ?? 0);

            // Temporary order create
            $order = ServiceOrder::create([
                'order_no' => 'TMP',
                'user_id' => auth()->id(),
                'reg_no' => auth()->user()->reg_no ?? '',
                'total_amount' => $totalAmount,
                'status' => 0,
                'payment_status' => 0,
            ]);

            // Final Professional Order No
            $order->update([
                'order_no' => 'MH-' . str_pad($order->id, 6, '0', STR_PAD_LEFT),
            ]);

            foreach ($request->items as $item) {
                ServiceOrderDetail::create([
                    'service_order_id' => $order->id,
                    'service_id' => $item['service_id'],
                    'category_id' => $item['category_id'],
                    'sub_category_id' => $item['sub_category_id'],
                    'amount' => $item['amount'] ?? 0,
                    'status' => 0,
                ]);
            }

            DB::commit();

            // India Time
            $indiaTime = Carbon::now('Asia/Kolkata')->format('d-m-Y h:i A');

            return redirect()
                ->route('ServiceUpgrade')
                ->with('success', "Order Successfully Created! Order No: {$order->order_no} | Date & Time: {$indiaTime}");

        } catch (\Exception $e) {

            DB::rollBack();

            return back()->withErrors([
                'error' => $e->getMessage(),
            ]);
        }
    }
}