import { Menu } from "lucide-react";

interface Props {
    setSidebarOpen: (value: boolean) => void;
}

export default function AdminTopbar({ setSidebarOpen }: Props) {
    return (
        <div className="h-16 bg-[#293878] text-white flex items-center justify-between px-4 shadow">

            <div className="flex items-center gap-3">

                {/* Mobile Menu */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden"
                >
                    <Menu size={24} />
                </button>

                <h1 className="text-xl font-bold">
                    Admin Panel
                </h1>

            </div>

            <div className="hidden md:flex items-center gap-4">

                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Live
                </span>

                <span>Welcome Admin 👋</span>

            </div>

        </div>
    );
}