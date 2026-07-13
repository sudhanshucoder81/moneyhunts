<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return inertia('admin/dashboard', [
            'stats' => [
                'total_users' => User::count(),
                'active_users' => User::where('email_verified_at', '!=', null)->count(),
            ],
        ]);
    }
}