<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminLoginController extends Controller
{
    /**
     * Show login page
     */
    public function create()
    {
        // Agar admin already logged in hai to dashboard pe bhejo
        if (Auth::guard('admin')->check()) {
            return redirect()->route('admin.dashboard');
        }

        return inertia('admin/auth/login');
    }

    /**
     * Handle login request
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // ✅ ONLY admin guard use karo
        if (!Auth::guard('admin')->attempt([
            'email' => $request->email,
            'password' => $request->password,
        ], $request->boolean('remember'))) {

            return back()->withErrors([
                'email' => 'Invalid admin email or password.',
            ])->onlyInput('email');
        }

        // session security
        $request->session()->regenerate();

        return redirect()->route('admin.dashboard');
    }

    /**
     * Logout admin
     */
    public function destroy(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login');
    }
}