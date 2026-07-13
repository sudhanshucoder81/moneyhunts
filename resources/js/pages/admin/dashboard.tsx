
export default function Dashboard() {

    return (
            <div className="space-y-6">

                {/* HERO SUMMARY */}
                <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Welcome Back 👋
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Here is what is happening in your business today.
                    </p>
                </div>

                {/* STATS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                    {[
                        { title: "Total Users", value: "1,245" },
                        { title: "Total Services", value: "320" },
                        { title: "Revenue", value: "₹45,000" },
                        { title: "Pending Services", value: "18" }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <p className="text-gray-500 text-sm">{item.title}</p>

                            <h3 className="text-3xl font-bold text-[#293878] mt-2">
                                {item.value}
                            </h3>

                            <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-[#293878] rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MIDDLE SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    {/* ANALYTICS */}
                    <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Analytics Overview
                            </h3>

                            <span className="text-xs bg-[#293878]/10 text-[#293878] px-3 py-1 rounded-full">
                                This Month
                            </span>
                        </div>

                        <div className="h-64 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-gray-400 border">
                            📊 Chart Area (Services)
                        </div>
                    </div>

                    {/* ACTION PANEL */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Quick Actions
                        </h3>

                        <div className="space-y-3">

                            <button className="w-full bg-[#293878] text-white py-2.5 rounded-lg hover:opacity-90 transition">
                                + Add Services
                            </button>

                            <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition">
                                View Services
                            </button>

                            <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg hover:bg-gray-200 transition">
                                Manage Users
                            </button>

                        </div>
                    </div>
                </div>

                {/* TABLE SECTION */}
                <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">

                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-700">
                            Recent Orders
                        </h3>

                        <button className="text-[#293878] text-sm font-medium hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full text-sm">

                            <thead>
                                <tr className="text-gray-500 border-b">
                                    <th className="py-3 text-left">Order ID</th>
                                    <th className="text-left">Status</th>
                                    <th className="text-left">Amount</th>
                                    <th className="text-left">Date</th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-700">

                                {[
                                    ["#101", "Paid", "₹1200", "01 Jul", "green"],
                                    ["#102", "Pending", "₹800", "30 Jun", "yellow"],
                                    ["#103", "Delivered", "₹1500", "29 Jun", "blue"],
                                ].map((row, i) => (
                                    <tr
                                        key={i}
                                        className="border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="py-3">{row[0]}</td>

                                        <td className={
                                            row[1] === "Paid"
                                                ? "text-green-600 font-medium"
                                                : row[1] === "Pending"
                                                    ? "text-yellow-600 font-medium"
                                                    : "text-blue-600 font-medium"
                                        }>
                                            {row[1]}
                                        </td>

                                        <td>{row[2]}</td>
                                        <td>{row[3]}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
}
    