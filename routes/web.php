<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\AdminLoginController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\ServiceCategoryController;
use App\Http\Controllers\Admin\ServiceSubCategoryController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\WebsiteController;
use App\Http\Controllers\ServiceOrderController;
use App\Http\Controllers\Admin\AdminServiceOrderController;


// ====================== WEBSITE ======================

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/about', 'About')->name('about');
Route::inertia('/ourservices', 'ourservices')->name('ourservices');
Route::inertia('/newbusiness', 'newbusiness')->name('newbusiness');
Route::inertia('/fraudalerts', 'fraudalerts')->name('fraudalerts');
Route::inertia('/payments', 'payments')->name('payments');
Route::inertia('/ContactUs', 'ContactUs')->name('ContactUs');
Route::inertia('/termsandconditions', 'termsandconditions')->name('termsandconditions');
Route::inertia('/privacypolicy', 'privacypolicy')->name('privacypolicy');
Route::inertia('/cookiespolicy', 'cookiespolicy')->name('cookiespolicy');
Route::inertia('/disclaimerpolicy', 'disclaimerpolicy')->name('disclaimerpolicy');
Route::inertia('/DataRetentionPolicy', 'DataRetentionPolicy')->name('DataRetentionPolicy');
Route::inertia('/Sole-Proprietorship-Registration', 'Sole-Proprietorship-Registration')->name('Sole-Proprietorship-Registration');
Route::inertia('/partnershipregistration', 'partnershipregistration')->name('partnershipregistration');
Route::inertia('/AllServices', 'AllServices')->name('AllServices');
Route::inertia('/Reviews', 'Reviews')->name('Reviews');
Route::inertia('/refundpolicy', 'refundpolicy')->name('refundpolicy');
Route::get('/ServiceUpgrade', [WebsiteController::class, 'serviceUpgrade'])
    ->name('ServiceUpgrade');
    Route::get(
    '/service-upgrade/{service}/{category}/{subcategory?}',
    [WebsiteController::class, 'serviceUpgrade']
)->name('service.upgrade');
Route::post('/service-orders/store', [ServiceOrderController::class, 'store'])
    ->name('service.orders.store');
//     Route::post(
//     '/service/orders',
//     [ServiceOrderController::class,'store']
// )->name('service.orders.store');
Route::middleware(['auth'])->group(function () {
Route::inertia('/payments', 'Payments/Index')->name('payments');
    Route::get('/documents', function () {
        return Inertia::render('Documents/Index');
    })->name('documents');

});
// ====================== USER ======================

Route::middleware(['auth', 'verified'])->group(function () {

    Route::inertia('/dashboard', 'dashboard')
        ->name('dashboard');

});



// ====================== ADMIN ======================

Route::redirect('/admin', '/admin/login');

Route::prefix('admin')->group(function () {

    // Guest Admin
    Route::middleware('guest:admin')->group(function () {

        Route::get('/login', [AdminLoginController::class, 'create'])
            ->name('admin.login');

        Route::post('/login', [AdminLoginController::class, 'store'])
            ->name('admin.login.store');
    });

    // Protected Admin
    Route::middleware('admin')->group(function () {

        Route::get('/dashboard', [AdminDashboardController::class, 'index'])
            ->name('admin.dashboard');

        // Service Categories
        Route::resource('service-categories', ServiceCategoryController::class)
            ->names('admin.service-categories');

        // Services
        Route::resource('services', ServiceController::class)
            ->names('admin.services');
        
            // Service Sub Categories
        Route::resource('service-sub-categories', ServiceSubCategoryController::class)
         ->names('admin.service-sub-categories');

         //Admin Order
         Route::resource('service-orders',AdminServiceOrderController::class)
         ->names('admin.service-orders');
 
    //USERS
    Route::resource('users', UserController::class)
    ->names('admin.users');

        Route::post('/logout', [AdminLoginController::class, 'destroy'])
            ->name('admin.logout');
    });

});

require __DIR__.'/settings.php';