import { createInertiaApp } from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';
import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';
import AdminLayout from "@/layouts/admin-layout";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    //     switch (true) {
    //         case name === 'welcome':
    //             return null;
    //         case name.startsWith('auth/'):
    //             return AuthLayout;
    //         case name.startsWith('settings/'):
    //             return [AppLayout, SettingsLayout];
    //         default:
    //             return AppLayout;
    //     }
    // },
layout: (name) => {
    switch (true) {
        case name === 'welcome':
        case name === 'About':
        case name === 'Contact':
        case name === 'ourservices':
        case name === 'newbusiness':
        case name === 'fraudalerts':
        case name === 'payments':
        case name === 'ContactUs':
        case name === 'termsandconditions':
        case name === 'privacypolicy':
        case name === 'cookiespolicy':
        case name === 'disclaimerpolicy':
        case name === 'DataRetentionPolicy':
        case name === 'refundpolicy':
        case name === 'Sole-Proprietorship-Registration':
        case name === 'partnershipregistration':
        case name === 'ServiceUpgrade':
            return null;

        // User Auth
        case name.startsWith('auth/'):
            return AuthLayout;

        // ✅ Admin Auth (Login) - No Sidebar
        case name.startsWith('admin/auth/'):
            return AuthLayout;

        // Settings
        case name.startsWith('settings/'):
            return [AppLayout, SettingsLayout];

        // ✅ Admin Panel
        case name.startsWith('admin/'):
            return AdminLayout;

        // User Panel
        default:
            return AppLayout;
    }
},
strictMode: true,
    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
