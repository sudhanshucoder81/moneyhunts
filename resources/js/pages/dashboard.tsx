import { Head } from "@inertiajs/react";
import { dashboard } from "@/routes";
import {
    User,
    ShoppingBag,
    Wallet,
    Bell,
    Clock3,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Search,
    Settings,
    Menu,
} from "lucide-react";

interface Props {
    auth?: {
        user?: {
            name?: string;
            email?: string;
            reg_no?: string;
        };
    };
}

export default function Dashboard({ auth }: Props) {

    const stats = [
        {
            title: "Total Orders",
            value: "28",
            icon: ShoppingBag,
            color: "bg-blue-600",
        },
        {
            title: "Pending",
            value: "05",
            icon: Clock3,
            color: "bg-yellow-500",
        },
        {
            title: "Completed",
            value: "21",
            icon: CheckCircle2,
            color: "bg-green-600",
        },
        {
            title: "Cancelled",
            value: "02",
            icon: XCircle,
            color: "bg-red-500",
        },
        {
            title: "Wallet",
            value: "₹5,250",
            icon: Wallet,
            color: "bg-purple-600",
        },
        {
            title: "Notifications",
            value: "08",
            icon: Bell,
            color: "bg-pink-600",
        },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-slate-100">

                {/* Header */}

                {/* <header className="bg-white shadow-sm sticky top-0 z-50">

                    <div className="max-w-7xl mx-auto px-6">

                        <div className="h-20 flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <button className="lg:hidden">

                                    <Menu />

                                </button>

                                <div>

                                    <h1 className="text-2xl font-bold text-blue-700">
                                        SNEHCH
                                    </h1>

                                    <p className="text-xs text-gray-500">
                                        User Dashboard
                                    </p>

                                </div>

                            </div>

                            <div className="hidden md:flex items-center">

                                <div className="relative">

                                    <Search
                                        className="absolute left-4 top-3 text-gray-400"
                                        size={18}
                                    />

                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-11 pr-4 h-11 rounded-xl border w-80 outline-none"
                                    />

                                </div>

                            </div>

                            <div className="flex items-center gap-5">

                                <button className="relative">

                                    <Bell />

                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
                                        5
                                    </span>

                                </button>

                                <button>

                                    <Settings />

                                </button>

                                <div className="flex items-center gap-3">

                                    <div className="h-11 w-11 rounded-full bg-blue-600 text-white flex items-center justify-center">

                                        <User size={20} />

                                    </div>

                                    <div className="hidden md:block">

                                        <h4 className="font-semibold">

                                            {auth?.user?.name ?? "Sudhanshu Gupta"}

                                        </h4>

                                        <p className="text-xs text-gray-500">

                                            {auth?.user?.email ?? "user@gmail.com"}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </header> */}

                {/* Hero */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-xl">

                        <div className="grid lg:grid-cols-2 gap-10 items-center">

                            <div>

                                <p className="uppercase tracking-widest text-blue-100 text-sm">

                                    Welcome Back

                                </p>

                                <h1 className="text-5xl font-bold mt-3">

                                    {auth?.user?.name ?? "Sudhanshu Gupta"}

                                </h1>

                                <p className="mt-5 text-blue-100 leading-7">

                                    Welcome to your MONEYHUNT Dashboard.

                                    Manage your service requests,
                                    payments, invoices, profile and
                                    account activity from one place.

                                </p>

                                <div className="flex gap-4 mt-8">

                                    <button className="bg-white text-blue-700 rounded-xl px-6 py-3 font-semibold">

                                        Apply Service

                                    </button>

                                    <button className="border border-white rounded-xl px-6 py-3">

                                        View Orders

                                    </button>

                                </div>

                            </div>

                            <div>

                                <div className="bg-white/20 backdrop-blur rounded-3xl p-8">

                                    <div className="flex items-center gap-5">

                                        <div className="h-20 w-20 rounded-full bg-white text-blue-700 flex items-center justify-center">

                                            <User size={42}/>

                                        </div>

                                        <div>

                                            <h2 className="text-2xl font-bold">

                                                {auth?.user?.name ?? "Sudhanshu"}

                                            </h2>

                                            <p>

                                                {auth?.user?.email ?? "user@gmail.com"}

                                            </p>

                                            <p className="mt-2">

                                                Registration :

                                                <span className="font-semibold ml-2">

                                                    {auth?.user?.reg_no ?? "MH202600001"}

                                                </span>

                                            </p>

                                        </div>

                                    </div>

                                    <div className="mt-8">

                                        <div className="flex justify-between mb-2">

                                            <span>Profile Completion</span>

                                            <span>85%</span>

                                        </div>

                                        <div className="h-3 rounded-full bg-white/30">

                                            <div className="h-3 rounded-full bg-white w-[85%]"></div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                                {/* ===================== Statistics ===================== */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {stats.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 p-6"
                                >

                                    <div className="flex justify-between items-center">

                                        <div>

                                            <p className="text-sm text-gray-500">
                                                {item.title}
                                            </p>

                                            <h2 className="text-4xl font-bold mt-3 text-slate-800">
                                                {item.value}
                                            </h2>

                                            <p className="text-green-600 text-sm mt-3 font-medium">
                                                +12% this month
                                            </p>

                                        </div>

                                        <div
                                            className={`${item.color} h-16 w-16 rounded-2xl flex items-center justify-center text-white shadow-lg`}
                                        >
                                            <Icon size={30} />
                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </section>


                {/* ===================== Account Overview ===================== */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="grid lg:grid-cols-3 gap-6">

                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

                            <div className="flex justify-between items-center mb-8">

                                <div>

                                    <h2 className="text-2xl font-bold text-slate-800">
                                        Account Overview
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        Basic account information
                                    </p>

                                </div>

                                <button className="text-blue-600 font-semibold flex items-center gap-2">

                                    Edit Profile

                                    <ArrowRight size={18} />

                                </button>

                            </div>

                            <div className="grid md:grid-cols-2 gap-5">

                                <div className="rounded-2xl border p-5">

                                    <p className="text-gray-500 text-sm">
                                        Full Name
                                    </p>

                                    <h3 className="font-bold text-lg mt-2">
                                        {auth?.user?.name ?? "Sudhanshu Gupta"}
                                    </h3>

                                </div>

                                <div className="rounded-2xl border p-5">

                                    <p className="text-gray-500 text-sm">
                                        Registration No.
                                    </p>

                                    <h3 className="font-bold text-lg mt-2">
                                        {auth?.user?.reg_no ?? "MH202600001"}
                                    </h3>

                                </div>

                                <div className="rounded-2xl border p-5">

                                    <p className="text-gray-500 text-sm">
                                        Email Address
                                    </p>

                                    <h3 className="font-semibold mt-2 break-all">
                                        {auth?.user?.email ?? "user@gmail.com"}
                                    </h3>

                                </div>

                                <div className="rounded-2xl border p-5">

                                    <p className="text-gray-500 text-sm">
                                        Account Status
                                    </p>

                                    <span className="inline-flex mt-3 px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                                        Active
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Membership */}

                        <div className="rounded-3xl bg-gradient-to-br from-indigo-700 to-blue-600 p-8 text-white shadow-xl">

                            <p className="uppercase tracking-widest text-blue-100 text-sm">
                                Membership
                            </p>

                            <h2 className="text-3xl font-bold mt-3">
                                Premium User
                            </h2>

                            <p className="mt-4 text-blue-100 leading-7">
                                Enjoy faster processing, premium support and
                                priority service for all your applications.
                            </p>

                            <div className="mt-8 bg-white/20 rounded-2xl p-5">

                                <div className="flex justify-between">

                                    <span>Membership</span>

                                    <span>Gold</span>

                                </div>

                                <div className="flex justify-between mt-4">

                                    <span>Valid Till</span>

                                    <span>31 Dec 2026</span>

                                </div>

                                <div className="flex justify-between mt-4">

                                    <span>Support</span>

                                    <span>24×7</span>

                                </div>

                            </div>

                            <button className="mt-8 w-full bg-white text-blue-700 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
                                Upgrade Plan
                            </button>

                        </div>

                    </div>

                </section>
                                {/* ========================= Recent Orders ========================= */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="grid xl:grid-cols-3 gap-6">

                        <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

                            <div className="flex justify-between items-center mb-6">

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        Recent Orders
                                    </h2>

                                    <p className="text-gray-500">
                                        Latest service requests
                                    </p>

                                </div>

                                <button className="text-blue-600 font-semibold">
                                    View All
                                </button>

                            </div>

                            <div className="overflow-x-auto">

                                <table className="w-full">

                                    <thead>

                                        <tr className="border-b">

                                            <th className="text-left py-4">Order No</th>
                                            <th className="text-left">Service</th>
                                            <th className="text-left">Amount</th>
                                            <th className="text-left">Status</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        {[
                                            ["SO20260001","GST Registration","₹999","Pending"],
                                            ["SO20260002","PAN Card","₹199","Completed"],
                                            ["SO20260003","FSSAI","₹599","Completed"],
                                            ["SO20260004","Trademark","₹1499","Pending"],
                                            ["SO20260005","MSME","₹399","Cancelled"],
                                        ].map((item,index)=>(

                                            <tr
                                                key={index}
                                                className="border-b hover:bg-slate-50"
                                            >

                                                <td className="py-4 font-semibold">
                                                    {item[0]}
                                                </td>

                                                <td>{item[1]}</td>

                                                <td>{item[2]}</td>

                                                <td>

                                                    <span
                                                        className={`px-3 py-1 rounded-full text-sm

                                                        ${
                                                            item[3]=="Completed"
                                                            ? "bg-green-100 text-green-700"

                                                            : item[3]=="Pending"

                                                            ? "bg-yellow-100 text-yellow-700"

                                                            : "bg-red-100 text-red-700"

                                                        }`}
                                                    >

                                                        {item[3]}

                                                    </span>

                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                        {/* Notifications */}

                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

                            <h2 className="text-2xl font-bold mb-6">
                                Notifications
                            </h2>

                            <div className="space-y-5">

                                <div className="border-l-4 border-green-500 pl-4">

                                    <h4 className="font-semibold">
                                        GST Approved
                                    </h4>

                                    <p className="text-gray-500 text-sm">
                                        Your GST Registration is approved.
                                    </p>

                                </div>

                                <div className="border-l-4 border-blue-500 pl-4">

                                    <h4 className="font-semibold">
                                        Invoice Ready
                                    </h4>

                                    <p className="text-gray-500 text-sm">
                                        Download your latest invoice.
                                    </p>

                                </div>

                                <div className="border-l-4 border-yellow-500 pl-4">

                                    <h4 className="font-semibold">
                                        PAN Verification
                                    </h4>

                                    <p className="text-gray-500 text-sm">
                                        Verification is under process.
                                    </p>

                                </div>

                                <div className="border-l-4 border-red-500 pl-4">

                                    <h4 className="font-semibold">
                                        Reminder
                                    </h4>

                                    <p className="text-gray-500 text-sm">
                                        Complete KYC to unlock services.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* ========================= Popular Services ========================= */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

                        <div className="flex justify-between items-center mb-8">

                            <div>

                                <h2 className="text-2xl font-bold">
                                    Popular Services
                                </h2>

                                <p className="text-gray-500">
                                    Apply instantly
                                </p>

                            </div>

                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                            {[
                                "GST Registration",
                                "PAN Card",
                                "FSSAI",
                                "Trademark",
                                "MSME",
                                "Company Registration",
                                "IEC Code",
                                "ISO Certificate",
                            ].map((service,index)=>(

                                <div
                                    key={index}
                                    className="rounded-2xl border p-6 hover:bg-blue-600 hover:text-white transition cursor-pointer"
                                >

                                    <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">

                                        <ShoppingBag className="text-blue-600"/>

                                    </div>

                                    <h3 className="font-semibold">

                                        {service}

                                    </h3>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                {/* ========================= Progress ========================= */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

                        <h2 className="text-2xl font-bold mb-8">
                            Service Progress
                        </h2>

                        <div className="space-y-8">

                            {[
                                ["GST Registration","100%","w-full","bg-green-500"],
                                ["PAN Card","65%","w-2/3","bg-yellow-500"],
                                ["Trademark","30%","w-1/3","bg-blue-600"],
                            ].map((item,index)=>(

                                <div key={index}>

                                    <div className="flex justify-between mb-2">

                                        <span className="font-semibold">
                                            {item[0]}
                                        </span>

                                        <span>
                                            {item[1]}
                                        </span>

                                    </div>

                                    <div className="h-3 bg-gray-200 rounded-full">

                                        <div
                                            className={`${item[2]} ${item[3]} h-3 rounded-full`}
                                        ></div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
                                {/* ========================= Wallet + Payments ========================= */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Wallet */}

                        <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 shadow-lg">

                            <h3 className="text-xl font-semibold">
                                Wallet Balance
                            </h3>

                            <h1 className="text-5xl font-bold mt-5">
                                ₹5,250
                            </h1>

                            <p className="mt-4 text-purple-100">
                                Available Balance
                            </p>

                            <div className="grid grid-cols-2 gap-3 mt-8">

                                <button className="bg-white text-purple-700 py-3 rounded-xl font-semibold">
                                    Add Money
                                </button>

                                <button className="bg-white/20 py-3 rounded-xl">
                                    History
                                </button>

                            </div>

                        </div>

                        {/* Recent Payments */}

                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border p-6">

                            <div className="flex justify-between mb-6">

                                <div>

                                    <h2 className="text-2xl font-bold">
                                        Recent Payments
                                    </h2>

                                    <p className="text-gray-500">
                                        Last Transactions
                                    </p>

                                </div>

                            </div>

                            <table className="w-full">

                                <thead>

                                    <tr className="border-b">

                                        <th className="text-left py-3">Txn ID</th>
                                        <th className="text-left">Amount</th>
                                        <th className="text-left">Method</th>
                                        <th className="text-left">Status</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {[
                                        ["TXN001","₹999","UPI","Success"],
                                        ["TXN002","₹499","Card","Success"],
                                        ["TXN003","₹299","UPI","Pending"],
                                        ["TXN004","₹199","Net Banking","Success"],
                                    ].map((item,index)=>(

                                        <tr key={index} className="border-b">

                                            <td className="py-4 font-semibold">
                                                {item[0]}
                                            </td>

                                            <td>{item[1]}</td>

                                            <td>{item[2]}</td>

                                            <td>

                                                <span className={`px-3 py-1 rounded-full text-sm ${
                                                    item[3]=="Success"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                                }`}>

                                                    {item[3]}

                                                </span>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </section>

                {/* ========================= Timeline ========================= */}

                <section className="max-w-7xl mx-auto px-6 mt-8">

                    <div className="bg-white rounded-3xl shadow-sm border p-8">

                        <h2 className="text-2xl font-bold mb-8">
                            Recent Activity
                        </h2>

                        <div className="space-y-8">

                            {[
                                ["GST Registration Submitted","Today","bg-green-500"],
                                ["Invoice Generated","Yesterday","bg-blue-500"],
                                ["PAN Verification Started","2 Days Ago","bg-yellow-500"],
                                ["Profile Updated","Last Week","bg-purple-500"],
                            ].map((item,index)=>(

                                <div
                                    key={index}
                                    className="flex gap-5"
                                >

                                    <div className={`${item[2]} h-4 w-4 rounded-full mt-2`}></div>

                                    <div>

                                        <h3 className="font-semibold">
                                            {item[0]}
                                        </h3>

                                        <p className="text-gray-500 text-sm">
                                            {item[1]}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                {/* ========================= Support ========================= */}

                <section className="max-w-7xl mx-auto px-6 mt-8 mb-10">

                    <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-10">

                        <div className="grid lg:grid-cols-2 gap-8 items-center">

                            <div>

                                <h2 className="text-4xl font-bold">
                                    Need Help?
                                </h2>

                                <p className="mt-4 text-blue-100 leading-7">
                                    Our support team is available 24×7 to help
                                    you with registrations, payments and
                                    services.
                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <button className="bg-white text-blue-700 rounded-xl py-4 font-semibold">
                                    WhatsApp
                                </button>

                                <button className="bg-white text-blue-700 rounded-xl py-4 font-semibold">
                                    Call Us
                                </button>

                                <button className="bg-white text-blue-700 rounded-xl py-4 font-semibold">
                                    Raise Ticket
                                </button>

                                <button className="bg-white text-blue-700 rounded-xl py-4 font-semibold">
                                    Live Chat
                                </button>

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </>

    );

}

Dashboard.layout = {

    breadcrumbs: [

        {

            title: "Dashboard",

            href: dashboard(),

        },

    ],

};