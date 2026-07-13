import { useEffect, useRef, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    Grid,
    Folder,
    FileText,
    IndianRupee,
    Boxes,
    CreditCard,
    Menu,
    ChevronUp,
    X,ShoppingBag,
} from "lucide-react";

interface Props {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

interface PageProps {
    auth: {
        admin?: {
            id: number;
            name: string;
            email: string;
        };
    };
}

export default function AdminSidebar({
    sidebarOpen,
    setSidebarOpen,
}: Props) {

    const { url, props } = usePage();

const admin = (props as any).auth?.admin;

    const [open, setOpen] = useState(true);
    const [userOpen, setUserOpen] = useState(false);

    const userRef = useRef<HTMLDivElement>(null);

    const menu = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Services", href: "/admin/services", icon: Boxes },
        { name: "Categories", href: "/admin/service-categories", icon: Grid },
        { name: "Sub Categories", href: "/admin/service-sub-categories", icon: Folder },
        { name: "My Orders", href: "/admin/service-orders", icon: ShoppingBag },
        { name: "Documents", href: "/admin/documents", icon: FileText },
        { name: "Pricing", href: "/admin/pricing", icon: IndianRupee },
        { name: "Users", href: "/admin/users", icon: Users },
        { name: "Service Requests", href: "/admin/requests", icon: FileText },
        { name: "Payments", href: "/admin/payments", icon: CreditCard },
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userRef.current &&
                !userRef.current.contains(event.target as Node)
            ) {
                setUserOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    return (
        <>
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}

            <div
                className={`
                    fixed lg:relative
                    z-50
                    h-screen
                    bg-white
                    border-r
                    transition-all
                    duration-300
                    ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                    ${open ? "w-64" : "w-20"}
                `}
            >

                <div className="h-16 flex items-center justify-between px-4 border-b">

                    {open && (
                        <h1 className="text-xl font-bold text-[#293878]">
                            MoneyHunt
                        </h1>
                    )}

                    <div className="flex items-center gap-2">

                        <button
                            onClick={() => setOpen(!open)}
                            className="hidden lg:flex p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <Menu size={20} />
                        </button>

                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X size={22} />
                        </button>

                    </div>

                </div>

                <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">

                    {menu.map((item, i) => {

                        const Icon = item.icon;
                        const active = url === item.href;

                        return (

                            <Link
                                key={i}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                                    active
                                        ? "bg-[#293878] text-white"
                                        : "text-gray-600 hover:bg-gray-100"
                                }`}
                            >

                                <Icon size={18} />

                                {open && (
                                    <span>{item.name}</span>
                                )}

                            </Link>

                        );

                    })}

                </div>
                                {/* USER SECTION */}
                <div className="border-t p-3 relative" ref={userRef}>

                    <button
                        onClick={() => setUserOpen(!userOpen)}
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                    >

                        <div className="flex items-center gap-3">

                            <div className="w-9 h-9 rounded-full bg-[#293878] text-white flex items-center justify-center font-bold uppercase">
                                {admin?.name?.charAt(0) || "A"}
                            </div>

                            {open && (
                                <div className="text-left">

                                    <p className="text-sm font-semibold">
                                        {admin?.name ?? "Admin"}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        {admin?.email ?? ""}
                                    </p>

                                </div>
                            )}

                        </div>

                        {open && (
                            <ChevronUp
                                size={18}
                                className={`transition-transform ${
                                    userOpen ? "rotate-180" : ""
                                }`}
                            />
                        )}

                    </button>

                    {userOpen && (

                        <div className="absolute left-3 right-3 bottom-16 bg-white rounded-xl border shadow-lg overflow-hidden">

                            <Link
                                href="/admin/settings"
                                onClick={() => {
                                    setSidebarOpen(false);
                                    setUserOpen(false);
                                }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                            >

                                <div className="w-7 h-7 rounded-full bg-[#293878] text-white flex items-center justify-center text-xs font-bold uppercase">
                                    {admin?.name?.charAt(0) || "A"}
                                </div>

                                <span className="text-sm font-medium">
                                    {admin?.name ?? "Admin"}
                                </span>

                            </Link>

                            <Link
                                href="/admin/settings"
                                onClick={() => {
                                    setSidebarOpen(false);
                                    setUserOpen(false);
                                }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                            >

                                <Settings size={17} />

                                <span className="text-sm">
                                    Settings
                                </span>

                            </Link>

                            <Link
                                href="/admin/logout"
                                method="post"
                                as="button"
                                className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50"
                            >

                                <LogOut size={17} />

                                <span className="text-sm">
                                    Logout
                                </span>

                            </Link>

                        </div>

                    )}

                </div>

            </div>

        </>
    );

}