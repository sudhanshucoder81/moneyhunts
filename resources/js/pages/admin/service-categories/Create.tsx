import { useForm, Link } from "@inertiajs/react";
import {
    FolderPlus,
    Sparkles,
    Save,
    ArrowLeft,
    FolderTree,
} from "lucide-react";

export default function Create({ services, categories }: any) {
    const { data, setData, post, processing, errors } = useForm({
        service_id: "",
        parent_id: "",
        name: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post("/admin/service-categories");
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}

            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <FolderPlus size={34} />
                            Create Category
                        </h1>

                        <p className="text-blue-100 mt-2">
                            Create a new service category for your platform.
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
                            Category Information
                        </h2>

                    </div>

                    <form
                        onSubmit={submit}
                        className="p-8 space-y-7"
                    >

                        {/* Service */}

                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Select Service
                            </label>

                            <select
                                value={data.service_id}
                                onChange={(e) =>
                                    setData("service_id", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none transition"
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
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none transition"
                            >

                                <option value="">
                                    None (Main Category)
                                </option>

                                {categories.map((category: any) => (

                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
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
                                placeholder="Enter category name..."
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none transition"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Live Preview */}

                        <div className="bg-slate-50 rounded-2xl p-5 border">

                            <p className="text-sm text-gray-500 mb-4">
                                Live Preview
                            </p>

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#293878] text-white flex items-center justify-center">

                                    <FolderTree size={30} />

                                </div>

                                <div>

                                    <h3 className="font-bold text-lg">
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
                                        Parent :
                                        {" "}
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
                                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-[#293878] hover:bg-[#1f2d70] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition disabled:opacity-60"
                            >

                                <Save size={18} />

                                {processing
                                    ? "Saving..."
                                    : "Save Category"}

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}