<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServiceCategoryController extends Controller
{
    // LIST
    public function index()
    {
        $categories = ServiceCategory::with('service')
            ->latest()
            ->get();

        return Inertia::render('admin/service-categories/Index', [
            'categories' => $categories
        ]);
    }

    // CREATE PAGE
    public function create()
    {
        return Inertia::render('admin/service-categories/Create', [
            'services' => Service::where('status', 1)->get(),
            'categories' => ServiceCategory::all()
        ]);
    }

    // STORE
    public function store(Request $request)
    {
        $request->validate([
            'service_id' => 'required',
            'name' => 'required'
        ]);

        ServiceCategory::create([
    'service_id' => $request->service_id,
    'name'       => $request->name,
    'status'     => 1
]);
// ServiceCategory::create([
//             'service_id' => $request->service_id,
//             'parent_id'  => $request->parent_id,
//             'name'       => $request->name,
//             'slug'       => Str::slug($request->name),
//             'icon'       => $request->icon,
//             'status'     => 1
//         ]);
        return redirect()->route('admin.service-categories.index');
    }

    // EDIT PAGE
    public function edit($id)
    {
        return Inertia::render('admin/service-categories/Edit', [
            'category' => ServiceCategory::findOrFail($id),
            'services' => Service::where('status', 1)->get(),
            'categories' => ServiceCategory::where('id', '!=', $id)->get()
        ]);
    }

    // UPDATE
    public function update(Request $request, $id)
    {
        $category = ServiceCategory::findOrFail($id);

        $category->update([
            'service_id' => $request->service_id,
            // 'parent_id'  => $request->parent_id,
            'name'       => $request->name,
            // 'slug'       => Str::slug($request->name),
        ]);

        return redirect()->route('admin.service-categories.index');
    }

    // DELETE
public function destroy($id)
{
    $category = ServiceCategory::findOrFail($id);

    if ($category->status == 1) {
        $category->status = 0;
    } else {
        $category->status = 1;
    }

    $category->save();

    return back();
}
    public function subCategories()
{
    return $this->hasMany(ServiceSubCategory::class);
}
}