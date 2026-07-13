import { useForm, Link } from "@inertiajs/react";
import {
    FolderPlus,
    Layers3,
    Sparkles,
    Save,
    ArrowLeft,
} from "lucide-react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        icon: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post("/admin/services", {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}
            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <FolderPlus size={34} />
                            Create Service
                        </h1>

                        <p className="text-blue-100 mt-2">
                            Add a new service to your platform.
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

            {/* Form Card */}
            <div className="max-w-3xl mx-auto mt-8">

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                    <div className="border-b px-8 py-6">

                        <h2 className="text-xl font-bold text-[#293878] flex items-center gap-2">
                            <Sparkles size={22} />
                            Service Information
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
                                placeholder="Enter service name..."
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

                        {/* Icon */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Icon
                            </label>

                            <input
                                type="text"
                                placeholder="Example : Settings, Shield, CreditCard"
                                value={data.icon}
                                onChange={(e) =>
                                    setData("icon", e.target.value)
                                }
                                className="w-full h-12 rounded-xl border border-gray-300 px-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none transition"
                            />

                            {errors.icon && (
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.icon}
                                </p>
                            )}

                        </div>

                        {/* Preview */}
                        <div className="bg-slate-50 rounded-2xl p-5 border">

                            <p className="text-sm text-gray-500 mb-4">
                                Live Preview
                            </p>

                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 rounded-2xl bg-[#293878] text-white flex items-center justify-center">

                                    <Layers3 size={30} />

                                </div>

                                <div>

                                    <h3 className="font-bold text-lg">
                                        {data.name || "Service Name"}
                                    </h3>

                                    <p className="text-gray-500">
                                        {data.icon || "No Icon Selected"}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4">

                            <Link
                                href="/admin/services"
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
                                    : "Save Service"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}