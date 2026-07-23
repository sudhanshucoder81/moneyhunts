import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import {
    Upload,
    FileText,
    Eye,
    Download,
    CheckCircle,
    Clock,
    XCircle,
} from "lucide-react";

const documents = [
    {
        id: 1,
        name: "Aadhaar Card",
        status: "Pending",
    },
    {
        id: 2,
        name: "PAN Card",
        status: "Verified",
    },
    {
        id: 3,
        name: "Passport Size Photo",
        status: "Rejected",
    },
    {
        id: 4,
        name: "Signature",
        status: "Not Uploaded",
    },
    {
        id: 5,
        name: "Bank Passbook",
        status: "Not Uploaded",
    },
    {
        id: 6,
        name: "Income Certificate",
        status: "Not Uploaded",
    },
];

export default function Index() {
    return (
     
            <div className="p-6">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        My Documents
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Upload your documents for verification.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {documents.map((doc) => (

                        <div
                            key={doc.id}
                            className="bg-white rounded-2xl shadow border p-5 hover:shadow-lg transition"
                        >

                            <div className="flex items-center gap-3 mb-5">

                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <FileText className="text-blue-600" />
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        {doc.name}
                                    </h3>

                                    {doc.status === "Verified" && (
                                        <span className="text-green-600 text-sm flex items-center gap-1">
                                            <CheckCircle size={16} />
                                            Verified
                                        </span>
                                    )}

                                    {doc.status === "Pending" && (
                                        <span className="text-yellow-600 text-sm flex items-center gap-1">
                                            <Clock size={16} />
                                            Pending
                                        </span>
                                    )}

                                    {doc.status === "Rejected" && (
                                        <span className="text-red-600 text-sm flex items-center gap-1">
                                            <XCircle size={16} />
                                            Rejected
                                        </span>
                                    )}

                                    {doc.status === "Not Uploaded" && (
                                        <span className="text-gray-500 text-sm">
                                            Not Uploaded
                                        </span>
                                    )}

                                </div>

                            </div>

                            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
                                <Upload size={18} />
                                Upload Document
                            </button>

                            <div className="grid grid-cols-2 gap-3 mt-4">

                                <button className="border rounded-lg py-2 flex justify-center items-center gap-2 hover:bg-gray-100">
                                    <Eye size={18} />
                                    View
                                </button>

                                <button className="border rounded-lg py-2 flex justify-center items-center gap-2 hover:bg-gray-100">
                                    <Download size={18} />
                                    Download
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

    );
}