import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Scale,
  FileCheck,
} from "lucide-react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  Send,
  Headphones,
  ShieldCheck,
  Globe,
} from "lucide-react";

export default function termsandconditions() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">

        {/* Hero Section */}

        <section className="relative bg-[#011b3b] py-24 lg:py-2">

          <div className="absolute inset-0 bg-gradient-to-r from-[#011b3b] via-[#011b3b] to-[#011b3b]" />

          <div className="container mx-auto px-5 relative z-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

            <span className="bg-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full text-sm border border-cyan-400/20">
  LEGAL DOCUMENT
</span>

<h1 className="text-5xl lg:text-6xl font-bold text-white mt-8 leading-tight">
  Terms &
  <span className="text-cyan-400"> Conditions</span>
</h1>

<p className="text-gray-300 text-lg mt-8 leading-relaxed max-w-xl">
  Please review these Terms & Conditions carefully before
  using our website and services. By accessing or using
  SetupFiling, you agree to comply with all applicable
  terms, policies, and legal obligations.
</p>

                {/* Features */}

              <div className="grid md:grid-cols-3 gap-6 mt-12">

  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
  >
    <Scale className="text-cyan-400 mb-3" size={28} />

    <h4 className="text-white font-semibold">
      Legal Compliance
    </h4>

    <p className="text-gray-400 text-sm">
      Transparent Terms
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
  >
    <ShieldCheck className="text-cyan-400 mb-3" size={28} />

    <h4 className="text-white font-semibold">
      User Protection
    </h4>

    <p className="text-gray-400 text-sm">
      Secure Experience
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
  >
    <FileCheck className="text-cyan-400 mb-3" size={28} />

    <h4 className="text-white font-semibold">
      Clear Policies
    </h4>

    <p className="text-gray-400 text-sm">
      Defined Responsibilities
    </p>
  </motion.div>

</div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-5 mt-10">

  <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
    <p className="text-gray-400 text-sm">
      Effective Date
    </p>

    <p className="text-white font-semibold">
      January 2026
    </p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
    <p className="text-gray-400 text-sm">
      Jurisdiction
    </p>

    <p className="text-white font-semibold">
      India
    </p>
  </div>

</div>

              </motion.div>

              {/* Right Image */}

              <motion.div
                className="relative flex justify-center"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <div className="absolute bg-cyan-500/20 rounded-full blur-3xl"></div>

              <motion.img
  src="/images/tearnsandcondition.png"
  alt="Terms & Conditions"
  className="relative z-10 object-contain "
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

              </motion.div>

            </div>

          </div>

        </section>
                {/* terms&condition Form Section */}

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">

  <div className="container mx-auto px-6 max-w-7xl">

    <div className="grid lg:grid-cols-12 gap-10">

      {/* Sidebar */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-3"
      >

        <div className="sticky top-28 bg-white rounded-3xl shadow-lg border border-slate-100 p-6">

          <h3 className="text-xl font-bold text-[#092646] mb-6">
            Quick Navigation
          </h3>

          <div className="space-y-3">

            {[
              "Definitions",
              "Use of Website",
              "Eligibility",
              "Services & Scope",
              "Payment Terms",
              "Responsibilities",
              "Intellectual Property",
              "Liability",
              "Third Party Services",
              "Termination",
              "Governing Law",
              "Changes",
            ].map((item, i) => (
              <div
                key={i}
                className="text-sm text-slate-600 hover:text-[#092646] cursor-pointer transition"
              >
                {i + 1}. {item}
              </div>
            ))}

          </div>

        </div>

      </motion.div>

      {/* Main Content */}

      <div className="lg:col-span-9">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden"
        >

          {/* Header */}

          <div className="bg-[#092646] p-10 relative overflow-hidden">

  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

  <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">
    LEGAL DOCUMENT
  </span>

  <h1 className="text-5xl font-bold text-white mt-6">
    Terms & Conditions
  </h1>

  <p className="text-blue-100 mt-4 text-lg">
    Last Updated: January 2026
  </p>

</div>

          {/* Body */}

          <div className="p-8 md:p-12">

            {[
              {
                no: "01",
                title: "Definitions",
                text: "‘We’, ‘Us’, ‘Our’ refers to SetupFiling.in, its team and affiliates. ‘You’ refers to any user accessing our website or services.",
              },
              {
                no: "02",
                title: "Use of Website",
                text: "You agree to use the website for lawful purposes only and shall not attempt unauthorized access or activities that may damage the website.",
              },
              {
                no: "03",
                title: "Eligibility",
                text: "You must be at least 18 years old, legally capable of entering agreements and provide accurate information.",
              },
              {
                no: "04",
                title: "Services & Scope",
                text: "Moneyhunt.in provides registration, compliance, taxation and business support services.",
              },
              {
                no: "05",
                title: "Payment Terms",
                text: "All fees must be paid in advance unless otherwise agreed. Payments are non-refundable except where stated.",
              },
              {
                no: "06",
                title: "User Responsibilities",
                text: "Users must provide accurate documents and cooperate throughout service execution.",
              },
              {
                no: "07",
                title: "Intellectual Property",
                text: "All website content including logos, graphics and service descriptions remain our property.",
              },
              {
                no: "08",
                title: "Limitation of Liability",
                text: "We shall not be liable for direct, indirect or consequential losses arising from service usage.",
              },
              {
                no: "09",
                title: "Third-Party Services",
                text: "Some services involve government portals or third-party vendors whose performance we cannot guarantee.",
              },
              {
                no: "10",
                title: "Termination",
                text: "We reserve the right to suspend or terminate access if these terms are violated.",
              },
              {
                no: "11",
                title: "Governing Law",
                text: "These Terms shall be governed under the laws of India and Delhi courts shall have exclusive jurisdiction.",
              },
              {
                no: "12",
                title: "Changes to Terms",
                text: "We may update these Terms at any time. Continued use indicates acceptance of revisions.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative pl-24 pb-12 border-l-2 border-slate-200 ml-8"
              >

                <div className="absolute -left-8 top-0 w-16 h-16 rounded-2xl bg-[#092646] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.no}
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition">

                  <h3 className="text-2xl font-bold text-[#092646] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-8">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>
      </div>

    </div>

  </div>

       </section>
    

        {/* CTA Section */}

        <section className="bg-[#092646] py-20">

          <motion.div
            className="container mx-auto px-6 text-center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-5xl font-bold text-white">
              Need Instant Assistance?
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
              Our experts are ready to help your business grow.
            </p>

            <motion.a
              href="https://wa.me/918127409027"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="inline-flex items-center gap-2 mt-8 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold transition"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </motion.a>

          </motion.div>

        </section>

        <br />

      </main>

      <Footer />

    </>
  );
}