// import { Breadcrumbs } from '@/components/breadcrumbs';
// import { SidebarTrigger } from '@/components/ui/sidebar';
// import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

// export function AppSidebarHeader({
//     breadcrumbs = [],
// }: {
//     breadcrumbs?: BreadcrumbItemType[];
// }) {
//     return (
//         <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
//             <div className="flex items-center gap-2">
//                 <SidebarTrigger className="-ml-1" />
//                 <Breadcrumbs breadcrumbs={breadcrumbs} />
//             </div>
//         </header>
//     );
// }
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { BreadcrumbItem as BreadcrumbItemType } from "@/types";
import { Link } from "@inertiajs/react";
import {
    Search,
    UserCircle2,
    CalendarDays,
    User,
    Settings,
    LogOut,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
            {/* Left */}
            <div className="flex items-center gap-3">
                <SidebarTrigger className="rounded-lg p-2 hover:bg-gray-100" />

                {/* <div className="h-6 w-px bg-gray-300" />

                <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="hidden md:flex items-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                    <Search className="mr-2 h-4 w-4 text-gray-500" />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-60 bg-transparent text-sm outline-none"
                    />
                </div>

                {/* Date */}
                <div className="hidden lg:flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                    <CalendarDays className="h-4 w-4 text-blue-600" />

                    <span className="text-sm font-medium text-gray-700">
                        {new Date().toLocaleDateString("en-IN", {
                            weekday: "short",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}
                    </span>
                </div>

                {/* User Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 transition hover:bg-gray-50">
                            <UserCircle2 className="h-9 w-9 text-blue-600" />

                            <div className="hidden text-left md:block">
                                <p className="text-sm font-semibold text-gray-800">
                                    Sahu
                                </p>

                                <p className="text-xs text-gray-500">
                                    Welcome Back
                                </p>
                            </div>
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-52">

                        <DropdownMenuItem asChild>
                            <Link
                                href="/settings"
                                className="flex items-center gap-2"
                            >
                                <User className="h-4 w-4" />
                                My Profile
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link
                                href="/settings"
                                className="flex items-center gap-2"
                            >
                                <Settings className="h-4 w-4" />
                                Settings
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="flex w-full items-center gap-2 text-red-600"
                            >
                                <LogOut className="h-4 w-4" />
                                Logout
                            </Link>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </header>
    );
}