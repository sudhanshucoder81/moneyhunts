export default function AdminFooter() {
    return (
        <footer className="bg-white border-t border-gray-200 px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between">

                {/* Left - Mobile & Desktop */}
                <div className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-[#293878]">
                        MoneyHunt
                    </span>
                    . All Rights Reserved.
                </div>

                {/* Right - Desktop Only */}
                <div className="hidden md:block text-sm text-gray-500">
                    Developed by{" "}
                    <span className="font-semibold text-[#293878]">
                        GK Technology
                    </span>
                </div>

            </div>
        </footer>
    );
}