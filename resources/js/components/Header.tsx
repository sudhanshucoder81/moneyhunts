import { useEffect, useState } from "react";
import "../../css/app.css";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  CreditCard,
  GraduationCap,
} from "lucide-react";
import { Link, usePage } from '@inertiajs/react';

type MenuItem = {
  name: string;
  href: string;
};

type LicenseKey = "fssai" | "pfesic" | "other";

type LicenseCategory = {
  title: string;
  items: MenuItem[];
};

type DesktopDropdownProps = {
  menuName: string;
  items: MenuItem[];
  align?: "left" | "right";
};

type MobileAccordionProps = {
  menuName: string;
  items: MenuItem[];
};

export default function Header() {
  const { auth } = usePage().props as {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
};

const user = auth.user;
console.log(usePage().props);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);

  // Desktop LICENSE submenu
  const [activeLicenseMenu, setActiveLicenseMenu] =
    useState<LicenseKey | null>(null);

  // Mobile states
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [mobileLicenseOpen, setMobileLicenseOpen] =
    useState<LicenseKey | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setMobileOpen(null);
    setMobileLicenseOpen(null);
  };

  const startupItems: MenuItem[] = [
    {
      name: "Sole Proprietorship Registration",
      href: "/ServiceUpgrade",
    },
    {
      name: "Partnership Registration",
      href: "/ServiceUpgrade",
    },
    {
      name: "Private Limited Registration",
      href: "/ServiceUpgrade",
    },
    {
      name: "LLP Registration",
      href: "/ServiceUpgrade",
    },
  ];

  const gstItems: MenuItem[] = [
    { name: "GST Registration", href: "/gst-registration" },
    { name: "GST Return Filing", href: "/gst-return-filing" },
    { name: "GST Amendment", href: "/gst-amendment" },
    { name: "GST Cancellation", href: "/gst-cancellation" },
  ];

  const trademarkItems: MenuItem[] = [
    {
      name: "Trademark Registration",
      href: "/trademark-registration",
    },
    {
      name: "Trademark Search",
      href: "/trademark-search",
    },
    {
      name: "Trademark Objection",
      href: "/trademark-objection",
    },
    {
      name: "Trademark Renewal",
      href: "/trademark-renewal",
    },
  ];

  const incomeTaxItems: MenuItem[] = [
    {
      name: "Income Tax Return Filing",
      href: "/income-tax-return-filing",
    },
    {
      name: "TDS Return Filing",
      href: "/tds-return-filing",
    },
    {
      name: "Tax Notice",
      href: "/income-tax-notice",
    },
    {
      name: "Tax Planning",
      href: "/tax-planning",
    },
  ];

  const rocItems: MenuItem[] = [
    { name: "Annual Compliance", href: "/annual-compliance" },
    { name: "Company Name Change", href: "/company-name-change" },
    { name: "Director Change", href: "/director-change" },
    { name: "Company Closure", href: "/company-closure" },
  ];

  const ngoItems: MenuItem[] = [
    { name: "Trust Registration", href: "/trust-registration" },
    { name: "Society Registration", href: "/society-registration" },
    {
      name: "Section 8 Company Registration",
      href: "/section-8-company-registration",
    },
    {
      name: "12A and 80G Registration",
      href: "/12a-80g-registration",
    },
  ];

  const licenseCategories: Record<LicenseKey, LicenseCategory> = {
    fssai: {
      title: "FSSAI",
      items: [
        {
          name: "Applicability of FSSAI",
          href: "/applicability-of-fssai",
        },
        {
          name: "FSSAI Basic Registration",
          href: "/fssai-basic-registration",
        },
        {
          name: "FSSAI State License",
          href: "/fssai-state-license",
        },
        {
          name: "FSSAI Central License",
          href: "/fssai-central-license",
        },
        {
          name: "FSSAI License Renewal",
          href: "/fssai-license-renewal",
        },
      ],
    },

    pfesic: {
      title: "PF and ESIC",
      items: [
        {
          name: "PF Registration",
          href: "/pf-registration",
        },
        {
          name: "PF Return Filing",
          href: "/pf-return-filing",
        },
        {
          name: "ESIC Registration",
          href: "/esic-registration",
        },
        {
          name: "ESIC Return Filing",
          href: "/esic-return-filing",
        },
      ],
    },

    other: {
      title: "OTHER BUSINESS LICENSE",
      items: [
        {
          name: "IEC Code Registration",
          href: "/iec-code-registration",
        },
        {
          name: "IEC Code Renewal",
          href: "/iec-code-renewal",
        },
        {
          name: "Shop and Establishment Registration",
          href: "/shop-establishment-registration",
        },
        {
          name: "Trade License",
          href: "/trade-license",
        },
        {
          name: "GeM Registration",
          href: "/gem-registration",
        },
      ],
    },
  };

  const DesktopDropdown = ({
    menuName,
    items,
    align = "left",
  }: DesktopDropdownProps) => {
    const isOpen = desktopOpen === menuName;

    return (
      <div
        className="relative"
        onMouseEnter={() => setDesktopOpen(menuName)}
        onMouseLeave={() => setDesktopOpen(null)}
      >
        <button
          type="button"
          className="flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-[#172c73] transition hover:text-[#c69000] xl:text-[15px]"
        >
          {menuName}
          <ChevronDown size={16} />
        </button>

        <div
          className={`absolute top-full z-[999] pt-4 transition-all duration-200 ${
            align === "right" ? "right-0" : "left-0"
          } ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 pointer-events-none opacity-0"
          }`}
        >
          <div className="w-[310px] overflow-hidden border border-gray-100 bg-white shadow-2xl">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block border-b border-gray-100 px-5 py-4 text-[14px] font-semibold text-[#171717] transition last:border-b-0 hover:bg-[#eef2f7] hover:text-[#293878]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const MobileAccordion = ({
    menuName,
    items,
  }: MobileAccordionProps) => {
    const isOpen = mobileOpen === menuName;

    return (
      <div className="border-b border-gray-200">
        <button
          type="button"
          onClick={() => setMobileOpen(isOpen ? null : menuName)}
          className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-[#172c73]"
        >
          <span>{menuName}</span>

          <ChevronDown
            size={19}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="bg-[#f4f6f8]">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="block border-t border-gray-200 px-9 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-[#172c73]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden bg-[#293878] text-white md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[14px] font-medium">
          <div className="flex items-center gap-5">
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

          <div className="flex items-center gap-5">
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
              <GraduationCap size={16} />
              Learning Center
            </Link>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header
        className={`sticky top-0 z-[100] bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-6">
          <div className="flex h-[76px] items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex shrink-0 flex-col leading-none"
            >
              <span className="text-[24px] font-black tracking-tight text-[#172c73] xl:text-[28px]">
                MONEYHUNT
              </span>

              <span className="mt-1 text-[8px] font-bold tracking-[1.2px] text-[#c69000] xl:text-[9px]">
                STARTUP & TAX CONSULTING SERVICES
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="ml-8 hidden items-center gap-5 lg:flex xl:gap-8">
              <DesktopDropdown menuName="STARTUP" items={startupItems} />
              <DesktopDropdown menuName="GST" items={gstItems} />
              <DesktopDropdown menuName="TRADEMARK" items={trademarkItems} />
              <DesktopDropdown menuName="INCOME TAX" items={incomeTaxItems} />

              {/* LICENSE DESKTOP MENU */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setDesktopOpen("LICENSE");
                  setActiveLicenseMenu(null);
                }}
                onMouseLeave={() => {
                  setDesktopOpen(null);
                  setActiveLicenseMenu(null);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-[#172c73] transition hover:text-[#c69000] xl:text-[15px]"
                >
                  LICENSE
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`absolute top-full right-0 z-[999] pt-4 transition-all duration-200 ${
                    desktopOpen === "LICENSE"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 pointer-events-none opacity-0"
                  }`}
                >
                  {/* MAIN LICENSE BOX */}
                  <div className="w-[350px] overflow-visible border border-gray-200 bg-white shadow-2xl">
                    {(Object.keys(licenseCategories) as LicenseKey[]).map(
                      (key) => {
                        const category = licenseCategories[key];
                        const isActive = activeLicenseMenu === key;

                        return (
                          <div
                            key={key}
                            className="relative"
                            onMouseEnter={() => setActiveLicenseMenu(key)}
                          >
                            {/* LEFT SUBMENU: SAME ROW LEVEL */}
                            {isActive && (
                              <div className="absolute right-full top-0 z-[1000] w-[350px] overflow-hidden border border-gray-200 bg-[#eef3f7] shadow-2xl">
                                {category.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block border-b border-gray-200 px-6 py-4 text-[14px] font-semibold text-[#171717] transition last:border-b-0 hover:bg-white hover:text-[#293878]"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            )}

                            {/* MAIN ITEM */}
                            <button
                              type="button"
                              className={`flex w-full items-center justify-between border-b border-gray-200 px-5 py-5 text-left text-[14px] font-bold transition last:border-b-0 ${
                                isActive
                                  ? "bg-[#293878] text-white"
                                  : "text-[#171717] hover:bg-[#eef3f7]"
                              }`}
                            >
                              <span>{category.title}</span>
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              <DesktopDropdown menuName="ROC" items={rocItems} align="right" />

              <DesktopDropdown menuName="NGO" items={ngoItems} align="right" />

              <button
                type="button"
                className="text-[#172c73] hover:text-[#c69000]"
                aria-label="Search"
              >
                <Search size={21} strokeWidth={2.5} />
              </button>
              {!user ? (
  <>
    <Link
      href="/login"
      className="premium-register rounded-lg bg-[#293878] px-5 py-2 text-sm font-semibold text-white"
    >
      Login
    </Link>

    <Link
      href="/register"
      className="premium-register rounded-lg bg-[#293878] px-5 py-2 text-sm font-semibold text-white"
    >
      Register
    </Link>
  </>
) : (
  <div className="flex items-center gap-2">
    <div className="relative">

      {/* Profile Button */}
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 transition-all duration-300 hover:border-[#293878] hover:shadow-md"
      >
        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#293878] text-sm font-bold text-white">
          {user.name.charAt(0).toUpperCase()}
        </div>

        {/* Name */}
        <div className="hidden text-left xl:block">
          <p className="text-sm font-semibold text-[#293878]">
            {user.name}
          </p>
          <p className="text-xs text-gray-500">
            My Account
          </p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            profileOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {profileOpen && (
        <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

          <div className="bg-[#293878] px-5 py-4 text-white">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#293878]">
              {user.name.charAt(0).toUpperCase()}
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
            className="block px-5 py-3 text-sm font-medium hover:bg-gray-100"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/orders"
            className="block px-5 py-3 text-sm font-medium hover:bg-gray-100"
          >
            📦 My Orders
          </Link>

          <Link
            href="/profile"
            className="block px-5 py-3 text-sm font-medium hover:bg-gray-100"
          >
            👤 My Profile
          </Link>

          <Link
            href="/documents"
            className="block px-5 py-3 text-sm font-medium hover:bg-gray-100"
          >
            📄 My Documents
          </Link>

          <div className="border-t"></div>

          <Link
            href="/logout"
            method="post"
            as="button"
            className="block w-full px-5 py-3 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            🚪 Logout
          </Link>
        </div>
      )}

    </div>
  </div>
)}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-[#172c73] hover:bg-gray-50 lg:hidden"
            >
              {mobileMenu ? <X size={24} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="absolute left-0 top-full z-[999] max-h-[calc(100vh-76px)] w-full overflow-y-auto border-t border-gray-200 bg-white shadow-2xl lg:hidden">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block border-b border-gray-200 px-5 py-4 font-bold text-[#172c73]"
            >
              HOME
            </Link>

            <MobileAccordion menuName="STARTUP" items={startupItems} />
            <MobileAccordion menuName="GST" items={gstItems} />
            <MobileAccordion menuName="TRADEMARK" items={trademarkItems} />
            <MobileAccordion menuName="INCOME TAX" items={incomeTaxItems} />

            {/* MOBILE LICENSE */}
            <div className="border-b border-gray-200">
              <button
                type="button"
                onClick={() => {
                  const isClosing = mobileOpen === "LICENSE";

                  setMobileOpen(isClosing ? null : "LICENSE");

                  if (isClosing) {
                    setMobileLicenseOpen(null);
                  }
                }}
                className="flex w-full items-center justify-between px-5 py-4 text-left font-bold text-[#172c73]"
              >
                <span>LICENSE</span>

                <ChevronDown
                  size={19}
                  className={`transition-transform duration-300 ${
                    mobileOpen === "LICENSE" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileOpen === "LICENSE" && (
                <div className="bg-[#f4f6f8]">
                  {(Object.keys(licenseCategories) as LicenseKey[]).map(
                    (key) => {
                      const category = licenseCategories[key];
                      const isActive = mobileLicenseOpen === key;

                      return (
                        <div key={key} className="border-t border-gray-200">
                          <button
                            type="button"
                            onClick={() =>
                              setMobileLicenseOpen(isActive ? null : key)
                            }
                            className={`flex w-full items-center justify-between px-7 py-4 text-left text-sm font-bold ${
                              isActive
                                ? "bg-[#293878] text-white"
                                : "bg-white text-[#172c73]"
                            }`}
                          >
                            <span>{category.title}</span>

                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                isActive ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isActive && (
                            <div className="bg-[#eef2f6]">
                              {category.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="block border-t border-gray-200 px-10 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-[#172c73]"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            <MobileAccordion menuName="ROC" items={rocItems} />
            <MobileAccordion menuName="NGO" items={ngoItems} />

            <div className="p-5">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded bg-[#293878] py-3 font-bold text-white"
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