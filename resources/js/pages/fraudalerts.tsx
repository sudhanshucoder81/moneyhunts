import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import {
  ShieldAlert,
  Globe,
  Mail,
  Phone,
  ShieldCheck,
  TriangleAlert,
  Building2,
  Scale,
} from "lucide-react";

export default function FraudAlerts() {
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <Header />

      <main>

        {/* HERO SECTION */}

        <section className="relative h-[350px] md:h-[520px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1800&auto=format&fit=crop"
            alt="Fraud Alert"
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#001c3d] via-[#001c3d]/90 to-black/70" />

          <div className="absolute inset-0 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-24 h-24 rounded-full bg-red-500/20 border border-red-400 flex items-center justify-center backdrop-blur-md mb-6"
            >
              <ShieldAlert
                size={52}
                className="text-red-400"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              Fraud Alert
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-blue-100 text-lg md:text-xl max-w-4xl mt-5 leading-8"
            >
              Protect yourself from fraudulent websites, fake communications,
              unauthorized representatives and misleading activities falsely
              claiming association with SetupFiling.in.
            </motion.p>

          </div>
        </section>

        {/* CONTENT */}

        <section className="bg-gradient-to-b from-slate-50 via-white to-blue-50 py-24">

          <div className="max-w-7xl mx-auto px-6">

            {/* FRAUD NOTICE */}

            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white rounded-[35px] p-8 md:p-12 shadow-[0_15px_60px_rgba(220,38,38,0.30)] mb-24"
            >

              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">

                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">

                  <TriangleAlert size={52} />

                </div>

                <div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Important Fraud Notice
                  </h2>

                  <p className="text-red-100 text-lg leading-8">
                    Certain individuals, organizations and websites may use
                    names, domains, email addresses and contact information
                    deceptively similar to SetupFiling.in to mislead customers,
                    vendors and the general public.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* HEADING */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >

              <span className="inline-block bg-blue-100 text-[#001c3d] px-5 py-2 rounded-full text-sm font-semibold mb-4">
                SECURITY INFORMATION
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#001c3d]">
                Examples of Fraudulent Activities
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-5 rounded-full"></div>

            </motion.div>

            {/* FRAUD CARDS */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">

              {/* CARD 1 */}

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] p-8 border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,28,61,0.15)] transition-all duration-500 relative overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">

                  <Globe
                    size={50}
                    className="text-red-600 mb-5 group-hover:scale-125 transition-all duration-500"
                  />

                  <h3 className="text-2xl font-bold text-[#001c3d] mb-4">
                    Fake Domains
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Fraudsters may create websites that closely resemble
                    SetupFiling.in and attempt to collect sensitive user data.
                  </p>

                </div>

              </motion.div>

              {/* CARD 2 */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] p-8 border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,28,61,0.15)] transition-all duration-500 relative overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">

                  <Mail
                    size={50}
                    className="text-red-600 mb-5 group-hover:scale-125 transition-all duration-500"
                  />

                  <h3 className="text-2xl font-bold text-[#001c3d] mb-4">
                    Fake Emails
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Unofficial emails pretending to represent the company may
                    request confidential information or payments.
                  </p>

                </div>

              </motion.div>

              {/* CARD 3 */}

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] p-8 border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,28,61,0.15)] transition-all duration-500 relative overflow-hidden"
              >

                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">

                  <Phone
                    size={50}
                    className="text-red-600 mb-5 group-hover:scale-125 transition-all duration-500"
                  />

                  <h3 className="text-2xl font-bold text-[#001c3d] mb-4">
                    Fraud Calls
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Fraudulent callers may impersonate support agents and ask
                    for payments, OTPs or account details.
                  </p>

                </div>

              </motion.div>

            </div>
                        {/* ================= OFFICIAL COMMUNICATION CHANNELS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-100 text-[#001c3d] px-5 py-2 rounded-full text-sm font-semibold mb-4">
                VERIFIED CONTACTS
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#001c3d]">
                Official Communication Channels
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-5 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">

              {/* Website */}

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-[#001c3d] via-[#002b5c] to-[#004c99]
                text-white rounded-[30px] p-8
                shadow-[0_10px_40px_rgba(0,28,61,0.25)]
                hover:-translate-y-3 hover:scale-[1.03]
                transition-all duration-500"
              >
                <Globe
                  size={50}
                  className="mb-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500"
                />

                <h3 className="text-2xl font-bold mb-3">
                  Website
                </h3>

                <p className="text-blue-100">
                  www.moneyhunt.in
                </p>
              </motion.div>

              {/* Email */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] p-8 border border-slate-200
                shadow-lg hover:shadow-2xl hover:border-blue-300
                hover:-translate-y-3 hover:scale-[1.03]
                transition-all duration-500"
              >
                <Mail
                  size={50}
                  className="mb-5 text-[#001c3d] group-hover:scale-125 transition-all duration-500"
                />

                <h3 className="text-2xl font-bold text-[#001c3d] mb-3">
                  Email
                </h3>

                <p className="text-gray-600">
                  help@moneyhunt.in
                </p>
              </motion.div>

              {/* Phone */}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] p-8 border border-slate-200
                shadow-lg hover:shadow-2xl hover:border-blue-300
                hover:-translate-y-3 hover:scale-[1.03]
                transition-all duration-500"
              >
                <Phone
                  size={50}
                  className="mb-5 text-[#001c3d] group-hover:scale-125 transition-all duration-500"
                />

                <h3 className="text-2xl font-bold text-[#001c3d] mb-3">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 8127409027
                </p>
              </motion.div>

              {/* Security */}

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[30px] p-8 border border-slate-200
                shadow-lg hover:shadow-2xl hover:border-blue-300
                hover:-translate-y-3 hover:scale-[1.03]
                transition-all duration-500"
              >
                <ShieldCheck
                  size={50}
                  className="mb-5 text-[#001c3d] group-hover:scale-125 transition-all duration-500"
                />

                <h3 className="text-2xl font-bold text-[#001c3d] mb-3">
                  Security
                </h3>

                <p className="text-gray-600">
                  Verify communications before sharing information.
                </p>
              </motion.div>

            </div>

            {/* ================= REPORT FRAUD ================= */}

            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden
              bg-gradient-to-r from-[#001c3d] via-[#002d63] to-[#003b7a]
              rounded-[40px]
              p-10 md:p-14
              text-white
              mb-24
              shadow-[0_20px_70px_rgba(0,28,61,0.30)]"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">

                <h2 className="text-4xl md:text-5xl font-bold mb-5">
                  Report Suspicious Activity
                </h2>

                <p className="text-blue-100 text-lg leading-8 max-w-4xl mb-10">
                  If you receive suspicious emails, phone calls,
                  websites or messages claiming to represent SetupFiling.in,
                  notify us immediately through our official support channels.
                </p>

                <div className="flex flex-wrap gap-5">

                  <a
                    href="mailto:help@moneyhunt.in"
                    className="bg-white text-[#001c3d]
                    px-8 py-4 rounded-full font-bold
                    hover:bg-blue-100 hover:scale-105
                    transition-all duration-300"
                  >
                    help@moneyhunt.in
                  </a>

                  <a
                    href="tel:+918127409027"
                    className="border-2 border-white
                    px-8 py-4 rounded-full
                    hover:bg-white hover:text-[#001c3d]
                    transition-all duration-300"
                  >
                    +91 8127409027
                  </a>

                </div>

              </div>
            </motion.div>

            {/* ================= LEGAL ACTION ================= */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#001c3d]
              text-white
              rounded-[40px]
              p-10 md:p-14
              mb-24
              shadow-[0_20px_70px_rgba(0,28,61,0.25)]"
            >
              <Scale
                size={60}
                className="mb-6 text-cyan-300"
              />

              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Legal Action
              </h2>

              <p className="text-blue-100 text-lg leading-8">
                SetupFiling.in actively pursues legal remedies against
                unauthorized use of its brand identity, trademarks,
                digital assets, websites, communications or fraudulent
                representations intended to deceive customers.
              </p>
            </motion.div>

            {/* ================= OFFICE DETAILS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-100 text-[#001c3d] px-5 py-2 rounded-full text-sm font-semibold mb-4">
                COMPANY DETAILS
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#001c3d]">
                Office Information
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-5 rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Registered Office */}

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[35px] p-10 border border-slate-200
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,28,61,0.15)]
                hover:-translate-y-3 transition-all duration-500"
              >
                <Building2
                  size={55}
                  className="text-[#001c3d] mb-6
                  group-hover:rotate-6
                  group-hover:scale-110
                  transition-all duration-500"
                />

                <h3 className="text-3xl font-bold text-[#001c3d] mb-5">
                  Registered Office
                </h3>

                <p className="text-gray-600 leading-8">
                  E-30, 1st Floor, Jawahar Park
                  <br />
                  Laxmi Nagar
                  <br />
                  Delhi - 110092
                  <br />
                  India
                </p>

                <div className="mt-8 space-y-2">
                  <p>📞 +91 8127409027</p>
                  <p>📧 help@moneyhunt.in</p>
                </div>
              </motion.div>

              {/* Corporate Communication */}

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-[35px] p-10 border border-slate-200
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,28,61,0.15)]
                hover:-translate-y-3 transition-all duration-500"
              >
                <Building2
                  size={55}
                  className="text-[#001c3d] mb-6
                  group-hover:rotate-6
                  group-hover:scale-110
                  transition-all duration-500"
                />

                <h3 className="text-3xl font-bold text-[#001c3d] mb-5">
                  Corporate Communications
                </h3>

                <p className="text-gray-600 leading-8">
                  E-30, 1st Floor, Jawahar Park
                  <br />
                  Laxmi Nagar
                  <br />
                  Delhi - 110092
                  <br />
                  India
                </p>

                <div className="mt-8 space-y-2">
                  <p>📞 +91 8127409027</p>
                  <p>📧 help@moneyhunt.in</p>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}