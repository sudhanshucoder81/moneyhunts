import { useForm, Link } from "@inertiajs/react";
import { useMemo } from "react";
import {
    FolderPlus,
    Sparkles,
    Save,
    ArrowLeft,
    FolderTree,
} from "lucide-react";

interface Props {
    services: any[];
    categories: any[];
}

export default function Create({ services, categories }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        service_id: "",
        service_category_id: "",
        name: "",
        status: 1,
    });

    const filteredCategories = useMemo(() => {
        if (!data.service_id) return [];

        return categories.filter(
            (item: any) =>
                String(item.service_id) === String(data.service_id)
        );
    }, [data.service_id, categories]);

    const submit = (e: React.FormEvent) => {
    e.preventDefault();

    post("/admin/service-sub-categories");
};

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}

            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <FolderPlus size={34} />
                            Create Sub Category
                        </h1>

                        <p className="text-blue-100 mt-2">
                            Create New Service Sub Category
                        </p>

                    </div>

                   <Link
    href="/admin/service-sub-categories"
    className="bg-white text-[#293878] px-5 py-3 rounded-xl flex items-center gap-2"
>
    <ArrowLeft size={18} />
    Back
</Link>

                </div>

            </div>

            <div className="max-w-3xl mx-auto mt-8">

                <div className="bg-white rounded-3xl shadow-lg">

                    <div className="border-b p-6">

                        <h2 className="text-xl font-bold text-[#293878] flex items-center gap-2">

                            <Sparkles size={22} />

                            Sub Category Information

                        </h2>

                    </div>

                    <form
                        onSubmit={submit}
                        className="p-8 space-y-6"
                    >

                        {/* Service */}

                        <div>

                            <label className="font-semibold mb-2 block">
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

                                {services.map((service: any) => (

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

                            <label className="font-semibold mb-2 block">
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

                                {filteredCategories.map((category: any) => (

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

                        {/* Name */}

                        <div>

                            <label className="font-semibold mb-2 block">
                                Sub Category Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Enter Sub Category Name"
                                className="w-full h-12 rounded-xl border px-4"
                            />

                            {errors.name && (

                                <p className="text-red-500 text-sm mt-2">
                                    {errors.name}
                                </p>

                            )}

                        </div>

                        {/* Status */}

                        <div>

                            <label className="font-semibold mb-2 block">
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

                        {/* Preview */}

                        <div className="bg-slate-50 border rounded-2xl p-5">

                            <p className="text-gray-500 text-sm mb-3">
                                Live Preview
                            </p>

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#293878] text-white flex items-center justify-center">

                                    <FolderTree size={30} />

                                </div>

                                <div>

                                    <h3 className="font-bold text-lg">

                                        {data.name || "Sub Category"}

                                    </h3>

                                    <p className="text-gray-500">

                                        {
                                            filteredCategories.find(
                                                (x: any) =>
                                                    String(x.id) ===
                                                    String(data.service_category_id)
                                            )?.name
                                        }

                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex justify-end gap-4">

                           <Link
    href="/admin/service-sub-categories"
    className="border px-6 py-3 rounded-xl"
>
    Cancel
</Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-[#293878] text-white px-8 py-3 rounded-xl flex items-center gap-2"
                            >

                                <Save size={18} />

                                {processing ? "Saving..." : "Save"}

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}