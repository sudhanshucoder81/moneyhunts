import { useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import gsap from "gsap";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
    ChevronDown,
    CheckCircle2,
    Trash2,
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
    status: number;
    sub_categories: SubCategory[];
}

interface Service {
    id: number;
    name: string;
    status: string;
    categories: Category[];
}

interface Props {
    services: Service[];
}

interface SelectedItem {
    service_id: number;
    category_id: number | null;
    sub_category_id: number | null;
    amount: number;
}

export default function ServiceUpgrade({
    services,
}: Props) {
const { auth, flash } = usePage<{
        flash: {
            success?: string;
            error?: string;
        };
    }>().props;

    const [selected, setSelected] =
        useState<SelectedItem[]>([]);

    const [open, setOpen] =
        useState<Record<number, boolean>>({});

    const sectionRefs = useRef<
        Record<number, HTMLDivElement | null>
    >({});

    const toggle = (id: number) => {
        setOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

  const handleSelect = (item: SelectedItem) => {
    setSelected((prev) => {
        const exists = prev.some(
            (s) =>
                s.service_id === item.service_id &&
                s.category_id === item.category_id &&
                s.sub_category_id === item.sub_category_id
        );

        if (exists) {
            return prev.filter(
                (s) =>
                    !(
                        s.service_id === item.service_id &&
                        s.category_id === item.category_id &&
                        s.sub_category_id === item.sub_category_id
                    )
            );
        }

        return [...prev, item];
    });
};
    useEffect(() => {
        Object.keys(open).forEach((id) => {

            const el =
                sectionRefs.current[
                    Number(id)
                ];

            if (!el) return;

            if (open[Number(id)]) {

                gsap.fromTo(
                    el,
                    {
                        height: 0,
                        opacity: 0,
                        y: -10,
                    },
                    {
                        height: "auto",
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power3.out",
                    }
                );

            } else {

                gsap.to(el, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.in",
                });

            }
        });
    }, [open]);

    const Item = ({
        item,
        label,
    }: {
        item: SelectedItem;
        label: string;
    }) => {

        const active = selected.some(
            (s) =>
                s.service_id ===
                    item.service_id &&
                s.category_id ===
                    item.category_id &&
                s.sub_category_id ===
                    item.sub_category_id
        );

        return (
            <div
                onClick={() =>
                    handleSelect(item)
                }
                className={`flex justify-between items-center px-3 py-2 rounded-xl border cursor-pointer transition-all
                ${
                    active
                        ? "bg-[#293878] text-white"
                        : "bg-white hover:bg-gray-50"
                }`}
            >
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={active}
                        readOnly
                    />

                    <span className="text-sm">
                        {label}
                    </span>
                </div>

                {active && (
                    <CheckCircle2
                        size={16}
                    />
                )}
            </div>
        );
    };

   const handleProceed = () => {

    console.log("AUTH:", auth);
    console.log("SELECTED:", selected);

    // Login Check First
    if (!auth?.user) {
        router.visit("/login");
        return;
    }

    // Service Check
    if (!selected.length) {
        alert("Please select at least one service.");
        return;
    }

    router.post(
        "/service-orders/store",
        {
            items: selected,
        },
        {
            onSuccess: () => {
                setSelected([]);
                setOpen({});
            },
        }
    );
};

    return (
        <>
            <Header />
 
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
{flash?.success && (
    <div className="max-w-6xl mx-auto mb-4">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
            {flash.success}
        </div>
    </div>
)}

{flash?.error && (
    <div className="max-w-6xl mx-auto mb-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
            {flash.error}
        </div>
    </div>
)}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 space-y-4">
    {services.map((service) => (
        <div
            key={service.id}
            className="rounded-2xl border bg-white/70 backdrop-blur-xl overflow-hidden"
        >
            {/* Service Heading */}
            <div
                onClick={() => toggle(service.id)}
                className="flex justify-between px-5 py-4 cursor-pointer"
            >
                <h2 className="font-semibold text-[#293878]">
                    {service.name}
                </h2>

                <ChevronDown
                    className={`transition-transform duration-300 ${
                        open[service.id]
                            ? "rotate-180"
                            : ""
                    }`}
                />
            </div>

            {/* Categories */}
            <div
                ref={(el) => {
                    sectionRefs.current[
                        service.id
                    ] = el;
                }}
                className="px-5 overflow-hidden"
                style={{
                    height: 0,
                    opacity: 0,
                }}
            >
                {service.categories.length ===
                0 ? (
                    <div className="pb-5 text-gray-500">
                        No Category Found
                    </div>
                ) : (
                    service.categories.map(
                        (category) => (
                            <div
                                key={
                                    category.id
                                }
                                className="mb-6"
                            >
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 border-b pb-2">
                                    {
                                        category.name
                                    }
                                </h3>

                                <div className="space-y-2">

                                    {category
                                        .sub_categories &&
                                    category
                                        .sub_categories
                                        .length >
                                        0 ? (

                                        category.sub_categories.map(
                                            (
                                                sub
                                            ) => (
                                                <Item
                                                    key={
                                                        sub.id
                                                    }
                                                    label={
                                                        sub.name
                                                    }
                                                    item={{
                                                        service_id:
                                                            service.id,
                                                        category_id:
                                                            category.id,
                                                        sub_category_id:
                                                            sub.id,
                                                        amount: 0,
                                                    }}
                                                />
                                            )
                                        )

                                    ) : (

                                        <Item
                                            label={
                                                category.name
                                            }
                                            item={{
                                                service_id:
                                                    service.id,
                                                category_id:
                                                    category.id,
                                                sub_category_id:
                                                    null,
                                                amount: 0,
                                            }}
                                        />

                                    )}
                                </div>
                            </div>
                        )
                    )
                )}
            </div>
        </div>
    ))}
</div>

                    {/* RIGHT CART */}
                    <div className="lg:col-span-1">

    <div className="sticky top-10 bg-white border rounded-2xl shadow-lg p-5">

        <h2 className="font-semibold mb-3 text-[#293878]">
            Selected Services ({selected.length})
        </h2>

        {selected.length === 0 ? (

            <p className="text-gray-500 text-sm">
                No services selected
            </p>

        ) : (

            <div className="space-y-2">

                {selected.map((item, index) => {

                    let serviceName = "";
                    let categoryName = "";
                    let subCategoryName = "";

                    services.forEach((service) => {

                        if (
                            service.id ===
                            item.service_id
                        ) {
                            serviceName =
                                service.name;
                        }

                        service.categories.forEach(
                            (category) => {

                                if (
                                    category.id ===
                                    item.category_id
                                ) {
                                    categoryName =
                                        category.name;
                                }

                                category.sub_categories?.forEach(
                                    (sub) => {

                                        if (
                                            sub.id ===
                                            item.sub_category_id
                                        ) {
                                            subCategoryName =
                                                sub.name;
                                        }

                                    }
                                );

                            }
                        );

                    });

                    return (

                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-3"
                        >

                            <div className="font-medium text-[#293878]">
                                {serviceName}
                            </div>

                            <div className="text-sm text-gray-600">

                                {categoryName}

                                {subCategoryName &&
                                    ` → ${subCategoryName}`}

                            </div>

                            <div className="flex justify-end mt-2">

                                <button
                                    onClick={() =>
                                        handleSelect(
                                            item
                                        )
                                    }
                                >
                                    <Trash2
                                        size={16}
                                        className="text-red-500 hover:text-red-700"
                                    />
                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        )}

        <button
            onClick={handleProceed}
            className="mt-5 w-full bg-[#293878] text-white py-3 rounded-xl hover:scale-105 transition"
        >
            Proceed
        </button>

    </div>

</div>

                </div>

            </main>
                        <Footer />
        </>
    );
}