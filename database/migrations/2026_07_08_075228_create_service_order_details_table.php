<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create(
            'service_order_details',
            function (Blueprint $table) {

                $table->id();

                // Parent order
                $table->foreignId(
                    'service_order_id'
                )
                ->constrained()
                ->cascadeOnDelete();

                // services.id
                $table->unsignedBigInteger(
                    'service_id'
                );

                // categories.id
                $table->unsignedBigInteger(
                    'category_id'
                )->nullable();

                // sub_categories.id
                $table->unsignedBigInteger(
                    'sub_category_id'
                )->nullable();

                // Future pricing
                $table->decimal(
                    'amount',
                    10,
                    2
                )->default(0);

                /*
                0 = Pending
                1 = Success
                2 = Cancel
                */
                $table->tinyInteger(
                    'status'
                )->default(0);

                // Admin remarks
                $table->text(
                    'remarks'
                )->nullable();

                // Status update date
                $table->timestamp(
                    'status_updated_at'
                )->nullable();

                // Admin id
                $table->unsignedBigInteger(
                    'status_updated_by'
                )->nullable();

                $table->timestamps();
            }
        );
    }

    public function down(): void
    {
        Schema::dropIfExists(
            'service_order_details'
        );
    }
};