// import { Link } from '@inertiajs/react';
// import AppLogoIcon from '@/components/app-logo-icon';
// import { home } from '@/routes';
// import type { AuthLayoutProps } from '@/types';

// export default function AuthSimpleLayout({
//     children,
//     title,
//     description,
// }: AuthLayoutProps) {
//     return (
//         <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
//             <div className="w-full max-w-sm">
//                 <div className="flex flex-col gap-8">
//                     <div className="flex flex-col items-center gap-4">
//                         <Link
//                             href={home()}
//                             className="flex flex-col items-center gap-2 font-medium"
//                         >
//                             <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
//                                 <AppLogoIcon className="size-9 fill-current text-[var(--foreground)] dark:text-white" />
//                             </div>
//                             <span className="sr-only">{title}</span>
//                         </Link>

//                         <div className="space-y-2 text-center">
//                             <h1 className="text-xl font-medium">{title}</h1>
//                             <p className="text-center text-sm text-muted-foreground">
//                                 {description}
//                             </p>
//                         </div>
//                     </div>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }
// import { Link } from '@inertiajs/react';
// import AppLogoIcon from '@/components/app-logo-icon';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { home } from '@/routes';
// import type { AuthLayoutProps } from '@/types';

// export default function AuthSimpleLayout({
//     children,
//     title,
//     description,
// }: AuthLayoutProps) {
//     return (
//         <>
//             {/* Header */}
//             <Header />

//             {/* Register/Login Section */}
//             <main className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-background px-6 py-5">
//                 <div className="w-full max-w-sm">
//                     <div className="flex flex-col gap-0">
//                         <div className="flex flex-col items-center gap-0">
//                             <Link
//                                 href={home()}
//                                 className="flex flex-col items-center gap-0 font-medium"
//                             >
//                                <div className="mb-0 flex items-center justify-center">
//     <AppLogoIcon className="h-28 w-auto object-contain" />
// </div>
//                                 <span className="sr-only">{title}</span>
//                             </Link>

//                             <div className="space-y-2 text-center">
//                                 <h1 className="text-xl font-medium">
//                                     {title}
//                                 </h1>

//                                 <p className="text-sm text-muted-foreground">
//                                     {description}
//                                 </p>
//                             </div>
//                         </div>

//                         {children}
//                     </div>
//                 </div>
//             </main>

//             {/* Footer */}
//             <Footer />
//         </>
//     );
// }
import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <>
            <Header />

            <main className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-10">
                
                {/* Card */}
                <div className="w-full max-w-md">
                    <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl px-8 py-10">

                        {/* Logo Section */}
                        <div className="flex flex-col items-center text-center">

                            <Link
                                href={home()}
                                className="flex flex-col items-center group"
                            >
                                <div className="flex h-20 w-100 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500  shadow-lg group-hover:scale-105 transition">
                                    <AppLogoIcon className="h-30 w-102 text-white" />
                                </div>

                                <span className="sr-only">{title}</span>
                            </Link>

                            {/* Title */}
                            <h1 className="mt-6 text-2xl font-semibold text-slate-800">
                                {title}
                            </h1>

                            {/* Description */}
                            <p className="mt-2 text-sm text-slate-500 max-w-sm">
                                {description}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                        {/* Form */}
                        <div className="space-y-5">
                            {children}
                        </div>

                    </div>

                    {/* Bottom subtle text */}
                    <p className="mt-6 text-center text-xs text-slate-400">
                        Secure login protected with encryption
                    </p>
                </div>
            </main>

            <Footer />
        </>
    );
}