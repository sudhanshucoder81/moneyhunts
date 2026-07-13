import AdminLayout from "@/layouts/admin-layout";
import { Link } from "@inertiajs/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Button } from "@/components/ui/button";

import {
    ArrowLeft,
    Download,
    ReceiptText,
} from "lucide-react";

export default function Show({ order }: any) {
    const invoiceRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: invoiceRef,
        documentTitle: `Invoice-${order.order_no}`,
    });

    const statusText: any = {
        0: "Pending",
        1: "Success",
        2: "Cancel",
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <style>{`
                @media print{

                    body{
                        background:white;
                    }

                    .no-print{
                        display:none;
                    }

                    @page{
                        size:A4;
                        margin:12mm;
                    }

                }
            `}</style>

            {/* ================= HEADER ================= */}

            <div className="bg-[#293878] rounded-3xl p-8 shadow-xl text-white">

                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

                    <div>

                        <h1 className="text-3xl font-bold flex items-center gap-3">

                            <ReceiptText size={34} />

                            Invoice Details

                        </h1>

                        <p className="text-blue-100 mt-3">

                            View and print customer invoice.

                        </p>

                    </div>

                    <div className="flex gap-3">

                        <Link href="/admin/service-orders">

                            <Button className="bg-white text-[#293878] hover:bg-gray-100 rounded-xl h-12 px-6">

                                <ArrowLeft className="mr-2 h-5 w-5" />

                                Back

                            </Button>

                        </Link>

                        <Button
                            onClick={handlePrint}
                            className="bg-green-600 hover:bg-green-700 rounded-xl h-12 px-6"
                        >
                            <Download className="mr-2 h-5 w-5" />

                            Download PDF
                        </Button>

                    </div>

                </div>

            </div>

            {/* ================= INVOICE ================= */}

            <div
                ref={invoiceRef}
                className="relative bg-white mx-auto shadow-2xl mt-8 overflow-hidden"
                style={{
                    width: "210mm",
                    minHeight: "297mm",
                    padding: "18mm",
                }}
            >

                {/* Watermark */}

                <img
                    src="/images/logo.png"
                    alt=""
                    className="absolute inset-0 m-auto w-[420px] opacity-[0.05] pointer-events-none select-none"
                />

                {/* Header */}

                <div className="relative flex justify-between border-b-2 border-gray-800 pb-5">

                    <div>

                        <h1 className="text-4xl font-bold tracking-wide">

                            INVOICE

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Invoice No :
                            <span className="font-semibold text-black">
                                {" "}
                                #{order.order_no}
                            </span>

                        </p>

                        <p className="text-gray-500">

                            Date :

                            <span className="text-black font-medium">

                                {" "}
                                {new Date(
                                    order.created_at
                                ).toLocaleDateString()}

                            </span>

                        </p>

                    </div>

                    <div className="text-right">

                        <h2 className="text-2xl font-bold">

                            MoneyHunt

                        </h2>

                        <p className="text-gray-600">

                            Tagore Town

                        </p>

                        <p className="text-gray-600">

                            Prayagraj, Uttar Pradesh

                        </p>

                        <p className="text-gray-600">

                            info@moneyhunt.com

                        </p>

                        <p className="text-gray-600">

                            +91 8127409027

                        </p>

                    </div>

                </div>
                                {/* Customer Details */}

                <div className="relative grid grid-cols-2 gap-10 mt-8">

                    <div>

                        <h3 className="font-bold text-lg border-b pb-2 mb-3">
                            Bill To
                        </h3>

                        <p className="font-semibold text-lg">
                            {order.user?.name}
                        </p>

                        <p>{order.user?.email}</p>

                        <p className="mt-1">
                            Registration No :
                            <span className="font-medium">
                                {" "}
                                {order.reg_no}
                            </span>
                        </p>

                    </div>

                    <div className="text-right">

                        <h3 className="font-bold text-lg border-b pb-2 mb-3">
                            Payment Information
                        </h3>

                        <p>
                            Status :
                            <span className="font-semibold ml-2">
                                {statusText[order.status]}
                            </span>
                        </p>

                        <p className="mt-1">
                            Payment :
                            <span className="font-semibold ml-2">
                                {order.payment_status}
                            </span>
                        </p>

                    </div>

                </div>

                {/* Services */}

                <table className="relative w-full mt-10 border border-gray-300">

                    <thead>

                        <tr className="bg-[#293878] text-white">

                            <th className="border p-3 text-left w-20">
                                Sr No.
                            </th>

                            <th className="border p-3 text-left">
                                Service
                            </th>

                            <th className="border p-3 text-left">
                                Category
                            </th>

                            <th className="border p-3 text-left">
                                Sub Category
                            </th>

                            <th className="border p-3 text-right">
                                Amount
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {order.details?.map(
                            (item: any, index: number) => (

                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50"
                                >

                                    <td className="border p-3">
                                        {index + 1}
                                    </td>

                                    <td className="border p-3">
                                        {item.service?.name}
                                    </td>

                                    <td className="border p-3">
                                        {item.category?.name}
                                    </td>

                                    <td className="border p-3">
                                        {item.sub_category?.name}
                                    </td>

                                    <td className="border p-3 text-right font-medium">
                                        ₹{" "}
                                        {Number(
                                            item.amount
                                        ).toLocaleString()}
                                    </td>

                                </tr>

                            )
                        )}

                    </tbody>

                </table>

                {/* Total */}

                <div className="relative flex justify-end mt-8">

                    <table className="w-80 border border-gray-300">

                        <tbody>

                            <tr>

                                <td className="border p-3 font-semibold bg-gray-100">
                                    Total Amount
                                </td>

                                <td className="border p-3 text-right text-2xl font-bold text-[#293878]">
                                    ₹{" "}
                                    {Number(
                                        order.total_amount
                                    ).toLocaleString()}
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                {/* Terms */}

                <div className="relative mt-14">

                    <h3 className="font-bold text-lg mb-3">
                        Terms & Conditions
                    </h3>

                    <ul className="list-disc ml-6 text-gray-600 space-y-2">

                        <li>
                            This is a computer generated invoice.
                        </li>

                        <li>
                            Payment once completed is non-refundable.
                        </li>

                        <li>
                            Keep this invoice safely for future reference.
                        </li>

                    </ul>

                </div>

                {/* Footer */}

                <div className="relative flex justify-between items-end mt-20">

                    <div>

                        <h3 className="text-xl font-bold text-[#293878]">
                            Thank You!
                        </h3>

                        <p className="text-gray-600 mt-2">
                            We appreciate your business with MoneyHunt.
                        </p>

                    </div>

                    <div className="text-center">

                        <div className="border-t border-black w-56 mb-2"></div>

                        <p className="font-semibold">
                            Authorized Signature
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

Show.layout = (page: React.ReactNode) => (
    <AdminLayout>{page}</AdminLayout>
);