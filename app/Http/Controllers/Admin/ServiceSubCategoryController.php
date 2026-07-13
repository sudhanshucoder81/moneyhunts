<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\ServiceSubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ServiceSubCategoryController extends Controller
{
    /**
     * Display Listing
     */
    public function index()
    {
        $subCategories = ServiceSubCategory::with([
            'category.service'
        ])
        ->latest()
        ->get();

        return Inertia::render('admin/service-sub-categories/Index', [
            'subCategories' => $subCategories,
        ]);
    }

    /**
     * Create Page
     */
    public function create()
    {
        return Inertia::render('admin/service-sub-categories/Create', [

            // Service Dropdown
            'services' => Service::where('status', 1)
                ->orderBy('name')
                ->get(),

            // Category Dropdown
            'categories' => ServiceCategory::where('status', 1)
                ->orderBy('name')
                ->get(),
        ]);
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        $request->validate([
            'service_category_id' => 'required|exists:service_categories,id',
            'name'                => 'required|string|max:255',
            'status'              => 'required|boolean',
        ]);

        ServiceSubCategory::create([
    'service_category_id' => $request->service_category_id,
    'name' => $request->name,
    'slug' => Str::slug($request->name),
    'status' => 1,
]);

        return redirect()
            ->route('admin.service-sub-categories.index')
            ->with('success', 'Sub Category Created Successfully.');
    }

    /**
     * Edit Page
     */
    public function edit($id)
    {
        $subCategory = ServiceSubCategory::findOrFail($id);

        return Inertia::render('admin/service-sub-categories/Edit', [

            'subCategory' => $subCategory,

            'services' => Service::where('status', 1)
                ->orderBy('name')
                ->get(),

            'categories' => ServiceCategory::where('status', 1)
                ->orderBy('name')
                ->get(),
        ]);
    }

    /**
     * Update
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'service_category_id' => 'required|exists:service_categories,id',
            'name'                => 'required|string|max:255',
            'status'              => 'required|boolean',
        ]);

        $subCategory = ServiceSubCategory::findOrFail($id);

        $subCategory->update([
            'service_category_id' => $request->service_category_id,
            'name'                => $request->name,
            'slug'                => Str::slug($request->name),
            'status'              => $request->status,
        ]);

        return redirect()
            ->route('admin.service-sub-categories.index')
            ->with('success', 'Sub Category Updated Successfully.');
    }

    /**
     * Delete
     */
    public function destroy($id)
{
    $subCategory = ServiceSubCategory::findOrFail($id);

    $subCategory->update([
        'status' => 0,
    ]);

    return redirect()
        ->back()
        ->with('success', 'Sub Category Inactivated Successfully.');
}
}