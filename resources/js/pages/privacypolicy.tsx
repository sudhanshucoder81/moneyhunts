import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Scale,
  Lock,
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

export default function privacypolicy() {
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

               <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">
  PRIVACY POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Privacy Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

<p className="text-blue-100 mt-6 max-w-3xl leading-8">
  Welcome to Moneyhunt.in. We respect your privacy and are committed to protecting
  your personal information. This Privacy Policy explains how we collect, use,
  store and safeguard your information when you use our platform and services.
</p>

                {/* Features */}

           <div className="grid md:grid-cols-3 gap-6 mt-12">

  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
  >
    <ShieldCheck className="text-cyan-400 mb-3" size={28} />

    <h4 className="text-white font-semibold">
      Data Protection
    </h4>

    <p className="text-gray-400 text-sm">
      Secure User Information
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
  >
    <Lock className="text-cyan-400 mb-3" size={28} />

    <h4 className="text-white font-semibold">
      Privacy First
    </h4>

    <p className="text-gray-400 text-sm">
      Confidential Handling
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5"
  >
    <FileCheck className="text-cyan-400 mb-3" size={28} />

    <h4 className="text-white font-semibold">
      Legal Compliance
    </h4>

    <p className="text-gray-400 text-sm">
      DPDP Act Compliant
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
  "Introduction",
  "Information We Collect",
  "How We Use Information",
  "Sharing Information",
  "Data Security",
  "Cookies",
  "Your Rights",
  "Third Party Links",
  "Children's Privacy",
  "Data Retention",
  "Policy Updates",
  "Contact Officer",
  "Jurisdiction & Disclaimer"
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
  PRIVACY POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Privacy Policy
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
    title: "Introduction",
    text: "Welcome to Moneyhunt.in ('we', 'our', or 'us'). Moneyhunt.in is India's leading online professional business services platform founded and managed by experienced Chartered Accountants, Company Secretaries and Trademark Attorneys with over 15 years of expertise. This Privacy Policy explains how we collect, use, disclose and safeguard your personal information when you visit our website, use our services or interact with us." // source content from your uploaded policy
  },
  {
    no: "02",
    title: "Information We Collect",
    text: "We may collect identity information, contact details, business information, financial information, uploaded documents and technical information including IP address, browser type, device identifiers, cookies and usage data. Sensitive personal information is collected only where legally required." // source content from your uploaded policy
  },
  {
    no: "03",
    title: "How We Use Your Information",
    text: "We use your information for service delivery, government filings, communication, account management, payment processing, legal compliance, service improvement, marketing with consent, fraud prevention and legal enforcement." // source content from your uploaded policy
  },
  {
    no: "04",
    title: "Sharing of Information",
    text: "We do not sell or rent your personal information. Information may be shared with government authorities, professional consultants, technology partners, payment gateways and legal authorities only where required for service delivery or compliance." // source content from your uploaded policy
  },
  {
    no: "05",
    title: "Data Security",
    text: "We implement SSL/TLS encryption, secure cloud storage, role-based access controls, security audits, employee confidentiality agreements and other industry-standard measures to protect your information." // source content from your uploaded policy
  },
  {
    no: "06",
    title: "Cookies & Tracking Technologies",
    text: "Our website uses essential, analytics, preference and marketing cookies to improve functionality, security and user experience. Users can manage cookies through browser settings." // source content from your uploaded policy
  },
  {
    no: "07",
    title: "Your Rights",
    text: "Under the Digital Personal Data Protection Act, 2023, you may request access, correction, erasure, withdrawal of consent and grievance redressal regarding your personal data." // source content from your uploaded policy
  },
  {
    no: "08",
    title: "Third-Party Links",
    text: "Our website may contain links to external websites, government portals and payment platforms. These third parties maintain their own privacy policies and practices." // source content from your uploaded policy
  },
  {
    no: "09",
    title: "Children's Privacy",
    text: "Our services are intended solely for adults. We do not knowingly collect information from minors and will delete such information if identified." // source content from your uploaded policy
  },
  {
    no: "10",
    title: "Data Retention",
    text: "We retain personal data only as long as necessary for service delivery, statutory compliance, legal proceedings and record-keeping requirements." // source content from your uploaded policy
  },
  {
    no: "11",
    title: "Changes to This Policy",
    text: "We may update this Privacy Policy periodically. Continued use of our services after updates constitutes acceptance of the revised policy." // source content from your uploaded policy
  },
  {
    no: "12",
    title: "Contact & Grievance Officer",
    text: "Name: Sudhanshu Gupta | Address: E-30 Jawahar Park, Laxmi Nagar, Prayagraj 1100.. | Phone: +91 81274 09027 | Email: help@moneyhunt.in" // source content from your uploaded policy
  },
  {
    no: "13",
    title: "Jurisdiction & Professional Disclaimer",
    text: "This Privacy Policy is governed by the laws of India. Use of this platform does not automatically establish a professional-client relationship unless a formal engagement has been confirmed." // source content from your uploaded policy
  }
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