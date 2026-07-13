import { useMemo } from "react";
import { Link, useForm } from "@inertiajs/react";
import {
    FolderPen,
    Sparkles,
    ArrowLeft,
} from "lucide-react";

interface Service {
    id: number;
    name: string;
}

interface Category {
    id: number;
    service_id: number;
    name: string;
}

interface SubCategory {
    id: number;
    service_category_id: number;
    name: string;
    status: number;
}

interface Props {
    services: Service[];
    categories: Category[];
    subCategory: SubCategory;
}

export default function Edit({
    services,
    categories,
    subCategory,
}: Props) {

    const currentCategory = categories.find(
        (x) => x.id === subCategory.service_category_id
    );

    const { data, setData, put, processing, errors } = useForm({

        service_id: String(currentCategory?.service_id ?? ""),

        service_category_id: String(
            subCategory.service_category_id
        ),

        name: subCategory.name,

        status: subCategory.status,

    });

    const filteredCategories = useMemo(() => {

        if (!data.service_id) return [];

        return categories.filter(

            (item) =>

                Number(item.service_id) ===
                Number(data.service_id)

        );

    }, [data.service_id, categories]);

    const submit = (e: React.FormEvent) => {

        e.preventDefault();

        put(`/admin/service-sub-categories/${subCategory.id}`);

    };

    return (

        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}

            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex flex-col md:flex-row justify-between items-center gap-5">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <FolderPen size={34} />

                            Edit Service Sub Category

                        </h1>

                        <p className="text-blue-100 mt-2">

                            Update your service sub category.

                        </p>

                    </div>

                    <Link
                        href="/admin/service-sub-categories"
                        className="bg-white text-[#293878] px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
                    >

                        <ArrowLeft size={18} />

                        Back

                    </Link>

                </div>

            </div>

            <div className="max-w-4xl mx-auto mt-8">

                <div className="bg-white rounded-3xl shadow-lg">

                    <div className="border-b px-8 py-6">

                        <h2 className="text-xl font-bold text-[#293878] flex items-center gap-2">

                            <Sparkles size={22} />

                            Edit Information

                        </h2>

                    </div>

                    <form
                        onSubmit={submit}
                        className="p-8 space-y-7"
                    >

                        {/* Service */}

                        <div>

                            <label className="block mb-2 font-semibold">

                                Select Service

                            </label>

                            <select
                                value={data.service_id}
                                onChange={(e) => {

                                    setData("service_id", e.target.value);

                                    setData("service_category_id", "");

                                }}
                                className="w-full h-12 rounded-xl border px-4"
                            >

                                <option value="">

                                    Select Service

                                </option>

                                {services.map((service) => (

                                    <option
                                        key={service.id}
                                        value={service.id}
                                    >

                                        {service.name}

                                    </option>

                                ))}

                            </select>

                        </div>

                        {/* Category */}

                        <div>

                            <label className="block mb-2 font-semibold">

                                Select Category

                            </label>

                            <select
                                value={data.service_category_id}
                                onChange={(e) =>
                                    setData(
                                        "service_category_id",
                                        e.target.value
                                    )
                                }
                                className="w-full h-12 rounded-xl border px-4"
                            >

                                <option value="">

                                    Select Category

                                </option>

                                {filteredCategories.map((category) => (

                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >

                                        {category.name}

                                    </option>

                                ))}

                            </select>

                            {errors.service_category_id && (

                                <p className="text-red-500 text-sm mt-2">

                                    {errors.service_category_id}

                                </p>

                            )}

                        </div>
                                                {/* Sub Category Name */}

                        <div>

                            <label className="block mb-2 font-semibold">

                                Sub Category Name

                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Enter Sub Category Name"
                                className="w-full h-12 rounded-xl border px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none"
                            />

                            {errors.name && (

                                <p className="text-red-500 text-sm mt-2">

                                    {errors.name}

                                </p>

                            )}

                        </div>

                        {/* Status */}

                        <div>

                            <label className="block mb-2 font-semibold">

                                Status

                            </label>

                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData(
                                        "status",
                                        Number(e.target.value)
                                    )
                                }
                                className="w-full h-12 rounded-xl border px-4"
                            >

                                <option value={1}>
                                    Active
                                </option>

                                <option value={0}>
                                    Inactive
                                </option>

                            </select>

                        </div>

                        {/* Live Preview */}

                        <div className="bg-slate-50 rounded-2xl border p-6">

                            <p className="text-sm text-gray-500 mb-4">

                                Live Preview

                            </p>

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#293878] flex items-center justify-center text-white">

                                    <FolderPen size={30} />

                                </div>

                                <div>

                                    <h3 className="font-bold text-lg">

                                        {data.name || "Sub Category"}

                                    </h3>

                                    <p className="text-gray-500">

                                        {
                                            filteredCategories.find(
                                                (x) =>
                                                    Number(x.id) ===
                                                    Number(data.service_category_id)
                                            )?.name ||
                                            "No Category Selected"
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex justify-end gap-4 pt-4">

                            <Link
                                href="/admin/service-sub-categories"
                                className="border px-6 py-3 rounded-xl hover:bg-slate-100"
                            >

                                Cancel

                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-[#293878] hover:bg-[#1f2d70] text-white px-8 py-3 rounded-xl flex items-center gap-2"
                            >

                                Update Sub Category

                            </button>

                        </div>
                                            </form>

                </div>

            </div>

        </div>

    );

}