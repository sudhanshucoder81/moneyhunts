<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * User List
     */
    public function index()
    {
        $users = User::latest()->get();

        return Inertia::render('admin/users/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Create Page
     */
    public function create()
    {
        return Inertia::render('admin/users/Create');
    }

    /**
     * Store User
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'nullable|max:15',
            'password' => 'required|min:6|confirmed',
             'status' => 1,
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'status' => 1,
        ]);

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User Created Successfully.');
    }

    /**
     * Edit Page
     */
    public function edit($id)
    {
        return Inertia::render('admin/users/Edit', [
            'user' => User::findOrFail($id),
        ]);
    }

    /**
     * Update User
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $id,
            'phone' => 'nullable|max:15',
            'status' => 'required|boolean',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'status' => $request->status,
        ]);

        if ($request->filled('password')) {
            $user->update([
                'password' => Hash::make($request->password),
            ]);
        }

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User Updated Successfully.');
    }

    /**
     * Activate / Deactivate User
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->update([
            'status' => $user->status == 1 ? 0 : 1,
        ]);

        return redirect()
            ->back()
            ->with(
                'success',
                $user->status == 1
                    ? 'User Activated Successfully.'
                    : 'User Deactivated Successfully.'
            );
    }
}