import { useMemo, useState } from "react";
import { Link, router } from "@inertiajs/react";
import {  RotateCcw } from "lucide-react";
import {
    Search,
    Plus,
    Layers3,
    CheckCircle2,
    XCircle,
    Pencil,
    Trash2,
} from "lucide-react";

interface Service {
    id: number;
    name: string;
    status: number;
}

interface Props {
    services: Service[];
}

export default function Index({ services }: Props) {
    const [search, setSearch] = useState("");

    const filteredServices = useMemo(() => {
        return services.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [services, search]);

    const totalServices = filteredServices.length;

    const activeServices = filteredServices.filter(
        (item) => Number(item.status) === 1
    ).length;

    const inactiveServices = filteredServices.filter(
        (item) => Number(item.status) === 0
    ).length;

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}
            <div className="rounded-3xl bg-[#293878] p-8 shadow-xl">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    <div>
                        <h1 className="text-3xl font-bold text-white">
                            Service Management
                        </h1>

                        <p className="text-blue-100 mt-2">
                            Manage your services quickly and efficiently.
                        </p>
                    </div>

                    <Link
                        href="/admin/services/create"
                        className="inline-flex items-center gap-2 bg-white text-[#293878] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                    >
                        <Plus size={20} />
                        Add Service
                    </Link>

                </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* Total */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Total Services
                            </p>

                            <h2 className="text-4xl font-bold mt-2 text-[#293878]">
                                {totalServices}
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-[#293878] flex items-center justify-center">

                            <Layers3
                                size={32}
                                className="text-white"
                            />

                        </div>

                    </div>

                </div>

                {/* Active */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Active
                            </p>

                            <h2 className="text-4xl font-bold mt-2 text-green-600">
                                {activeServices}
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

                            <CheckCircle2
                                size={32}
                                className="text-green-600"
                            />

                        </div>

                    </div>

                </div>

                {/* Inactive */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-500 text-sm">
                                Inactive
                            </p>

                            <h2 className="text-4xl font-bold mt-2 text-red-600">
                                {inactiveServices}
                            </h2>

                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">

                            <XCircle
                                size={32}
                                className="text-red-600"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Search + Table Card */}
            <div className="mt-8 bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b">

                    <div>

                        <h2 className="text-xl font-bold text-[#293878]">
                            Services List
                        </h2>

                        <p className="text-gray-500 text-sm mt-1">
                            Search, edit and manage your services.
                        </p>

                    </div>

                    <div className="relative w-full md:w-96">

                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search service..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#293878] focus:ring-2 focus:ring-[#293878]/20 outline-none transition"
                        />

                    </div>

                </div>

                               <div className="overflow-x-auto">
                    <table className="w-full">

                        <thead className="bg-slate-50 border-b">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-[#293878]">
                                    Sr No.
                                </th>

                                <th className="px-6 py-4 text-left text-sm font-bold text-[#293878]">
                                    Service Name
                                </th>

                                <th className="px-6 py-4 text-center text-sm font-bold text-[#293878]">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-center text-sm font-bold text-[#293878]">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            {filteredServices.length > 0 ? (

                                filteredServices.map((service) => (

                                    <tr
                                        key={service.id}
                                        className="border-b last:border-0 hover:bg-slate-50 transition-all duration-300"
                                    >

                                        {/* ID */}
                                        <td className="px-6 py-5 font-semibold text-gray-700">
                                            #{service.id}
                                        </td>

                                        {/* Name */}
                                        <td className="px-6 py-5">

                                            <div className="flex items-center gap-3">

                                                <div className="w-11 h-11 rounded-xl bg-[#293878] text-white flex items-center justify-center font-bold">
                                                    {service.name.charAt(0).toUpperCase()}
                                                </div>

                                                <div>

                                                    <h4 className="font-semibold text-gray-800">
                                                        {service.name}
                                                    </h4>

                                                    <p className="text-xs text-gray-500">
                                                        Service ID : {service.id}
                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* Status */}
                                        <td className="px-6 py-5 text-center">

                                            {Number(service.status) === 1 ? (

                                                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-4 py-2 text-xs font-semibold">
                                                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                                    Active
                                                </span>

                                            ) : (

                                                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-4 py-2 text-xs font-semibold">
                                                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                                    Inactive
                                                </span>

                                            )}

                                        </td>

                                        {/* Action */}
                                        <td className="px-6 py-5">

                                            <div className="flex justify-center items-center gap-3">

                                                {/* Edit */}
                                                <Link
                                                    href={`/admin/services/${service.id}/edit`}
                                                    className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 hover:bg-[#293878] hover:text-white flex items-center justify-center transition duration-300"
                                                >
                                                    <Pencil size={18} />
                                                </Link>

                                                {/* Delete */}
                                               <button
    onClick={() => {
        if (
            confirm(
                service.status == 1
                    ? "Deactivate this service?"
                    : "Activate this service?"
            )
        ) {
            router.delete(`/admin/services/${service.id}`);
        }
    }}
    className={`w-10 h-10 rounded-xl flex items-center justify-center transition duration-300 ${
        service.status == 1
            ? "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white"
            : "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white"
    }`}
    title={service.status == 1 ? "Deactivate" : "Activate"}
>
    {service.status == 1 ? (
        <Trash2 size={18} />
    ) : (
        <RotateCcw
            size={18}
            className="transition-transform duration-500 hover:rotate-180"
        />
    )}
</button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan={4}
                                        className="py-16 text-center"
                                    >

                                        <div className="flex flex-col items-center">

                                            <Layers3
                                                size={60}
                                                className="text-gray-300 mb-4"
                                            />

                                            <h3 className="text-xl font-bold text-gray-600">
                                                No Services Found
                                            </h3>

                                            <p className="text-gray-400 mt-2">
                                                Try another search or add a new service.
                                            </p>

                                        </div>

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>
                            </div>
        </div>
    );
}