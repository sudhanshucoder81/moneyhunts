import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Link} from "@inertiajs/react";
import {
  Shield,
  Users,
  Star,
  Clock3,
  ArrowRight,
  Headphones,
  CheckCircle,
  Building2,
  Briefcase,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

export default function Reviews() {
  const stats = [
    {
      value: "50,000+",
      label: "Businesses Served",
    },
    {
      value: "1,200+",
      label: "Verified Reviews",
    },
    {
      value: "4.9/5",
      label: "Average Rating",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <>
      <Header />

      {/* ==========================
            HERO SECTION
      ========================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#07152d] via-[#0d2248] to-[#17335f] py-24">

        {/* Background Blur */}
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 text-yellow-400 font-semibold">
              <Sparkles size={18} />
              Trusted By Thousands Of Businesses
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-white mt-8 leading-tight">
              Real Reviews From
              <span className="text-yellow-400">
                {" "}Happy MoneyHunt Clients
              </span>
            </h1>

            <p className="text-gray-300 text-lg mt-8 leading-8 max-w-3xl mx-auto">
              From company registration to GST, Trademark, LLP,
              Private Limited and annual compliance — thousands of
              entrepreneurs trust MoneyHunt for fast, reliable and
              transparent business registration services across India.
            </p>

            {/* Rating Badge */}

            <div className="flex flex-wrap justify-center gap-6 mt-12">

              <div className="bg-[#16345f] border border-yellow-500/20 rounded-2xl px-8 py-5">

                <div className="flex justify-center text-yellow-400 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <h3 className="text-white font-bold text-2xl mt-2">
                  4.9 / 5
                </h3>

                <p className="text-gray-300 mt-1">
                  Average Client Rating
                </p>

              </div>

              <div className="bg-[#16345f] border border-yellow-500/20 rounded-2xl px-8 py-5">

                <h3 className="text-yellow-400 font-bold text-4xl">
                  1,200+
                </h3>

                <p className="text-gray-300 mt-2">
                  Verified Reviews
                </p>

              </div>

              <div className="bg-[#16345f] border border-yellow-500/20 rounded-2xl px-8 py-5">

                <h3 className="text-yellow-400 font-bold text-4xl">
                  50,000+
                </h3>

                <p className="text-gray-300 mt-2">
                  Businesses Served
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <Link
                href="/AllServices"
                className="bg-yellow-500 hover:bg-yellow-400 text-[#0d2248] px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/Contact"
                className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Our Experts
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================
            REVIEW STATISTICS
      ========================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#d88912] font-bold uppercase tracking-[3px]">
              Our Numbers
            </p>

            <h2 className="text-4xl font-bold text-[#0d2248] mt-4">
              Trusted By Businesses Across India
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-8">
              Every review reflects our commitment to quality,
              transparency and customer satisfaction.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-yellow-100 mx-auto flex items-center justify-center">

                  <Star
                    className="text-yellow-500"
                    size={30}
                  />

                </div>

                <h3 className="text-4xl font-bold text-[#0d2248] mt-6">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==========================
            REVIEW CARDS
            (PART-2 se continue hoga)
      ========================== */}
            <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#d88912] font-bold uppercase tracking-[3px]">
              Client Testimonials
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d2248] mt-4">
              What Our Clients Say
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
              Thousands of entrepreneurs, startups and established businesses
              have trusted MoneyHunt for registrations, compliance and legal
              services. Here's what some of them have to say.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                name: "Rohit Kapoor",
                company: "Founder, Kapoor Traders",
                review:
                  "MoneyHunt handled my Private Limited Company registration from start to finish. The entire process was smooth, transparent and completed before the expected timeline.",
              },
              {
                name: "Sneha Patil",
                company: "Owner, Patil Boutique",
                review:
                  "GST registration felt confusing until I contacted MoneyHunt. Their experts explained every step and kept me informed throughout the process.",
              },
              {
                name: "Amit Verma",
                company: "Director, Verma Tech LLP",
                review:
                  "Trademark filing was completed without any hassle. Excellent support, clear communication and absolutely no hidden charges.",
              },
              {
                name: "Priya Sharma",
                company: "Startup Founder",
                review:
                  "From incorporation to ROC compliance, everything was managed professionally. I highly recommend MoneyHunt to every startup founder.",
              },
              {
                name: "Nikhil Jain",
                company: "CEO, Jain Industries",
                review:
                  "Fast LLP registration, excellent documentation support and regular updates. Their customer service exceeded our expectations.",
              },
              {
                name: "Anjali Gupta",
                company: "Business Owner",
                review:
                  "Whenever I had questions regarding compliance, the support team responded quickly. Very knowledgeable and polite professionals.",
              },
              {
                name: "Rahul Agarwal",
                company: "Managing Director",
                review:
                  "Annual compliance became stress-free after partnering with MoneyHunt. Their reminder system ensures we never miss important deadlines.",
              },
              {
                name: "Neha Singh",
                company: "Founder, NS Creations",
                review:
                  "I registered my startup from home without visiting any office. Everything happened online and was completed much faster than expected.",
              },
              {
                name: "Vikas Sharma",
                company: "Director, VS Technologies",
                review:
                  "Professional team with excellent knowledge of company law. They answered every query patiently and guided us throughout the journey.",
              },
              {
                name: "Pooja Mehta",
                company: "Entrepreneur",
                review:
                  "The pricing was transparent, documentation was easy and the support team was always available whenever I needed help.",
              },
              {
                name: "Saurabh Mishra",
                company: "Retail Business Owner",
                review:
                  "MoneyHunt helped us obtain GST registration and MSME registration quickly. Their portal made document uploads extremely simple.",
              },
              {
                name: "Deepak Bansal",
                company: "Founder, DB Solutions",
                review:
                  "I've used several compliance companies before, but MoneyHunt stands out because of their speed, professionalism and customer-first approach.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >

                {/* Top */}

                <div className="p-8">

                  <div className="flex items-center justify-between">

                    <div className="flex text-yellow-400 text-lg">
                      ⭐⭐⭐⭐⭐
                    </div>

                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <BadgeCheck size={14} />
                      Verified
                    </span>

                  </div>

                  <p className="text-gray-600 leading-8 mt-6">
                    "{item.review}"
                  </p>

                </div>

                {/* Bottom */}

                <div className="bg-[#0d2248] px-8 py-6">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-yellow-500 text-[#0d2248] font-bold text-lg flex items-center justify-center">

                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}

                    </div>

                    <div>

                      <h3 className="text-white font-bold">
                        {item.name}
                      </h3>

                      <p className="text-gray-300 text-sm">
                        {item.company}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Bottom Rating */}

          <div className="mt-20">

            <div className="max-w-5xl mx-auto bg-[#0d2248] rounded-3xl p-10 border border-yellow-500/20">

              <div className="grid lg:grid-cols-3 gap-8 items-center">

                <div className="text-center">

                  <h2 className="text-6xl font-bold text-yellow-400">
                    4.9
                  </h2>

                  <div className="text-yellow-400 text-2xl mt-3">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="text-gray-300 mt-3">
                    Average Rating
                  </p>

                </div>

                <div className="text-center">

                  <h2 className="text-5xl font-bold text-white">
                    1,200+
                  </h2>

                  <p className="text-gray-300 mt-3">
                    Verified Customer Reviews
                  </p>

                </div>

                <div className="text-center">

                  <h2 className="text-5xl font-bold text-yellow-400">
                    50,000+
                  </h2>

                  <p className="text-gray-300 mt-3">
                    Happy Businesses Served
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================
          WHY CLIENTS TRUST MONEYHUNT
          (PART-3 se continue hoga)
      ========================== */}
            {/* ==========================
            WHY CLIENTS TRUST MONEYHUNT
      ========================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#d88912] uppercase tracking-[3px] font-bold">
              Why Choose Us
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d2248] mt-4">
              Why Thousands of Businesses Trust MoneyHunt
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
              We combine legal expertise, technology and dedicated customer
              support to make business registration and compliance completely
              hassle-free.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                icon: Shield,
                title: "100% Secure Process",
                text: "Your documents and personal information remain fully encrypted and confidential.",
              },
              {
                icon: Clock3,
                title: "Fast Turnaround",
                text: "Quick registrations with timely updates throughout every stage.",
              },
              {
                icon: Headphones,
                title: "Dedicated Experts",
                text: "Experienced professionals guide you from start to finish.",
              },
              {
                icon: Users,
                title: "50,000+ Happy Clients",
                text: "Trusted by startups, MSMEs and enterprises across India.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Icon size={30} className="text-yellow-500" />
                  </div>

                  <h3 className="text-[#0d2248] font-bold text-xl mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ==========================
            INDUSTRIES WE SERVE
      ========================== */}

      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#d88912] uppercase tracking-[3px] font-bold">
              Industries We Serve
            </p>

            <h2 className="text-4xl font-bold text-[#0d2248] mt-4">
              Trusted Across Every Business Sector
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">

            {[
              "Startups",
              "IT Companies",
              "Manufacturing",
              "Retail Shops",
              "E-Commerce",
              "Export Businesses",
              "Restaurants",
              "Healthcare",
              "Consultants",
              "Education",
              "Construction",
              "Freelancers",
            ].map((industry, index) => (

              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 flex items-center gap-4 hover:border-yellow-400 hover:shadow-lg transition"
              >
                <Building2 className="text-yellow-500" />

                <span className="font-semibold text-[#0d2248]">
                  {industry}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==========================
            CLIENT SUCCESS STORY
      ========================== */}

      <section className="py-24 bg-[#0d2248]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="text-yellow-400 uppercase tracking-[3px] font-bold">
              Success Story
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Helping Businesses Grow Faster
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">

            <div className="bg-[#17335f] rounded-2xl p-8">

              <h3 className="text-red-400 text-2xl font-bold mb-6">
                Before MoneyHunt
              </h3>

              <div className="space-y-5">

                <div className="flex gap-3 text-white">
                  ❌ Delayed GST Registration
                </div>

                <div className="flex gap-3 text-white">
                  ❌ Trademark Not Filed
                </div>

                <div className="flex gap-3 text-white">
                  ❌ Missed ROC Compliance
                </div>

                <div className="flex gap-3 text-white">
                  ❌ Confusing Documentation
                </div>

              </div>

            </div>

            <div className="bg-[#17335f] rounded-2xl p-8">

              <h3 className="text-green-400 text-2xl font-bold mb-6">
                After MoneyHunt
              </h3>

              <div className="space-y-5">

                <div className="flex gap-3 text-white">
                  ✅ GST Successfully Approved
                </div>

                <div className="flex gap-3 text-white">
                  ✅ Trademark Successfully Filed
                </div>

                <div className="flex gap-3 text-white">
                  ✅ Compliance Always On Time
                </div>

                <div className="flex gap-3 text-white">
                  ✅ Dedicated Expert Support
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================
            TRUSTED BY
      ========================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#d88912] uppercase tracking-[3px] font-bold">
              Trusted By
            </p>

            <h2 className="text-4xl font-bold text-[#0d2248] mt-4">
              Businesses That Trust MoneyHunt
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

            {[
              "ABC Pvt Ltd",
              "Kapoor Traders",
              "Verma Tech",
              "Skyline LLP",
              "Patil Boutique",
              "NextGen Solutions",
            ].map((company, index) => (

              <div
                key={index}
                className="h-24 rounded-xl border border-gray-200 flex items-center justify-center font-bold text-[#0d2248] hover:border-yellow-400 hover:bg-yellow-50 transition"
              >
                {company}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==========================
            FAQ
      ========================== */}

      <section className="py-24 bg-[#f8fafc]">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <p className="text-[#d88912] uppercase tracking-[3px] font-bold">
              Frequently Asked Questions
            </p>

            <h2 className="text-4xl font-bold text-[#0d2248] mt-4">
              Got Questions?
            </h2>

          </div>

          <div className="mt-16 space-y-5">

            {[
              {
                q: "Are these reviews genuine?",
                a: "Yes. Every testimonial is based on feedback received from our clients after successful service completion.",
              },
              {
                q: "Can I submit my own review?",
                a: "Absolutely. Once your service is completed, you can share your experience with our support team.",
              },
              {
                q: "How fast does MoneyHunt respond?",
                a: "Most customer queries are answered within a few business hours by our expert team.",
              },
              {
                q: "Which services are most reviewed?",
                a: "Private Limited Registration, LLP Registration, GST Registration, Trademark Filing and Annual Compliance.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-yellow-400 transition"
              >
                <h3 className="font-bold text-[#0d2248] text-lg">
                  {item.q}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {item.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==========================
            CTA SECTION
            (PART 4 se continue hoga)
      ========================== */}
            {/* ==========================
            FINAL CTA SECTION
      ========================== */}

      <section className="py-24 bg-gradient-to-r from-[#0d2248] via-[#17335f] to-[#0d2248]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 text-yellow-400 font-semibold">
            <BadgeCheck size={18} />
            Trusted By 50,000+ Businesses
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mt-8 leading-tight">
            Ready To Start Your
            <span className="text-yellow-400">
              {" "}Business Journey?
            </span>
          </h2>

          <p className="text-gray-300 text-lg mt-8 max-w-3xl mx-auto leading-8">
            Join thousands of entrepreneurs who trust MoneyHunt for
            company registration, GST registration, trademark filing,
            compliance management and business growth solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/AllServices"
              className="bg-yellow-500 hover:bg-yellow-400 text-[#0d2248] px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition"
            >
              Get Started Today
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/Contact"
              className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Talk To An Expert
            </Link>

          </div>

        </div>

      </section>

      {/* ==========================
            MINI TRUST BAR
      ========================== */}

      <section className="bg-[#07152d] py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                50,000+
              </h3>
              <p className="text-gray-300 mt-2">
                Businesses Served
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                1,200+
              </h3>
              <p className="text-gray-300 mt-2">
                Verified Reviews
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                4.9/5
              </h3>
              <p className="text-gray-300 mt-2">
                Average Rating
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                98%
              </h3>
              <p className="text-gray-300 mt-2">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </section>
{/* ===========================
      WHY CHOOSE US
=========================== */}

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>

<img
src="/images/aboutus.png"
className="rounded-3xl shadow-2xl"
/>

</div>

<div>

<h2 className="text-4xl font-bold">
Why Choose
<span className="text-[#243B87]">
 MoneyHunt?
</span>
</h2>

<div className="space-y-6 mt-10">

<div className="flex gap-5">

<div className="text-4xl">✅</div>

<div>

<h3 className="font-bold text-xl">
Experienced Professionals
</h3>

<p className="text-gray-600">
CA, CS & Legal Experts with years of experience.
</p>

</div>

</div>

<div className="flex gap-5">

<div className="text-4xl">⚡</div>

<div>

<h3 className="font-bold text-xl">
Fast Processing
</h3>

<p className="text-gray-600">
Quick turnaround with transparent workflow.
</p>

</div>

</div>

<div className="flex gap-5">

<div className="text-4xl">🔒</div>

<div>

<h3 className="font-bold text-xl">
Secure Documentation
</h3>

<p className="text-gray-600">
Your data remains completely safe and confidential.
</p>

</div>

</div>

<div className="flex gap-5">

<div className="text-4xl">💬</div>

<div>

<h3 className="font-bold text-xl">
Dedicated Support
</h3>

<p className="text-gray-600">
Support available before and after service completion.
</p>

</div>

</div>

</div>

</div>

</div>

</div>

</section>
{/* ===========================
      INDUSTRIES WE SERVE
=========================== */}

<section className="py-20 bg-gradient-to-b from-white to-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <span className="inline-block bg-yellow-100 text-[#d88912] px-5 py-2 rounded-full font-semibold">
        ★ Industries We Serve
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-5 text-[#243B87]">
        Trusted Across Every Industry
      </h2>

      <div className="w-28 h-1 bg-[#d88912] mx-auto mt-5 rounded-full"></div>

      <p className="mt-6 text-lg text-gray-600">
        We help startups, SMEs and enterprises from every sector with
        registration, taxation, compliance and legal services.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {[
        { icon: "🏥", title: "Healthcare" },
        { icon: "🍴", title: "Restaurant" },
        { icon: "💻", title: "IT Company" },
        { icon: "🏭", title: "Manufacturing" },
        { icon: "🛒", title: "Retail Business" },
        { icon: "🏫", title: "Education" },
        { icon: "🚚", title: "Logistics" },
        { icon: "🏗", title: "Construction" },
      ].map((item, index) => (

        <div
          key={index}
          className="group bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >

          <div className="w-20 h-20 rounded-full bg-[#243B87] text-white flex items-center justify-center text-4xl mx-auto group-hover:bg-[#d88912] transition">

            {item.icon}

          </div>

          <h3 className="mt-6 text-xl font-bold text-[#243B87]">

            {item.title}

          </h3>

          <p className="mt-3 text-gray-600 leading-7">

            Business registration, GST, taxation and compliance services.

          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* ===========================
      WHY BUSINESSES TRUST US
=========================== */}

<section className="py-20 bg-[#0f172a]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-yellow-500 text-black font-semibold">
        ⭐ Trusted Nationwide
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
        Why 50,000+ Businesses Trust MoneyHunt
      </h2>

      <p className="text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
        We combine technology with experienced professionals to deliver
        fast, transparent and reliable business compliance services.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
        <div className="text-5xl mb-5">⚡</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Fast Processing
        </h3>
        <p className="text-gray-300 leading-8">
          Most registrations are initiated within 24 hours after document verification.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
        <div className="text-5xl mb-5">👨‍💼</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Expert Professionals
        </h3>
        <p className="text-gray-300 leading-8">
          Dedicated CA, CS and legal experts handle every application professionally.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
        <div className="text-5xl mb-5">🔒</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Secure Data
        </h3>
        <p className="text-gray-300 leading-8">
          Your personal and business information is protected with secure systems.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
        <div className="text-5xl mb-5">💰</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Transparent Pricing
        </h3>
        <p className="text-gray-300 leading-8">
          No hidden charges. Clear pricing before you place your order.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
        <div className="text-5xl mb-5">📞</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Dedicated Support
        </h3>
        <p className="text-gray-300 leading-8">
          Get support through phone, WhatsApp and email whenever you need help.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
        <div className="text-5xl mb-5">🏆</div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Trusted Brand
        </h3>
        <p className="text-gray-300 leading-8">
          Thousands of startups and established businesses rely on MoneyHunt for compliance.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<span className="text-[#d88912] font-semibold">
OUR PROCESS
</span>

<h2 className="text-5xl font-bold mt-4">
Simple. Fast. Transparent.
</h2>

<p className="mt-6 text-gray-600">
We complete every registration through a streamlined process.
</p>

</div>

<div className="grid lg:grid-cols-5 gap-8">

{[
{
no:"01",
title:"Choose Service",
icon:"📋"
},
{
no:"02",
title:"Upload Documents",
icon:"📤"
},
{
no:"03",
title:"Expert Verification",
icon:"👨‍💼"
},
{
no:"04",
title:"Government Filing",
icon:"🏛"
},
{
no:"05",
title:"Certificate Delivered",
icon:"🎉"
}
].map((item,index)=>(

<div
key={index}
className="text-center relative"
>

<div className="w-24 h-24 rounded-full bg-[#243B87] text-white flex items-center justify-center text-5xl mx-auto">

{item.icon}

</div>

<h3 className="font-bold text-2xl mt-6">
{item.title}
</h3>

<p className="text-yellow-500 font-bold mt-3">
STEP {item.no}
</p>

</div>

))}

</div>

</div>

</section>

      <Footer />

    </>
  );
}