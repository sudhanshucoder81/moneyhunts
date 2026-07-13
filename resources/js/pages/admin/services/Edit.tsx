import { Link, useForm } from "@inertiajs/react";
import {
    ArrowLeft,
    Save,
    FolderPen,
    Layers3,
    Sparkles,
} from "lucide-react";

interface Service {
    id: number;
    name: string;
    icon: string;
}

interface Props {
    service: Service;
}

export default function Edit({ service }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: service.name || "",
        icon: service.icon || "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        put(`/admin/services/${service.id}`);
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}
            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <FolderPen size={34} />
                            Edit Service
                        </h1>

                        <p className="text-blue-100 mt-2">
                            Update your existing service.
                        </p>

                    </div>

                    <Link
                        href="/admin/services"
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
                            Update Service Details
                        </h2>

                    </div>

                    <form
                        onSubmit={submit}
                        className="p-8 space-y-7"
                    >

                        {/* Name */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Service Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Icon */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Icon
                            </label>

                            <input
                                type="text"
                                value={data.icon}
                                onChange={(e) =>
                                    setData("icon", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none"
                            />

                            {errors.icon && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.icon}
                                </p>
                            )}

                        </div>

                        {/* Preview */}
                        <div className="bg-slate-50 border rounded-2xl p-5">

                            <p className="text-sm text-gray-500 mb-4">
                                Live Preview
                            </p>

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#293878] flex items-center justify-center text-white">
                                    <Layers3 size={30} />
                                </div>

                                <div>

                                    <h3 className="text-lg font-bold">
                                        {data.name || "Service Name"}
                                    </h3>

                                    <p className="text-gray-500">
                                        {data.icon || "No Icon"}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4">

                            <Link
                                href="/admin/services"
                                className="px-6 py-3 border rounded-xl hover:bg-gray-100"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-[#293878] hover:bg-[#1d2b68] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 disabled:opacity-50"
                            >
                                <Save size={18} />

                                {processing
                                    ? "Updating..."
                                    : "Update Service"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}