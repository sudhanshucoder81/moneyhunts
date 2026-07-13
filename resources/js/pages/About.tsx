import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Briefcase,
    FileCheck
} from "lucide-react";
import {
    Linkedin,
    Facebook,
    Instagram,
    Twitter,
    Mail
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";


      import { Target, Eye, Gem } from "lucide-react";
import {
  ChevronDown,
  ChevronRight,
  Phone
} from "lucide-react";
export default function About() {
    const stats = [
        { number: "10K+", label: "Happy Clients" },
        { number: "500+", label: "Businesses Registered" },
        { number: "99%", label: "Success Rate" },
        { number: "24/7", label: "Support Available" },
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 border border-yellow-500 rounded-full px-5 py-2 mb-8 bg-white/5">
                                <TrendingUp size={18} className="text-yellow-400" />
                                <span className="font-semibold">
                                    About Moneyhunt.in
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Empowering Businesses
                                <span className="block text-yellow-400">
                                    Through Smart Financial
                                </span>
                                Solutions
                            </h1>

                            <div className="w-28 h-1 bg-yellow-500 mt-8 mb-8"></div>

                            <p className="text-lg text-gray-300 leading-8 max-w-2xl">
                                Moneyhunt.in helps startups, entrepreneurs and
                                growing companies streamline registrations,
                                compliance, taxation and financial management
                                with expert-driven digital solutions.
                            </p>

                          {/* Buttons */}
<div className="flex flex-wrap gap-4 mt-5">
    <button className="bg-yellow-600 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition">
        Learn More
        <ArrowRight size={18} />
    </button>

    <button className="border border-green-500 bg-green-700 hover:bg-green-600 px-8 py-4 rounded-lg font-semibold transition">
        Talk To Expert
    </button>
</div>

{/* Stats Row */}
<div className="flex flex-wrap items-center gap-6 mt-10 text-white">
    <div>
        <h3 className="text-3xl font-bold text-yellow-400">10K+</h3>
        <p className="text-sm text-gray-300">Happy Clients</p>
    </div>

    <div className="h-12 w-px bg-gray-600"></div>

    <div>
        <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
        <p className="text-sm text-gray-300">Businesses Registered</p>
    </div>

    <div className="h-12 w-px bg-gray-600"></div>

    <div>
        <h3 className="text-3xl font-bold text-yellow-400">99%</h3>
        <p className="text-sm text-gray-300">Success Rate</p>
    </div>

    <div className="h-12 w-px bg-gray-600"></div>

    <div>
        <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
        <p className="text-sm text-gray-300">Support Available</p>
    </div>
</div>
                        </div>

                        {/* Right Side */}
                        <div className="relative h-[550px] hidden lg:block">

                            <div className="absolute top-10 left-8 bg-white text-black p-5 rounded-2xl shadow-xl">
                                <Briefcase className="text-blue-700 mb-2" />
                                <h4 className="font-bold">Business Setup</h4>
                            </div>

                            <div className="absolute top-0 right-10 bg-white text-black p-5 rounded-2xl shadow-xl">
                                <FileCheck className="text-green-700 mb-2" />
                                <h4 className="font-bold">GST Compliance</h4>
                            </div>

                            <div className="absolute top-52 left-0 bg-white text-black p-5 rounded-2xl shadow-xl">
                                <ShieldCheck className="text-yellow-600 mb-2" />
                                <h4 className="font-bold">Trademark Protection</h4>
                            </div>

                            <div className="absolute top-44 right-0 bg-white text-black p-5 rounded-2xl shadow-xl">
                                <FileCheck className="text-purple-700 mb-2" />
                                <h4 className="font-bold">ROC Filing</h4>
                            </div>

                            {/* Center Image */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                                <img
                                    src="/images/aboutbusiness.png"
                                    alt="Business Expert"
                                    className="w-[420px] object-contain drop-shadow-2xl"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>
{/* Mission Vision Section */}
<section className="py-5 ">
    <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
            <span className="text-yellow-600 font-semibold uppercase tracking-wider">
                Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                Building Business Success
                <span className="text-blue-700"> Through Expertise</span>
            </h2>

            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-5"></div>

            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
                We help entrepreneurs, startups, and growing businesses
                simplify registrations, compliance, taxation, and legal
                processes through technology-driven solutions and expert
                guidance.
            </p>
        </div>

<div className="grid lg:grid-cols-3 gap-8 mt-14">

    {/* Mission */}
    <div className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
            <Target size={32} className="text-blue-600" />
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
        </h3>

        <p className="text-gray-600 leading-8">
            To empower startups and businesses with affordable,
            transparent and reliable registration, taxation and
            compliance solutions that help them grow confidently.
        </p>

    </div>

    {/* Vision */}
    <div className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>

        <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6">
            <Eye size={32} className="text-yellow-600" />
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Vision
        </h3>

        <p className="text-gray-600 leading-8">
            To become India's most trusted digital business platform,
            helping entrepreneurs simplify compliance and focus on
            building successful companies.
        </p>

    </div>

    {/* Values */}
    <div className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>

        <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
            <Gem size={32} className="text-green-600" />
        </div>

        <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Core Values
        </h3>

        <ul className="space-y-3 text-gray-600">
            <li>✓ Transparency & Trust</li>
            <li>✓ Customer First Approach</li>
            <li>✓ Professional Excellence</li>
            <li>✓ Innovation & Growth</li>
        </ul>

    </div>

</div>
    </div>
</section>
 <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-8">

        <span className="inline-block px-6 py-2 rounded-full bg-amber-100 text-[#d4941f] font-semibold">
            ★ Expert Team
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-black mt-5">
            Led By Practicing
            <span className="text-[#d4941f]"> Professionals</span>
        </h2>

        <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-5 rounded-full"></div>

    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/founder.jpeg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Prateek Kumar
                    </h3>

                    <p className="tracking-[4px] text-[#273a8a] text-sm uppercase mt-2">
                        Founder & CEO
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                15+ years in corporate taxation and MCA compliance.
                Former Big Four practice lead passionate about helping
                businesses achieve sustainable growth.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-amber-500 to-orange-500"></div>

        </div>

        {/* CARD 2 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/cofounder.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Riya Rai
                    </h3>

                    <p className="tracking-[4px] text-600 text-[#273a8a] text-sm uppercase mt-2">
                        Co-Founder
                    </p>

                     <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                Expert in financial strategy, startup consulting,
                taxation planning and business transformation.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-blue-500 to-indigo-600"></div>

        </div>

        {/* CARD 3 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/expert1.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Rahul Sharma
                    </h3>

                    <p className="tracking-[4px] text-600 text-[#273a8a] text-sm uppercase mt-2">
                        Tax Expert
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                Expert in taxation, GST, auditing and regulatory
                compliance with extensive industry experience.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-green-500 to-emerald-600"></div>

        </div>

        {/* CARD 4 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/expert2.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Priya Singh
                    </h3>

                    <p className="tracking-[4px] text-600 text-sm uppercase text-[#273a8a] mt-2">
                        Compliance Head
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                Specialized in ROC filings, company registration,
                startup compliance and legal documentation.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-purple-500 to-pink-600"></div>

        </div>

    </div>
 

</div>
 <section className="bg-blue-950 text-white py-20">
                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-5xl font-bold">
                        Ready To Grow Your Business?
                    </h2>

                    <p className="mt-6 text-slate-300 text-lg">
                        Let our experts help you with registrations,
                        taxation and compliance.
                    </p>

                    <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold">
                        Get Started Today
                    </button>

                </div>
            </section>
            <br></br>
            <Footer />
        </>
    );
}