<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('service_orders', function (Blueprint $table) {

            $table->id();

            // SO1001
            $table->string('order_no')->unique();

            // users.id
            $table->foreignId('user_id')
                  ->constrained()
                  ->cascadeOnDelete();

            // users.reg_no
            $table->string('reg_no');

            // Future payment support
            $table->decimal(
                'total_amount',
                10,
                2
            )->default(0);

            /*
            0 = Pending
            1 = Success
            2 = Cancel
            3 = Partial
            */
            $table->tinyInteger('status')
                  ->default(0);

            /*
            0 = Unpaid
            1 = Paid
            2 = Failed
            */
            $table->tinyInteger('payment_status')
                  ->default(0);

            // Admin remarks
            $table->text('remarks')
                  ->nullable();

            // Admin update date
            $table->timestamp(
                'status_updated_at'
            )->nullable();

            // Admin user id
            $table->unsignedBigInteger(
                'status_updated_by'
            )->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists(
            'service_orders'
        );
    }
};