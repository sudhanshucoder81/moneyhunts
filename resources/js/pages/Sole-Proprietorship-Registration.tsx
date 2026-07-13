import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Variants } from "framer-motion";
import {
  Check,
  BadgeCheck,
  BriefcaseBusiness,
  Shield,
  Users,
  Star,
  Clock3,
  ArrowRight,
  Headphones,
} from "lucide-react";
import {
  X,
  FileText,
  Building2,
  ReceiptIndianRupee,
  Landmark,
  CircleHelp,
  Phone,
  ChevronDown,
  ShieldCheck,
  Scale,
  WalletCards,
  UserRoundCheck,
  FileCheck2,
  Lightbulb,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
export default function SoleProprietorshipRegistration() {
  const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
  const packages = [
    {
      name: "Silver Package",
      price: "1,999",
      oldPrice: "",
      recommended: false,
      features: [
        "Professional Assistance",
        "GST Registration",
        "MSME Registration",
      ],
    },
    {
      name: "Gold Package",
      price: "3,599",
      oldPrice: "7,198",
      recommended: true,
      features: [
        "Professional Assistance",
        "GST Registration",
        "MSME Registration",
        "GST Filing for 1 Year",
      ],
    },
    {
      name: "Premium Package",
      price: "10,599",
      oldPrice: "21,198",
      recommended: false,
      features: [
        "Professional Assistance",
        "GST Registration",
        "MSME Registration",
        "GST Filing for 1 Year",
        "Trademark Application Filing",
      ],
    },
  ];

  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
      <section className="relative min-h-[85vh] overflow-hidden bg-[#f6f6f8] border-t-1 border-[#d7e0e8]">
  <div className="max-w-7xl mx-auto px-6 py-16 lg:py-15">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-28 lg:pb-24">
      {/* LEFT CONTENT */}
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3 border border-yellow-500 rounded-full px-6 py-3 mb-8 bg-[#ddeff5]"
        >
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="font-semibold text-black">
            Trusted by 50,000+ Businesses Across India
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-4xl font-bold leading-tight mb-2 text-black"
        >
          Sole Proprietorship Registration
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="w-28 h-1 bg-yellow-500 mt-3 mb-8 rounded-full"
        />

        <motion.p
          variants={fadeUp}
          className="text-lg text-black/85 leading-relaxed mb-10"
        >
          CA-Guided &amp; 100% Online Process. Sole Proprietorship Registration
          is India’s easiest business structure, now even simpler to set up. No
          complex paperwork, no hidden fees — just a clear, step-by-step process
          guided by our team of qualified Chartered Accountants with 15+ years
          of experience.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#c57a00] hover:bg-[#b26d00] text-white px-8 py-4 rounded font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <ArrowRight size={22} />
            View Our Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#001c3d] text-white hover:bg-[#00316a] px-8 py-4 rounded font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Headphones size={22} />
            Talk to an Expert
          </motion.button>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative flex justify-center lg:justify-end"
        initial={{ opacity: 0, x: 45 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-full max-w-[570px]"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          whileHover={{ y: -8 }}
        >
          <img
            src="/images/SoleProprietorshipRegistration.png"
            alt="Sole Proprietorship Registration"
            className="relative w-full h-auto max-h-[510px] object-cover rounded-[28px] shadow-xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -3 }}
            className="absolute -bottom-5 -left-4 md:left-[-25px] bg-[#001c3d] text-white rounded-2xl px-6 py-4 shadow-xl border border-white/10"
          >
            <p className="text-sm text-white/70">Easy Registration</p>
            <p className="text-xl font-bold">Start Your Business Today</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* BOTTOM STATS */}
  <div className="relative lg:absolute lg:bottom-0 lg:left-0 lg:right-0 bg-[#001c3d] border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-4 p-5 md:p-6 border-r border-b lg:border-b-0 border-white/20">
          <Shield size={40} className="text-white shrink-0" />
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold">100%</h3>
            <p className="text-white/90 text-sm md:text-base">Secure Process</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-white/20">
          <Users size={40} className="text-white shrink-0" />
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold">50,000+</h3>
            <p className="text-white/90 text-sm md:text-base">Happy Clients</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 md:p-6 border-r border-white/20">
          <Star size={40} className="text-white shrink-0" />
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold">4.8+</h3>
            <p className="text-white/90 text-sm md:text-base">Customer Rating</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 md:p-6">
          <Clock3 size={40} className="text-white shrink-0" />
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold">24/7</h3>
            <p className="text-white/90 text-sm md:text-base">Quick Support</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* PACKAGES SECTION */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f0fb] text-[#092646] px-4 py-2 text-sm font-semibold mb-4">
                <BadgeCheck size={17} className="text-[#c57a00]" />
                Transparent Pricing
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#092646]">
                Choose the Best Proprietorship Firm Package
              </h2>

              <p className="text-gray-600 mt-4 text-base md:text-lg">
                Start your business with a simple, secure and CA-guided online
                registration process.
              </p>
            </div>

          <motion.div
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={staggerContainer}
>
  {packages.map((item) => (
    <motion.div
      key={item.name}
      variants={zoomIn}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-white rounded-2xl border p-7 transition-all duration-300 hover:shadow-2xl ${
        item.recommended
          ? "border-[#c57a00] shadow-xl ring-1 ring-[#c57a00]/20"
          : "border-gray-200 shadow-md"
      }`}
    >
      {item.recommended && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#c57a00] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg"
        >
          Most Recommended
        </motion.div>
      )}

      <div className="flex items-start justify-between gap-3 mb-5">
        <div>
          <h3 className="text-2xl font-bold text-[#092646]">{item.name}</h3>
          <p className="text-sm text-green-600 font-semibold mt-2">
            100% Money-Back Guarantee
          </p>
        </div>

        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-12 h-12 rounded-xl bg-[#eaf1fb] flex items-center justify-center"
        >
          <BriefcaseBusiness className="text-[#092646]" size={25} />
        </motion.div>
      </div>

      <div className="mb-7">
        {item.oldPrice && (
          <p className="text-gray-400 line-through text-base mb-1">
            ₹ {item.oldPrice}
          </p>
        )}

        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-[#092646]">
            ₹ {item.price}
          </span>
          <span className="text-gray-500 mb-1">only</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-5 mb-7">
        <p className="font-semibold text-[#092646] mb-4">
          Package Includes:
        </p>

        <ul className="space-y-3">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-gray-600"
            >
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check size={14} className="text-green-600" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className={`w-full py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
          item.recommended
            ? "bg-[#c57a00] hover:bg-[#aa6800] text-white"
            : "bg-[#092646] hover:bg-[#123b67] text-white"
        }`}
      >
        Apply Now
        <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  ))}
</motion.div>
          </div>
        </section>
         <section className="bg-[#092646] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="bg-white/10 border border-white/15 rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#c57a00] text-white flex items-center justify-center">
                <CircleHelp size={28} />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Do you have any Query?
                </h2>
                <p className="text-white/75 mt-2 max-w-2xl">
                  Do you have any queries about sole proprietorship registration
                  packages? Contact us for clear guidance today.
                </p>
              </div>
            </div>

            <a
              href="tel:+919818209246"
              className="inline-flex justify-center items-center gap-3 bg-[#c57a00] hover:bg-[#b16c00] text-white font-bold px-7 py-4 rounded-lg transition-all duration-300 whitespace-nowrap"
            >
              <Phone size={20} />
              +91 9818209246
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
                Sole Proprietorship in India
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3 leading-tight">
                Simple, Affordable &amp; Easy to Start
              </h2>

              <p className="text-gray-600 leading-relaxed mt-6 text-base md:text-lg">
                A sole proprietorship does not require a single central
                registration in India. What you do need are the right supporting
                registrations — GST, Shop &amp; Establishment and Udyam — to
                legally operate, open a bank account and access government
                schemes.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4 text-base md:text-lg">
                Our team handles the documentation, application process and
                follow-ups so you can focus on starting and growing your
                business.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 text-[#c57a00] font-bold hover:gap-3 transition-all">
                Start Your Registration
                <ArrowRight size={19} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-[#f6f9fd] p-6 border border-[#e3ebf6]">
                <div className="w-12 h-12 rounded-xl bg-[#092646] text-white flex items-center justify-center mb-5">
                  <UserRoundCheck size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#092646]">
                  One Owner
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Owned and managed by one individual with complete business
                  control.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff8eb] p-6 border border-[#f6e2b9]">
                <div className="w-12 h-12 rounded-xl bg-[#c57a00] text-white flex items-center justify-center mb-5">
                  <WalletCards size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#092646]">
                  Low Cost
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Lower setup cost and easier compliance compared to companies.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6f9fd] p-6 border border-[#e3ebf6]">
                <div className="w-12 h-12 rounded-xl bg-[#092646] text-white flex items-center justify-center mb-5">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#092646]">
                  Quick Start
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Start operations quickly with minimum paperwork and guidance.
                </p>
              </div>

              <div className="rounded-2xl bg-[#fff8eb] p-6 border border-[#f6e2b9]">
                <div className="w-12 h-12 rounded-xl bg-[#c57a00] text-white flex items-center justify-center mb-5">
                  <FileCheck2 size={24} />
                </div>
                <h3 className="font-bold text-xl text-[#092646]">
                  Easy Compliance
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  Business income is generally reported with the owner&apos;s
                  income tax return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-[#f6f9fd] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
              Why Choose It
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3">
              Why People Choose Sole Proprietorship
            </h2>

            <p className="text-gray-600 mt-4">
              A practical choice for freelancers, consultants, traders and
              small business owners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Easy to Start", "Very few formalities compared to other business types."],
              ["Low Cost", "Registration and compliance costs are usually lower."],
              ["Full Control", "The owner makes all business decisions independently."],
              ["Keeps All Profits", "Business profits belong directly to the proprietor."],
              ["Simple Tax Filing", "Business income is generally filed as personal income."],
              ["Fast Decisions", "No partners or board approvals are required."],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#e8f0fb] text-[#092646] font-bold flex items-center justify-center mb-5">
                  0{index + 1}
                </div>

                <h3 className="font-bold text-xl text-[#092646]">{title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#fff8eb] border-l-4 border-[#c57a00] rounded-r-xl px-6 py-5 text-gray-700">
            <span className="font-bold text-[#092646]">Important:</span> The
            owner is personally responsible for all business debts and losses,
            because there is no separate legal identity between the owner and
            the business.
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
         <motion.div
  className="text-center max-w-3xl mx-auto mb-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={fadeUp}
>
  <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
    Required Documents
  </span>

  <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3">
    Documents Required for Registration
  </h2>
</motion.div>

          <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#092646] px-7 py-5 flex items-center gap-3">
                <FileText className="text-[#f5b942]" />
                <h3 className="text-white text-xl font-bold">
                  Proprietor Documents
                </h3>
              </div>

              <ul className="p-7 space-y-4">
                {[
                  "Self-attested copy of PAN Card",
                  "Self-attested copy of Aadhaar Card",
                  "Photograph of Applicant",
                  "Cancelled Cheque of Proprietor",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <Check className="text-green-600 shrink-0 mt-0.5" size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#c57a00] px-7 py-5 flex items-center gap-3">
                <Building2 className="text-white" />
                <h3 className="text-white text-xl font-bold">
                  Business Address Proof
                </h3>
              </div>

              <ul className="p-7 space-y-4">
                {[
                  "Electricity Bill / Property Tax Receipt / Sale Deed",
                  "Rent Agreement, if premises are rented",
                  "NOC from Owner of Premises",
                  "Property Owner PAN Card and Aadhaar Card",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <Check className="text-green-600 shrink-0 mt-0.5" size={19} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f6f9fd] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
              Registration Process
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3">
              How to Register a Sole Proprietorship in India
            </h2>

            <p className="text-gray-600 mt-4">
              Follow these simple steps to make your business operational.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              ["01", "Get PAN Card", "Your personal PAN card is used for proprietorship business."],
              ["02", "Choose Business Name", "Choose a unique name and check trademark availability."],
              ["03", "Shop & Establishment", "Get business address proof as required by your state."],
              ["04", "Apply for GST", "Apply if turnover or business activity requires GST registration."],
              ["05", "Get Udyam Registration", "Register as MSME to access benefits and government schemes."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <span className="text-5xl font-bold text-[#e8f0fb] absolute top-3 right-4">
                  {number}
                </span>

                <div className="relative">
                  <div className="w-11 h-11 rounded-lg bg-[#092646] text-white flex items-center justify-center mb-5">
                    <FileCheck2 size={21} />
                  </div>

                  <h3 className="font-bold text-[#092646] text-lg">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-3">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
                Ongoing Compliance
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3 leading-tight">
                Compliance for Sole Proprietor
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Running a proprietorship is simple, but some annual and periodic
                compliance requirements still need attention.
              </p>

              <div className="mt-8 bg-[#092646] rounded-2xl p-7 text-white">
                <ShieldCheck className="text-[#f5b942]" size={34} />
                <h3 className="font-bold text-xl mt-4">
                  Need help with compliance?
                </h3>
                <p className="text-white/70 mt-2">
                  Our experts can help you manage GST, ITR, TDS and other
                  business filings.
                </p>

                <a
                  href="tel:+919818209246"
                  className="inline-flex items-center gap-2 mt-5 text-[#f5b942] font-bold"
                >
                  Talk to an Expert <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Income Tax Return Filing", "File ITR every year. Business income is generally taxed as personal income."],
                ["GST Return Filing", "If GST registered, file applicable GSTR returns monthly or quarterly."],
                ["TDS Deduction & Filing", "Deduct TDS and file quarterly returns when applicable."],
                ["Separate Business Account", "Maintain a separate current account for better financial management."],
                ["Annual Licence Renewal", "Renew Shop & Establishment and other licences when required."],
                ["Advance Tax Payments", "Pay advance tax if estimated annual tax liability exceeds applicable limits."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="flex gap-5 bg-[#f8fbff] border border-[#e3ebf6] rounded-xl p-5"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#e8f0fb] text-[#092646] flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#092646]">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISADVANTAGES */}
      <section className="bg-[#fff8eb] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
              Things to Know
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3">
              Disadvantages of Sole Proprietorship
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              ["Unlimited Liability", "Personal savings and property can be at risk for business debts."],
              ["Funding Difficulty", "Investors and banks may prefer LLPs or private limited companies."],
              ["No Perpetual Existence", "Business continuity depends directly on the owner."],
              ["Limited Scalability", "You cannot issue shares or add equity partners."],
              ["Lower Credibility", "Some corporates and tenders prefer registered companies."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-[#f0d9a9] p-6"
              >
                <AlertTriangle className="text-[#c57a00]" size={27} />
                <h3 className="font-bold text-[#092646] mt-5">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
              Business Structure Guide
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3">
              Sole Proprietorship vs Private Limited Company
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-[#cfe0f5] overflow-hidden">
              <div className="bg-[#092646] text-white px-7 py-5">
                <h3 className="text-2xl font-bold">
                  Choose Sole Proprietorship If
                </h3>
              </div>

              <ul className="p-7 space-y-4">
                {[
                  "You are a freelancer, consultant, trader or solo service provider",
                  "You want to test a business idea with low startup cost",
                  "You want simple compliance and full control",
                  "You are not looking for external funding immediately",
                  "Your business operations are small or early-stage",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <Check className="text-green-600 shrink-0 mt-0.5" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#f1d89f] overflow-hidden">
              <div className="bg-[#c57a00] text-white px-7 py-5">
                <h3 className="text-2xl font-bold">
                  Choose Private Limited If
                </h3>
              </div>

              <ul className="p-7 space-y-4">
                {[
                  "You plan to raise venture capital or angel investment",
                  "You need limited liability protection",
                  "You want to build a team and offer ESOPs",
                  "You are targeting corporate or government contracts",
                  "You want long-term brand credibility and continuity",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600">
                    <Check className="text-green-600 shrink-0 mt-0.5" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
        {/* CONVERSION */}
      <section className="bg-[#f6f9fd] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c57a00] font-bold tracking-wider uppercase text-sm">
                Grow Your Business
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#092646] mt-3 leading-tight">
                Convert Sole Proprietorship to Private Limited Company
              </h2>

              <p className="text-gray-600 leading-relaxed mt-5">
                If your business grows, you can incorporate a new private
                limited company and transfer the proprietorship business assets,
                contracts, client relationships and registrations to the new
                company.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4">
                There is no direct conversion provision. A new company is formed
                first and the existing business is transferred through proper
                documentation.
              </p>

              <button className="mt-8 bg-[#c57a00] hover:bg-[#b16c00] text-white px-7 py-4 rounded-lg font-bold inline-flex items-center gap-2">
                Talk to Our Expert
                <ArrowRight size={19} />
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 md:p-8">
              <h3 className="text-2xl font-bold text-[#092646] mb-6">
                Conversion Process
              </h3>

              <div className="space-y-5">
                {[
                  "Incorporate a new Private Limited Company",
                  "Pass a Board Resolution to take over the business",
                  "Execute a Business Transfer Agreement",
                  "Transfer or apply fresh GST registration",
                  "Update bank accounts, contracts and licences",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#092646] text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    <p className="text-gray-700 pt-2">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#092646] py-16 md:py-20">
       <motion.section
  className="bg-[#092646] py-16 md:py-20"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <div className="max-w-5xl mx-auto px-5 text-center">
    <motion.div
      animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <Lightbulb className="mx-auto text-[#f5b942]" size={42} />
    </motion.div>

    <h2 className="text-3xl md:text-5xl font-bold text-white mt-5">
      Ready to Start Your Business Journey?
    </h2>

    <p className="text-white/75 text-lg mt-5 max-w-3xl mx-auto">
      Join 50,000+ entrepreneurs who trusted Moneyhunt.in for business
      registration. Our CA-guided process is online, transparent and affordable.
    </p>

    <motion.a
      whileHover={{ scale: 1.06, y: -3 }}
      whileTap={{ scale: 0.96 }}
      href="tel:+919818209246"
      className="inline-flex items-center gap-3 bg-[#c57a00] hover:bg-[#b16c00] text-white px-8 py-4 rounded-lg font-bold mt-8 transition-all"
    >
      <Phone size={21} />
      +91 8127409027
    </motion.a>
  </div>
</motion.section>
      </section>

      </main>

      <Footer />
    </>
  );
}