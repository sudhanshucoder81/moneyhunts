import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {

    Briefcase,
    FolderTree,
    ListTree,
    FileText,
    IndianRupee,
    Users,
    ClipboardList,
    CreditCard,
    BarChart3,
    Settings,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: "Dashboard",
        href: dashboard(),
        icon: LayoutGrid,
    },

    {
        title: "Services",
        href: "/admin/services",
        icon: Briefcase,
    },

    {
        title: "Categories",
        href: "/admin/categories",
        icon: FolderTree,
    },

    {
        title: "Sub Categories",
        href: "/admin/sub-categories",
        icon: ListTree,
    },

    {
        title: "Documents",
        href: "/admin/documents",
        icon: FileText,
    },

    {
        title: "Pricing",
        href: "/admin/pricing",
        icon: IndianRupee,
    },

    {
        title: "Users",
        href: "/admin/users",
        icon: Users,
    },

    {
        title: "Service Requests",
        href: "/admin/requests",
        icon: ClipboardList,
    },

    {
        title: "Payments",
        href: "/admin/payments",
        icon: CreditCard,
    },

    {
        title: "Reports",
        href: "/admin/reports",
        icon: BarChart3,
    },

    {
        title: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
