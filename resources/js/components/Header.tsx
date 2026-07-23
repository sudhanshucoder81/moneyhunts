import { useEffect, useMemo, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    Search,
    Phone,
    Mail,
    CreditCard,
    GraduationCap,
} from "lucide-react";

interface SubCategory {
    id: number;
    name: string;
    slug: string;
    status: number;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    status: number;
    sub_categories: SubCategory[];
}

interface Service {
    id: number;
    name: string;
    slug: string;
    status: number;
    categories: Category[];
}


interface PageProps extends InertiaPageProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };

    services: Service[];
}
export default function Header() {

    const { auth, services } =
        usePage<PageProps>().props;

    const user = auth.user;

    const [mobileMenu, setMobileMenu] =
        useState(false);

    const [profileOpen, setProfileOpen] =
        useState(false);

    const [desktopOpen, setDesktopOpen] =
        useState<number | null>(null);

    const [desktopCategory, setDesktopCategory] =
        useState<number | null>(null);

    const [mobileOpen, setMobileOpen] =
        useState<number | null>(null);

    const [mobileCategory, setMobileCategory] =
        useState<number | null>(null);

    const [scrolled, setScrolled] =
        useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 20);

        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    const closeMobile = () => {

        setMobileMenu(false);

        setMobileOpen(null);

        setMobileCategory(null);

    };

    const activeServices = useMemo(() => {

        return services.filter(
            (item) => Number(item.status) === 1
        );

    }, [services]);

    const DesktopDropdown = ({
        service,
    }: {
        service: Service;
    }) => {

        const opened =
            desktopOpen === service.id;

        return (

            <div
                className="relative"
                onMouseEnter={() =>
                    setDesktopOpen(service.id)
                }
                onMouseLeave={() => {

                    setDesktopOpen(null);

                    setDesktopCategory(null);

                }}
            >

                <button
                    className="flex items-center gap-1 whitespace-nowrap text-[15px] font-semibold text-[#293878] hover:text-[#c69000]"
                >

                    {service.name}

                    <ChevronDown size={16} />

                </button>

                <div
                    className={`absolute top-full pt-4 transition-all duration-300 ${
                        opened
                            ? "visible opacity-100"
                            : "invisible opacity-0 pointer-events-none"
                    }`}
                >

                    <div className="relative w-[320px] bg-white border border-gray-200 shadow-2xl">

                        {service.categories.map(
                            (category) => {

                                const active =
                                    desktopCategory ===
                                    category.id;

                                return (

                                    <div
                                        key={category.id}
                                        className="relative"
                                        onMouseEnter={() =>
                                            setDesktopCategory(
                                                category.id
                                            )
                                        }
                                    >

                                        {/* <button
                                            className={`flex justify-between items-center w-full px-5 py-4 border-b text-left transition
                                            ${
                                                active
                                                    ? "bg-[#293878] text-white"
                                                    : "hover:bg-gray-100"
                                            }`}
                                        >

                                            {category.name}

                                            {category.sub_categories
                                                .length >
                                                0 && (
                                                <ChevronRight
                                                    size={
                                                        18
                                                    }
                                                />
                                            )}

                                        </button> */}
{category.sub_categories.length > 0 ? (
    <button
        className={`flex justify-between items-center w-full px-5 py-4 border-b text-left transition
        ${active ? "bg-[#293878] text-white" : "hover:bg-gray-100"}`}
    >
        {category.name}
        <ChevronRight size={18} />
    </button>
) : (
    <Link
        href="/ServiceUpgrade"
        className="flex justify-between items-center w-full px-5 py-4 border-b hover:bg-gray-100"
    >
        {category.name}
    </Link>
)}
                                        {active &&
                                            category
                                                .sub_categories
                                                .length >
                                                0 && (

                                                <div className="absolute right-full top-0 w-[280px] bg-[#eef2f7] border border-gray-200 shadow-2xl">

                                                    {category.sub_categories.map(
                                                        (
                                                            sub
                                                        ) => (
//  <Link
//                                                                 key={
//                                                                     sub.id
//                                                                 }
//                                                                 href={`/service/${service.slug}/${category.slug}/${sub.slug}`}
//                                                                 className="block border-b px-6 py-4 text-sm hover:bg-white hover:text-[#293878]"
//                                                             >

//                                                                 {
//                                                                     sub.name
//                                                                 }

//                                                             </Link>

                                                            <Link
        key={sub.id}
        href="/ServiceUpgrade"
        onClick={closeMobile}
        className="block border-t px-12 py-3 text-sm hover:bg-gray-100"
    >
        {sub.name}
    </Link>
                                                        )
                                                    )}

                                                </div>

                                            )}

                                    </div>

                                );

                            }
                        )}

                    </div>

                </div>

            </div>

        );

    };
        const MobileDropdown = ({
        service,
    }: {
        service: Service;
    }) => {

        const opened =
            mobileOpen === service.id;

        return (

            <div className="border-b border-gray-200">

                <button
                    onClick={() =>
                        setMobileOpen(
                            opened
                                ? null
                                : service.id
                        )
                    }
                    className="flex w-full items-center justify-between px-5 py-4 font-semibold text-[#293878]"
                >

                    <span>{service.name}</span>

                    <ChevronDown
                        size={18}
                        className={`transition ${
                            opened
                                ? "rotate-180"
                                : ""
                        }`}
                    />

                </button>

                {opened && (

                    <div className="bg-gray-50">

                        {service.categories.map(
                            (
                                category
                            ) => {

                                const active =
                                    mobileCategory ===
                                    category.id;

                                return (

                                    <div
                                        key={
                                            category.id
                                        }
                                        className="border-t"
                                    >

                                        {/* <button
                                            onClick={() =>
                                                setMobileCategory(
                                                    active
                                                        ? null
                                                        : category.id
                                                )
                                            }
                                            className={`flex w-full items-center justify-between px-8 py-3 text-left font-medium ${
                                                active
                                                    ? "bg-[#293878] text-white"
                                                    : ""
                                            }`}
                                        >

                                            <span>
                                                {
                                                    category.name
                                                }
                                            </span>

                                            {category
                                                .sub_categories
                                                .length >
                                                0 && (

                                                <ChevronDown
                                                    size={
                                                        16
                                                    }
                                                    className={`transition ${
                                                        active
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />

                                            )}

                                        </button> */}
{category.sub_categories.length > 0 ? (
    <button
        onClick={() =>
            setMobileCategory(active ? null : category.id)
        }
        className={`flex w-full items-center justify-between px-8 py-3 text-left font-medium ${
            active ? "bg-[#293878] text-white" : ""
        }`}
    >
        <span>{category.name}</span>
        <ChevronDown
            size={16}
            className={active ? "rotate-180" : ""}
        />
    </button>
) : (
    <Link
        href="/ServiceUpgrade"
        onClick={closeMobile}
        className="block px-8 py-3 font-medium hover:bg-gray-100"
    >
        {category.name}
    </Link>
)}
                                        {active &&
                                            category
                                                .sub_categories
                                                .length >
                                                0 && (

                                                <div className="bg-white">

                                                    {category.sub_categories.map(
                                                        (
                                                            sub
                                                        ) => (

                                                            // <Link
                                                            //     key={
                                                            //         sub.id
                                                            //     }
                                                            //     href={`/service/${service.slug}/${category.slug}/${sub.slug}`}
                                                            //     onClick={
                                                            //         closeMobile
                                                            //     }
                                                            //     className="block border-t px-12 py-3 text-sm hover:bg-gray-100"
                                                            // >

                                                            //     {
                                                            //         sub.name
                                                            //     }

                                                            // </Link>
  <Link
        key={sub.id}
        href="/ServiceUpgrade"
        onClick={closeMobile}
        className="block border-t px-12 py-3 text-sm hover:bg-gray-100"
    >
        {sub.name}
    </Link>
                                                        )
                                                    )}

                                                </div>

                                            )}

                                    </div>

                                );

                            }
                        )}

                    </div>

                )}

            </div>

        );

    };

    return (

        <>

            {/* Top Bar */}

            <div className="hidden bg-[#293878] text-white md:block">

                <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-sm">

                    <div className="flex items-center gap-6">

                        <a
                            href="tel:+918127409027"
                            className="flex items-center gap-2 hover:text-yellow-300"
                        >

                            <Phone size={15} />

                            +91 8127409027

                        </a>

                        <a
                            href="mailto:help@moneyhunt.in"
                            className="flex items-center gap-2 hover:text-yellow-300"
                        >

                            <Mail size={15} />

                            help@moneyhunt.in

                        </a>

                    </div>

                    <div className="flex items-center gap-6">

                        <Link
                            href="/pay-now"
                            className="flex items-center gap-2 hover:text-yellow-300"
                        >

                            <CreditCard size={15} />

                            Pay Now

                        </Link>

                        <Link
                            href="/learning-center"
                            className="flex items-center gap-2 hover:text-yellow-300"
                        >

                            <GraduationCap size={15} />

                            Learning Center

                        </Link>

                    </div>

                </div>

            </div>

            <header
                className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
                    scrolled
                        ? "shadow-lg"
                        : "shadow"
                }`}
            >

                <div className="mx-auto max-w-7xl px-5">

                    <div className="flex h-20 items-center justify-between">

                        <Link
                            href="/"
                            className="leading-none"
                        >

                            <div className="text-3xl font-black text-[#293878]">
                                MONEYHUNT
                            </div>

                            <div className="text-[9px] font-bold tracking-[2px] text-[#c69000]">
                                STARTUP & TAX CONSULTING SERVICES
                            </div>

                        </Link>

                        <nav className="hidden items-center gap-7 lg:flex">

                            {activeServices.map(
                                (
                                    service
                                ) => (

                                    <DesktopDropdown
                                        key={
                                            service.id
                                        }
                                        service={
                                            service
                                        }
                                    />

                                )
                            )}
                                                        <button
                                type="button"
                                className="text-[#293878] transition hover:text-[#c69000]"
                            >
                                <Search size={21} />
                            </button>

                            {!user ? (
                                <>
                                    <Link
                                        href="/login"
                                        className="rounded-lg bg-[#293878] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f2f63]"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="rounded-lg bg-[#c69000] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a97d00]"
                                    >
                                        Register
                                    </Link>
                                </>
                            ) : (
                                <div className="relative">

                                    <button
                                        onClick={() =>
                                            setProfileOpen(!profileOpen)
                                        }
                                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 transition hover:border-[#293878] hover:shadow-md"
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#293878] font-bold text-white">
                                            {user.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div className="hidden text-left xl:block">
                                            <div className="text-sm font-semibold text-[#293878]">
                                                {user.name}
                                            </div>

                                            <div className="text-xs text-gray-500">
                                                My Account
                                            </div>
                                        </div>

                                        <ChevronDown
                                            size={18}
                                            className={`transition ${
                                                profileOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {profileOpen && (

                                        <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

                                            <div className="bg-[#293878] px-5 py-5 text-white">

                                                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#293878]">

                                                    {user.name
                                                        .charAt(0)
                                                        .toUpperCase()}

                                                </div>

                                                <h3 className="font-semibold">
                                                    {user.name}
                                                </h3>

                                                <p className="text-sm text-blue-100">
                                                    {user.email}
                                                </p>

                                            </div>

                                            <Link
                                                href="/dashboard"
                                                className="block px-5 py-3 hover:bg-gray-100"
                                            >
                                                📊 Dashboard
                                            </Link>

                                            <Link
                                                href="/orders"
                                                className="block px-5 py-3 hover:bg-gray-100"
                                            >
                                                📦 My Orders
                                            </Link>

                                            <Link
                                                href="/documents"
                                                className="block px-5 py-3 hover:bg-gray-100"
                                            >
                                                📄 My Documents
                                            </Link>

                                            <Link
                                                href="/profile"
                                                className="block px-5 py-3 hover:bg-gray-100"
                                            >
                                                👤 Profile
                                            </Link>

                                            <div className="border-t" />

                                            <Link
                                                href="/logout"
                                                method="post"
                                                as="button"
                                                className="block w-full px-5 py-3 text-left font-semibold text-red-600 hover:bg-red-50"
                                            >
                                                🚪 Logout
                                            </Link>

                                        </div>

                                    )}

                                </div>
                            )}

                        </nav>
                                                {/* Mobile Menu Button */}

                        <button
                            type="button"
                            onClick={() =>
                                setMobileMenu(!mobileMenu)
                            }
                            className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-[#293878] hover:bg-gray-50 lg:hidden"
                        >
                            {mobileMenu ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>

                    </div>

                </div>

                {/* ================= MOBILE MENU ================= */}

                {mobileMenu && (

                    <div className="absolute left-0 top-full z-[999] max-h-[calc(100vh-80px)] w-full overflow-y-auto border-t border-gray-200 bg-white shadow-2xl lg:hidden">

                        <Link
                            href="/"
                            onClick={closeMobile}
                            className="block border-b border-gray-200 px-5 py-4 font-bold text-[#293878]"
                        >
                            HOME
                        </Link>

                        {activeServices.map((service) => (

                            <MobileDropdown
                                key={service.id}
                                service={service}
                            />

                        ))}

                        <div className="border-t p-5">

                            {!user ? (

                                <div className="space-y-3">

                                    <Link
                                        href="/login"
                                        onClick={closeMobile}
                                        className="block rounded-lg bg-[#293878] py-3 text-center font-semibold text-white"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        onClick={closeMobile}
                                        className="block rounded-lg bg-[#c69000] py-3 text-center font-semibold text-white"
                                    >
                                        Register
                                    </Link>

                                </div>

                            ) : (

                                <div className="space-y-2">

                                    <div className="mb-4 flex items-center gap-3">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#293878] text-lg font-bold text-white">

                                            {user.name.charAt(0).toUpperCase()}

                                        </div>

                                        <div>

                                            <div className="font-semibold text-[#293878]">
                                                {user.name}
                                            </div>

                                            <div className="text-sm text-gray-500">
                                                {user.email}
                                            </div>

                                        </div>

                                    </div>

                                    <Link
                                        href="/dashboard"
                                        onClick={closeMobile}
                                        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                                    >
                                        📊 Dashboard
                                    </Link>

                                    <Link
                                        href="/orders"
                                        onClick={closeMobile}
                                        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                                    >
                                        📦 My Orders
                                    </Link>

                                    <Link
                                        href="/documents"
                                        onClick={closeMobile}
                                        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                                    >
                                        📄 My Documents
                                    </Link>

                                    <Link
                                        href="/profile"
                                        onClick={closeMobile}
                                        className="block rounded-lg px-4 py-3 hover:bg-gray-100"
                                    >
                                        👤 My Profile
                                    </Link>

                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="block w-full rounded-lg px-4 py-3 text-left text-red-600 hover:bg-red-50"
                                    >
                                        🚪 Logout
                                    </Link>

                                </div>

                            )}

                            <button
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#293878] py-3 font-semibold text-white hover:bg-[#1f2f63]"
                            >
                                <Search size={18} />
                                Search Services
                            </button>

                        </div>

                    </div>

                )}

            </header>

        </>

    );

}
