import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import {
    Search,
    Plus,
    FolderTree,
    Layers3,
    CheckCircle2,
    XCircle,
    Pencil,
    Trash2,
} from "lucide-react";

interface SubCategory {
    id: number;
    name: string;
    status: number;
    category: {
        id: number;
        name: string;
        service: {
            id: number;
            name: string;
        };
    };
}

interface Props {
    subCategories: SubCategory[];
}

export default function Index({ subCategories }: Props) {

    const [search, setSearch] = useState("");

    const destroy = (id: number) => {

        if (confirm("Are you sure you want to delete this Sub Category?")) {

            router.delete(`/admin/service-sub-categories/${id}`);

        }

    };

    const filtered = subCategories.filter((item) =>
        item.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        item.category.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        item.category.service.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const activeCount = subCategories.filter(
        (x) => x.status === 1
    ).length;

    const inactiveCount = subCategories.filter(
        (x) => x.status === 0
    ).length;

    return (

        <div className="min-h-screen bg-slate-100 p-6">

            {/* Header */}

            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <FolderTree size={34} />

                            Service Sub Categories

                        </h1>

                        <p className="text-blue-100 mt-3">

                            Manage all service sub categories from one place.

                        </p>

                    </div>

                    <Link href="/admin/service-sub-categories/create">

                        <Button className="bg-white text-[#293878] hover:bg-gray-100 rounded-xl h-12 px-6">

                            <Plus className="mr-2 h-5 w-5" />

                            Add Sub Category

                        </Button>

                    </Link>

                </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <Card className="rounded-3xl shadow-lg border-0">

                    <CardContent className="p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500 text-sm">

                                    Total Sub Categories

                                </p>

                                <h2 className="text-4xl font-bold mt-2 text-[#293878]">

                                    {subCategories.length}

                                </h2>

                            </div>

                            <div className="bg-blue-100 text-[#293878] p-4 rounded-2xl">

                                <Layers3 size={32} />

                            </div>

                        </div>

                    </CardContent>

                </Card>

                <Card className="rounded-3xl shadow-lg border-0">

                    <CardContent className="p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Active

                                </p>

                                <h2 className="text-3xl font-bold text-green-600 mt-2">

                                    {activeCount}

                                </h2>

                            </div>

                            <div className="bg-green-100 text-green-600 p-4 rounded-2xl">

                                <CheckCircle2 size={32} />

                            </div>

                        </div>

                    </CardContent>

                </Card>

                <Card className="rounded-3xl shadow-lg border-0">

                    <CardContent className="p-6">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    Inactive

                                </p>

                                <h2 className="text-3xl font-bold text-red-600 mt-2">

                                    {inactiveCount}

                                </h2>

                            </div>

                            <div className="bg-red-100 text-red-600 p-4 rounded-2xl">

                                <XCircle size={32} />

                            </div>

                        </div>

                    </CardContent>

                </Card>

            </div>
                        {/* Search */}

            <Card className="mt-8 rounded-3xl shadow-lg border-0">

                <CardContent className="p-6">

                    <div className="relative">

                        <Search
                            className="absolute left-4 top-3.5 text-gray-400"
                            size={20}
                        />

                        <input
                            type="text"
                            placeholder="Search Service / Category / Sub Category..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-12 rounded-xl border border-gray-300 pl-12 pr-4 focus:border-[#293878] focus:ring-4 focus:ring-[#293878]/20 outline-none transition"
                        />

                    </div>

                </CardContent>

            </Card>

            {/* Table */}

            <Card className="mt-8 rounded-3xl shadow-lg border-0">

                <CardContent className="p-0">

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead className="bg-slate-100">

                                <tr>

                                    <th className="px-6 py-4 text-left font-bold">#</th>

                                    <th className="px-6 py-4 text-left font-bold">
                                        Service
                                    </th>

                                    <th className="px-6 py-4 text-left font-bold">
                                        Category
                                    </th>

                                    <th className="px-6 py-4 text-left font-bold">
                                        Sub Category
                                    </th>

                                    <th className="px-6 py-4 text-left font-bold">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right font-bold">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {filtered.length > 0 ? (

                                    filtered.map((item, index) => (

                                        <tr
                                            key={item.id}
                                            className="border-b hover:bg-slate-50 transition"
                                        >

                                            <td className="px-6 py-5 font-semibold">

                                                {index + 1}

                                            </td>

                                            <td className="px-6 py-5">

                                                <span className="font-semibold text-[#293878]">

                                                    {item.category.service.name}

                                                </span>

                                            </td>

                                            <td className="px-6 py-5">

                                                <Badge
                                                    variant="secondary"
                                                    className="rounded-full"
                                                >

                                                    {item.category.name}

                                                </Badge>

                                            </td>

                                            <td className="px-6 py-5 font-medium">

                                                {item.name}

                                            </td>

                                            <td className="px-6 py-5">

                                                {item.status === 1 ? (

                                                    <Badge className="bg-green-600 hover:bg-green-600 rounded-full">

                                                        Active

                                                    </Badge>

                                                ) : (

                                                    <Badge
                                                        variant="destructive"
                                                        className="rounded-full"
                                                    >

                                                        Inactive

                                                    </Badge>

                                                )}

                                            </td>

                                            <td className="px-6 py-5">

                                                <div className="flex justify-end gap-2">

                                                    <Link
                                                        href={`/admin/service-sub-categories/${item.id}/edit`}
                                                    >

                                                        <Button
                                                            size="icon"
                                                            variant="outline"
                                                            className="rounded-xl"
                                                        >

                                                            <Pencil className="h-4 w-4" />

                                                        </Button>

                                                    </Link>

                                                    <Button
                                                        size="icon"
                                                        variant="destructive"
                                                        className="rounded-xl"
                                                        onClick={() => destroy(item.id)}
                                                    >

                                                        <Trash2 className="h-4 w-4" />

                                                    </Button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                ) : (
                                                                        <tr>

                                        <td
                                            colSpan={6}
                                            className="py-16 text-center"
                                        >

                                            <div className="flex flex-col items-center">

                                                <div className="bg-slate-100 p-6 rounded-full">

                                                    <FolderTree
                                                        size={45}
                                                        className="text-[#293878]"
                                                    />

                                                </div>

                                                <h3 className="mt-5 text-xl font-bold">

                                                    No Sub Categories Found

                                                </h3>

                                                <p className="text-gray-500 mt-2">

                                                    Click on Add Sub Category to create your first record.

                                                </p>

                                                <Link
                                                    href="/admin/service-sub-categories/create"
                                                    className="mt-6"
                                                >

                                                    <Button className="bg-[#293878] hover:bg-[#1f2d70]">

                                                        <Plus className="mr-2 h-4 w-4" />

                                                        Add Sub Category

                                                    </Button>

                                                </Link>

                                            </div>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </CardContent>

            </Card>

            {/* Footer */}

            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-sm text-gray-500">

                    Showing

                    <span className="font-semibold text-[#293878] mx-1">

                        {filtered.length}

                    </span>

                    of

                    <span className="font-semibold text-[#293878] mx-1">

                        {subCategories.length}

                    </span>

                    Sub Categories

                </div>

                <div className="flex items-center gap-2">

                    <Badge
                        variant="outline"
                        className="px-4 py-2 rounded-xl"
                    >

                        Total : {subCategories.length}

                    </Badge>

                    <Badge className="bg-green-600 hover:bg-green-600 px-4 py-2 rounded-xl">

                        Active : {activeCount}

                    </Badge>

                    <Badge
                        variant="destructive"
                        className="px-4 py-2 rounded-xl"
                    >

                        Inactive : {inactiveCount}

                    </Badge>

                </div>

            </div>

        </div>

    );

}