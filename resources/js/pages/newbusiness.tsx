import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Shield,
  Users,
  Star,
  Clock3,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function NewBusiness() {
  return (
    <>
      <Header />

      <main>
       <section className="relative min-h-screen overflow-hidden bg-[#001c3d]">
  
  {/* Right Side Image */}
  <div className="absolute top-0 right-0 h-full w-full lg:w-[55%]">
    <img
      src="/images/business1.png"
      alt="Business Team"
      className="w-full h-full object-cover object-right"
    />

    {/* Fade Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#001c3d] via-[#001c3d]/80 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#001c3d]" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
    <div className="max-w-3xl text-white">

      <div className="inline-flex items-center gap-3 border border-yellow-500 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
        <span className="text-yellow-400 text-xl">⭐</span>
        <span className="font-semibold">
          Thinking about your next step? Let SetupFiling guide you.
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
        Start Your Business Journey with Ease
      </h1>

      <p className="text-lg md:text-xxl text-white/90 leading-relaxed mb-10">
        Launch and grow your business with confidence. From company registration
        to GST and trademark services, SetupFiling delivers a seamless, fast,
        and AI-powered experience.
      </p>

      <button className="bg-[#c57a00] hover:bg-[#b26d00] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300">
        <ArrowRight size={22} />
        See Our Articles
      </button>

    </div>
  </div>

</section>
<section className="mt-5 py-8 mb-10">

    <div className="max-w-7xl mx-auto px-6">
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog1.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                       How to Register for GST Online in India | Step-by-Step Guide
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        Learn how to register for GST online in India. Get ...
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog2.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                        Is MSME registration mandatory for sole proprietorship?
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        Is MSME registration mandatory for sole proprietorship? Learn eligibility, benefits, ...
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog3.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                       How to Resolve a Trademark Objection in India
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                       Learn how to resolve trademark objection in India with proper ...
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>
<div className="max-w-7xl mx-auto px-6 mt-8">
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog1.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                       Class 43 Trademark Registration in India
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        Apply for Class 43 Trademark Registration in India: Protect Your ...
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog2.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                        How to File GSTR 3B Nil Return Online — Complete Step-by-Step Guide
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        Learn how to file GSTR 3B Nil Return online quickly ...
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog3.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                       Income Tax Return Filing for Government Employees | Easy ITR Filing Online
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                       Income Tax Return Filing for Government Employees made simple. File ...
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>
      </main>

      <Footer />
    </>
  );
}