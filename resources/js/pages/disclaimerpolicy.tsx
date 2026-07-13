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

export default function disclaimerpolicy() {
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
  DISCLAIMER POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Disclaimer Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

<p className="text-blue-100 mt-6 max-w-3xl leading-8">
  This Disclaimer Policy explains the limitations, responsibilities,
  warranties, liabilities, and legal conditions governing the use of
  Moneyhunt.in and its services. By accessing our platform, you
  acknowledge and agree to the terms outlined herein.
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
  src="/images/Disclaimer.png"
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
  "Policy Updates",
  "Professional Advice",
  "Use of Website",
  "No Warranty",
  "Website Security",
  "User Responsibility",
  "Limitation of Liability",
  "Third-Party Websites",
  "Indemnification",
  "Third Party Rights",
  "Governing Law",
  "Miscellaneous"
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
  DISCLAIMER POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Disclaimer Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

</div>

          {/* Body */}

          <div className="p-8 md:p-12">

            {[
  {
    no: "01",
    title: "Introduction",
    text: "This Disclaimer Policy governs the use of Moneyhunt.in and its services. By accessing or using this website, you agree to comply with the terms outlined in this disclaimer. Continued use of the website constitutes acceptance of any future modifications.",
  },
  {
    no: "02",
    title: "Policy Updates",
    text: "Moneyhunt.in reserves the right to modify, update, or replace any part of this Disclaimer Policy at any time. Changes become effective immediately upon publication on the website.",
  },
  {
    no: "03",
    title: "Not Legal or Professional Advice",
    text: "The information provided on this website is for general informational purposes only and does not constitute legal, tax, financial, accounting, or professional advice. Users should seek advice from qualified professionals before making decisions based on website content.",
  },
  {
    no: "04",
    title: "Use of the Website",
    text: "Except for services explicitly provided by Moneyhunt.in, we do not control or endorse third-party content, products, or services available through the internet. Users are responsible for verifying information and maintaining independent backups of important data.",
  },
  {
    no: "05",
    title: "No Warranty",
    text: "The website and all information, services, and materials are provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.",
  },
  {
    no: "06",
    title: "Website Security & Downloads",
    text: "While we strive to maintain a secure platform, Moneyhunt.in does not guarantee that downloadable files will be free from viruses, malware, or harmful components. Users are responsible for implementing appropriate security measures.",
  },
  {
    no: "07",
    title: "User Responsibility",
    text: "You assume full responsibility and risk arising from your use of the website, internet services, and reliance on any information, opinions, recommendations, or materials provided through the platform.",
  },
  {
    no: "08",
    title: "Limitation of Liability",
    text: "Moneyhunt.in shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages, including business interruption, loss of profits, loss of data, or other commercial damages arising from the use of or inability to use the website.",
  },
  {
    no: "09",
    title: "Third-Party Websites",
    text: "Our website may contain links to external websites. Such websites operate independently and are not controlled by Moneyhunt.in. We are not responsible for their content, privacy practices, accuracy, or services.",
  },
  {
    no: "10",
    title: "Indemnification",
    text: "You agree to indemnify, defend, and hold harmless Moneyhunt.in, its directors, employees, agents, licensors, partners, and affiliates against any claims, losses, liabilities, damages, costs, or expenses arising from your use of the website or violation of these terms.",
  },
  {
    no: "11",
    title: "Third Party Rights",
    text: "The protections, limitations, and indemnities provided under this Disclaimer Policy shall also benefit Moneyhunt.in’s officers, employees, licensors, suppliers, affiliates, and information providers, who may enforce these provisions directly.",
  },
  {
    no: "12",
    title: "Governing Law & Jurisdiction",
    text: "This Disclaimer Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of competent courts in India.",
  },
  {
    no: "13",
    title: "Miscellaneous",
    text: "Failure by Moneyhunt.in to enforce any provision of this policy shall not constitute a waiver of such rights. Any rights not expressly granted herein are reserved. We may assign our rights and obligations under this policy without prior notice.",
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