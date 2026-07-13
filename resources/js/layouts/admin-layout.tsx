import { ReactNode, useState } from "react";
import AdminSidebar from "@/components/admin/admin-sidebar";
import AdminTopbar from "@/components/admin/admin-topbar";
import AdminFooter from "@/components/admin/admin-footer";
interface Props {
    children: ReactNode;
}

export default function AdminLayout({ children }: Props) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex  h-screen bg-[#f6f7fb]">

            <AdminSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="flex flex-col flex-1">

    <AdminTopbar
        setSidebarOpen={setSidebarOpen}
    />

    <main className="flex-1 overflow-y-auto p-6">
        {children}
    </main>

    <AdminFooter />

</div>
        </div>
        
    );
}