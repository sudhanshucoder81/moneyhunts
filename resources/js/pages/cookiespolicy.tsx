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

export default function cookiespolicy() {
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
  COOKIES POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Cookies Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

<p className="text-blue-100 mt-6 max-w-3xl leading-8">
 This Cookies Policy explains how Moneyhunt.in, located at E‑30, Jawahar Park, Laxmi Nagar, Prayagraj – 1100.., India, uses cookies and similar tracking technologies (“cookies”) on our website (https://moneyhunt.in/). It informs you what cookies we use, why, and your rights regarding them.
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
  "What Are Cookies?",
  "Types of Cookies",
  "Necessary Cookies",
  "Functional Cookies",
  "Analytics Cookies",
  "Marketing Cookies",
  "Third-Party Cookies",
  "Cookie Retention",
  "Consent Management",
  "Cookie Security",
  "Your Rights",
  "Policy Updates",
  "Contact Us"
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
  COOKIES POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Cookies Policy
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
    title: "What Are Cookies?",
    text: "Cookies are small files stored on your device when you visit a website. They help your browser remember your preferences and facilitate features such as session continuity, analytics, security, and website functionality.",
  },
  {
    no: "02",
    title: "Types of Cookies We Use",
    text: "We use Strictly Necessary Cookies for core functionality, Functional Cookies to remember preferences, Analytics Cookies to improve services, and Marketing Cookies to provide relevant offers and insights. Non-essential cookies require user consent before activation.",
  },
  {
    no: "03",
    title: "Strictly Necessary Cookies",
    text: "These cookies are essential for website operation, navigation, security, and access to secure areas. Because they are necessary for service delivery, they do not require user consent.",
  },
  {
    no: "04",
    title: "Functional Cookies",
    text: "Functional cookies remember settings such as language preferences and user choices, helping provide a more personalized experience across visits.",
  },
  {
    no: "05",
    title: "Analytics & Performance Cookies",
    text: "Analytics cookies collect anonymous usage information to help us understand visitor behavior, improve website performance, and enhance user experience. These cookies are only activated after obtaining consent.",
  },
  {
    no: "06",
    title: "Marketing & Tracking Cookies",
    text: "Marketing cookies help us understand user interests and deliver relevant services, offers, and advertisements. These cookies require explicit and granular user consent.",
  },
  {
    no: "07",
    title: "Third-Party Cookies & Data Sharing",
    text: "We may use trusted third-party services such as analytics providers and payment gateways. These services may place their own cookies, but we do not share personal identifiers or sensitive information through cookies.",
  },
  {
    no: "08",
    title: "Cookie Duration & Retention",
    text: "Cookies may be session-based and automatically deleted when you close your browser, or persistent cookies that remain stored for a specified period to remember your preferences and settings.",
  },
  {
    no: "09",
    title: "Consent Management",
    text: "Visitors can Accept All, Reject All non-essential cookies, or customize cookie preferences. No non-essential cookies are activated unless explicit consent is provided. Consent may be modified or withdrawn at any time.",
  },
  {
    no: "10",
    title: "Cookie Audit & Security",
    text: "We regularly review cookies used on our platform and implement security measures including Secure, HttpOnly, and SameSite attributes wherever feasible to protect users and maintain compliance.",
  },
  {
    no: "11",
    title: "Your Rights Under Indian Law",
    text: "Under the Digital Personal Data Protection Act (DPDPA) 2023, users have the right to informed consent, withdraw consent, understand cookie purposes and retention, and raise grievances regarding cookie practices.",
  },
  {
    no: "12",
    title: "Changes to This Policy",
    text: "We may update this Cookies Policy from time to time to reflect legal, regulatory, or operational changes. Updated versions will be published on this page with a revised Effective Date.",
  },
  {
    no: "13",
    title: "Contact Us",
    text: "For questions regarding this Cookies Policy or to exercise your rights, contact us at help@moneyhunt.in, call +91 8127409027, or write to E-30, Jawahar Park, Laxmi Nagar, Prayagraj – 1100.., India.",
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