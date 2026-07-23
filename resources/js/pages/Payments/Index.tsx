import { Head } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import {
    Wallet,
    IndianRupee,
    CheckCircle2,
    Clock3,
    XCircle,
    CreditCard,
    Search,
    Filter,
    Calendar,
    Eye,
    Download,
    ArrowDownToLine,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const stats = [
    {
        title: "Total Paid",
        value: "₹24,580",
        icon: IndianRupee,
        bg: "bg-blue-50",
        color: "text-blue-600",
    },
    {
        title: "Successful",
        value: "18",
        icon: CheckCircle2,
        bg: "bg-green-50",
        color: "text-green-600",
    },
    {
        title: "Pending",
        value: "3",
        icon: Clock3,
        bg: "bg-yellow-50",
        color: "text-yellow-600",
    },
    {
        title: "Failed",
        value: "1",
        icon: XCircle,
        bg: "bg-red-50",
        color: "text-red-600",
    },
];

const payments = [
    {
        id: 1,
        order: "SO240701",
        transaction: "TXN98234621",
        service: "GST Registration",
        amount: "₹999",
        method: "UPI",
        status: "Success",
        date: "16 Jul 2026",
    },
    {
        id: 2,
        order: "SO240702",
        transaction: "TXN98234622",
        service: "PAN Card",
        amount: "₹299",
        method: "Credit Card",
        status: "Pending",
        date: "15 Jul 2026",
    },
    {
        id: 3,
        order: "SO240703",
        transaction: "TXN98234623",
        service: "Income Certificate",
        amount: "₹499",
        method: "Net Banking",
        status: "Failed",
        date: "14 Jul 2026",
    },
    {
        id: 4,
        order: "SO240704",
        transaction: "TXN98234624",
        service: "FSSAI License",
        amount: "₹1,499",
        method: "UPI",
        status: "Success",
        date: "13 Jul 2026",
    },
    {
        id: 5,
        order: "SO240705",
        transaction: "TXN98234625",
        service: "Shop Act License",
        amount: "₹799",
        method: "Wallet",
        status: "Success",
        date: "12 Jul 2026",
    },
];

export default function Index() {
    return (
       
          
            <div className="min-h-screen bg-slate-50 p-6">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

                    <div>

                        <h1 className="text-3xl font-bold text-slate-800">
                            My Payments
                        </h1>

                        <p className="text-slate-500 mt-2">
                            Track all your payments, invoices and transaction
                            history from one place.
                        </p>

                    </div>

                    <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow">

                        <ArrowDownToLine size={18} />

                        Export Report

                    </button>

                </div>

                {/* Statistics */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6"
                            >

                                <div className="flex justify-between items-center">

                                    <div>

                                        <p className="text-slate-500 text-sm">
                                            {item.title}
                                        </p>

                                        <h2 className="text-3xl font-bold mt-2 text-slate-800">
                                            {item.value}
                                        </h2>

                                    </div>

                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}
                                    >
                                        <Icon
                                            className={`${item.color}`}
                                            size={28}
                                        />
                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

                {/* Search, Filter & Table */}
                                {/* Filters */}

                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 mb-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

                        {/* Search */}

                        <div className="xl:col-span-2 relative">

                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="text"
                                placeholder="Search Order No, Transaction ID..."
                                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            />

                        </div>

                        {/* Status */}

                        <div className="relative">

                            <Filter
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <select className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">

                                <option>All Status</option>
                                <option>Success</option>
                                <option>Pending</option>
                                <option>Failed</option>

                            </select>

                        </div>

                        {/* Date */}

                        <div className="relative">

                            <Calendar
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <input
                                type="date"
                                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            />

                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition">
                            Search
                        </button>

                    </div>

                </div>

                {/* Payment Table */}

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                    <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">

                        <div>

                            <h2 className="text-xl font-semibold text-slate-800">
                                Payment History
                            </h2>

                            <p className="text-sm text-slate-500 mt-1">
                                Complete list of your payment transactions.
                            </p>

                        </div>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-slate-100">

                                <tr>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        Order No
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        Service
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        Amount
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        Payment Method
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                                        Date
                                    </th>

                                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {payments.map((payment) => (

                                    <tr
                                        key={payment.id}
                                        className="border-b border-slate-100 hover:bg-slate-50 transition"
                                    >

                                        <td className="px-6 py-5">

                                            <div className="font-semibold text-slate-800">
                                                {payment.order}
                                            </div>

                                            <div className="text-xs text-slate-500 mt-1">
                                                {payment.transaction}
                                            </div>

                                        </td>

                                        <td className="px-6 py-5">

                                            <div className="font-medium text-slate-800">
                                                {payment.service}
                                            </div>

                                        </td>

                                        <td className="px-6 py-5 font-semibold text-blue-700">
                                            {payment.amount}
                                        </td>

                                        <td className="px-6 py-5">
                                            {payment.method}
                                        </td>

                                        <td className="px-6 py-5">

                                            {payment.status === "Success" && (
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                                                    <CheckCircle2 size={16} />
                                                    Success
                                                </span>
                                            )}

                                            {payment.status === "Pending" && (
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                                                    <Clock3 size={16} />
                                                    Pending
                                                </span>
                                            )}

                                            {payment.status === "Failed" && (
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                                                    <XCircle size={16} />
                                                    Failed
                                                </span>
                                            )}

                                        </td>

                                        <td className="px-6 py-5 text-slate-600">
                                            {payment.date}
                                        </td>

                                        <td className="px-6 py-5">                                        <div className="flex items-center justify-center gap-2">

                                            {/* View Button */}
                                            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
                                                <Eye size={16} />
                                                View
                                            </button>

                                            {/* Invoice Button */}
                                            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                                                <Download size={16} />
                                                Invoice
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* Footer */}

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 bg-slate-50">

                        <p className="text-sm text-slate-500">
                            Showing <span className="font-semibold">1</span> to{" "}
                            <span className="font-semibold">5</span> of{" "}
                            <span className="font-semibold">25</span> payments
                        </p>

                        <div className="flex items-center gap-2">

                            <button className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center hover:bg-white transition">
                                <ChevronLeft size={18} />
                            </button>

                            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-semibold">
                                1
                            </button>

                            <button className="w-10 h-10 rounded-lg border border-slate-300 hover:bg-white transition">
                                2
                            </button>

                            <button className="w-10 h-10 rounded-lg border border-slate-300 hover:bg-white transition">
                                3
                            </button>

                            <button className="w-10 h-10 rounded-lg border border-slate-300 flex items-center justify-center hover:bg-white transition">
                                <ChevronRight size={18} />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Empty State (Dynamic use ke liye) */}

                {false && (
                    <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-16 mt-8 text-center">

                        <div className="mx-auto w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-5">
                            <Wallet className="w-10 h-10 text-slate-400" />
                        </div>

                        <h3 className="text-2xl font-semibold text-slate-800">
                            No Payments Found
                        </h3>

                        <p className="text-slate-500 mt-2">
                            You haven't made any payments yet. Your payment
                            history will appear here once you complete a
                            transaction.
                        </p>

                    </div>
                )}

            </div>

    );
}