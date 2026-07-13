import { Link, useForm } from "@inertiajs/react";
import {
    ArrowLeft,
    Save,
    FolderPen,
    FolderTree,
    Sparkles,
} from "lucide-react";

export default function Edit({
    category,
    services,
    categories,
}: any) {
    const { data, setData, put, processing, errors } = useForm({
        service_id: String(category.service_id ?? ""),
        parent_id: String(category.parent_id ?? ""),
        name: category.name ?? "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        put(`/admin/service-categories/${category.id}`);
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}

            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <FolderPen size={34} />
                            Edit Category
                        </h1>

                        <p className="text-blue-100 mt-2">
                            Update your existing service category.
                        </p>

                    </div>

                    <Link
                        href="/admin/service-categories"
                        className="bg-white text-[#293878] px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </Link>

                </div>

            </div>

            {/* Form */}

            <div className="max-w-3xl mx-auto mt-8">

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                    <div className="border-b px-8 py-6">

                        <h2 className="text-xl font-bold text-[#293878] flex items-center gap-2">
                            <Sparkles size={22} />
                            Update Category Details
                        </h2>

                    </div>

                    <form
                        onSubmit={submit}
                        className="p-8 space-y-7"
                    >

                        {/* Service */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Service
                            </label>

                            <select
                                value={data.service_id}
                                onChange={(e) =>
                                    setData("service_id", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none"
                            >

                                <option value="">
                                    Select Service
                                </option>

                                {services.map((service: any) => (

                                    <option
                                        key={service.id}
                                        value={service.id}
                                    >
                                        {service.name}
                                    </option>

                                ))}

                            </select>

                            {errors.service_id && (

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.service_id}
                                </p>

                            )}

                        </div>

                        {/* Parent Category */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Parent Category
                            </label>

                            <select
                                value={data.parent_id}
                                onChange={(e) =>
                                    setData("parent_id", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none"
                            >

                                <option value="">
                                    None (Main Category)
                                </option>

                                {categories
                                    .filter((c: any) => c.id !== category.id)
                                    .map((item: any) => (

                                        <option
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.name}
                                        </option>

                                    ))}

                            </select>

                            {errors.parent_id && (

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.parent_id}
                                </p>

                            )}

                        </div>
                                                {/* Category Name */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Category Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Enter category name..."
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none transition"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Live Preview */}

                        <div className="bg-slate-50 border rounded-2xl p-5">

                            <p className="text-sm text-gray-500 mb-4">
                                Live Preview
                            </p>

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#293878] flex items-center justify-center text-white">
                                    <FolderTree size={30} />
                                </div>

                                <div>

                                    <h3 className="text-lg font-bold">
                                        {data.name || "Category Name"}
                                    </h3>

                                    <p className="text-gray-500">
                                        {services.find(
                                            (s: any) =>
                                                String(s.id) ===
                                                String(data.service_id)
                                        )?.name || "No Service Selected"}
                                    </p>

                                    <p className="text-sm text-gray-400 mt-1">
                                        Parent :{" "}
                                        {data.parent_id
                                            ? categories.find(
                                                  (c: any) =>
                                                      String(c.id) ===
                                                      String(data.parent_id)
                                              )?.name
                                            : "Main Category"}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex justify-end gap-4">

                            <Link
                                href="/admin/service-categories"
                                className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-[#293878] hover:bg-[#1d2b68] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 disabled:opacity-50 transition"
                            >
                                <Save size={18} />

                                {processing
                                    ? "Updating..."
                                    : "Update Category"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}