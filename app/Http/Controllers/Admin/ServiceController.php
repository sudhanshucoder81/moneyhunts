<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // List
    public function index()
    {
        $services = Service::latest()->get();

        return Inertia::render('admin/services/Index', [
            'services' => $services,
        ]);
    }

    // Create Page
    public function create()
    {
        return Inertia::render('admin/services/Create');
    }

    // Store
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:services,name',
            'icon' => 'nullable|string',
        ]);

        Service::create([
            'name'   => $request->name,
            'slug'   => Str::slug($request->name),
            'icon'   => $request->icon,
            'status' => 1,
        ]);

       return redirect()
    ->route('admin.services.index')
    ->with('success', 'Service Added Successfully');
    }
    // Edit  
    public function edit(Service $service)
   {
    return Inertia::render('admin/services/Edit', [
        'service' => $service,
    ]);
    }

    // Update
    public function update(Request $request, Service $service)
   {
    $request->validate([
    'name' => 'required|unique:services,name,' . $service->id,
    'icon' => 'nullable|string|max:255',
]);

$service->update([
    'name' => $request->name,
    'slug' => Str::slug($request->name),
    'icon' => $request->icon,
]);

    return redirect()
        ->route('admin.services.index')
        ->with('success', 'Service updated successfully.');
}
//Delete
public function destroy(Service $service)
{
    $service->update([
        'status' => $service->status == 1 ? 0 : 1,
    ]);

    return redirect()->back()->with(
        'success',
        $service->status == 0
            ? 'Service Activated Successfully.'
            : 'Service Deactivated Successfully.'
    );
}
}