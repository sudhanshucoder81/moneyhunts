import { useState } from "react";
import { Head } from "@inertiajs/react";
import {
  Users,
  Search,
  Pencil,
  Trash2,
  RotateCcw,
  UserCheck,
  UserX,
  Activity,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: number;
  created_at: string;
}

export default function Index({ users }: { users: User[] }) {
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      (item.phone || "").toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = users.filter((x) => x.status === 1).length;
  const inactiveCount = users.filter((x) => x.status === 0).length;

  return (
    <>
      <Head title="Users" />

      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 p-6">

        {/* HEADER */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-700 p-10 shadow-2xl">

          <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10"></div>

          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/10"></div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-6">

            <div>

              <h1 className="flex items-center gap-3 text-4xl font-bold text-white">

                <Users size={42} />

                Users Management

              </h1>

              <p className="mt-3 text-blue-100 text-lg">

                Manage all registered users with a modern dashboard.

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-lg px-8 py-6 text-center border border-white/20">

              <p className="text-blue-100">

                Total Users

              </p>

              <h2 className="mt-2 text-5xl font-bold text-white">

                {users.length}

              </h2>

            </div>

          </div>

        </div>

        {/* STAT CARDS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <Card className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300">

            <CardContent className="flex justify-between items-center p-7">

              <div>

                <p className="text-gray-500">

                  Total Users

                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-800">

                  {users.length}

                </h2>

              </div>

              <div className="rounded-2xl bg-blue-100 p-4">

                <Activity className="text-blue-700" size={34} />

              </div>

            </CardContent>

          </Card>

          <Card className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300">

            <CardContent className="flex justify-between items-center p-7">

              <div>

                <p className="text-gray-500">

                  Active Users

                </p>

                <h2 className="mt-2 text-4xl font-bold text-green-600">

                  {activeCount}

                </h2>

              </div>

              <div className="rounded-2xl bg-green-100 p-4">

                <UserCheck className="text-green-700" size={34} />

              </div>

            </CardContent>

          </Card>

          <Card className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300">

            <CardContent className="flex justify-between items-center p-7">

              <div>

                <p className="text-gray-500">

                  Inactive Users

                </p>

                <h2 className="mt-2 text-4xl font-bold text-red-600">

                  {inactiveCount}

                </h2>

              </div>

              <div className="rounded-2xl bg-red-100 p-4">

                <UserX className="text-red-700" size={34} />

              </div>

            </CardContent>

          </Card>

        </div>
                {/* SEARCH */}

        <Card className="mt-8 rounded-3xl border-0 shadow-xl">

          <CardContent className="p-6">

            <div className="relative">

              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="text"
                placeholder="Search by name, email or phone..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 text-gray-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />

            </div>

          </CardContent>

        </Card>

        {/* USERS TABLE */}

        <Card className="mt-8 rounded-3xl border-0 shadow-2xl overflow-hidden">

          <CardContent className="p-0 overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-700 text-white">

                <tr>

                  <th className="px-6 py-5 text-left">#</th>

                  <th className="px-6 py-5 text-left">Name</th>

                  <th className="px-6 py-5 text-left">Email</th>

                  <th className="px-6 py-5 text-left">Phone</th>

                  <th className="px-6 py-5 text-left">Status</th>

                  <th className="px-6 py-5 text-center">Action</th>

                </tr>

              </thead>

              <tbody>

                {filtered.length > 0 ? (

                  filtered.map((user, index) => (

                    <tr
                      key={user.id}
                      className="border-b hover:bg-slate-50 transition duration-300"
                    >

                      <td className="px-6 py-5 font-semibold">
                        {index + 1}
                      </td>

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="h-11 w-11 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold">

                            {user.name.charAt(0).toUpperCase()}

                          </div>

                          <div>

                            <h3 className="font-semibold text-slate-800">

                              {user.name}

                            </h3>

                            <p className="text-xs text-gray-500">

                              User ID : #{user.id}

                            </p>

                          </div>

                        </div>

                      </td>

                      <td className="px-6 py-5 text-gray-600">

                        {user.email}

                      </td>

                      <td className="px-6 py-5 text-gray-600">

                        {user.phone}

                      </td>

                      <td className="px-6 py-5">

                        {user.status === 1 ? (

                          <span className="inline-flex items-center rounded-full bg-green-100 px-1 py-1.5 text-sm font-semibold text-green-700">

                            ● Active

                          </span>

                        ) : (

                          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">

                            ● Inactive

                          </span>

                        )}

                      </td>

                     <td className="px-6 py-5">
  <div className="flex justify-center gap-3">

    <button
      className="rounded-xl bg-blue-100 p-3 text-blue-700 hover:bg-blue-600 hover:text-white transition"
      title="Edit"
    >
      <Pencil size={18} />
    </button>

    <button
      className="rounded-xl bg-red-100 p-3 text-red-700 hover:bg-red-600 hover:text-white transition"
      title="Delete"
    >
      <Trash2 size={18} />
    </button>

    <button
      className="rounded-xl bg-amber-100 p-3 text-amber-700 hover:bg-amber-500 hover:text-white transition"
      title="Restore"
    >
      <RotateCcw size={18} />
    </button>

  </div>
</td>

</tr>
))
) : (

<tr>
  <td
    colSpan={6}
    className="py-12 text-center text-gray-500 text-lg"
  >
    No users found.
  </td>
</tr>

)}

</tbody>

</table>

</CardContent>

</Card>

</div>

</>
);
}