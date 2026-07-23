<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WebsiteController extends Controller
{
    public function serviceUpgrade()
    {
        $services = Service::with([
            'categories' => function ($query) {
                $query->where('status', 1)
                    ->with([
                        'subCategories' => function ($q) {
                            $q->where('status', 1);
                        }
                    ]);
            }
        ])
        ->where('status', 1)
        ->get();

        return Inertia::render('ServiceUpgrade', [
            'services' => $services,
            'auth' => [
                'user' => Auth::user(),
            ],
        ]);
    }
}