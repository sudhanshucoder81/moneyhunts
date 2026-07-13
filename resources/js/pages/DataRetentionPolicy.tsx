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

export default function DataRetentionPolicy() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">

        {/* Hero Section */}

        <section className="relative bg-[#011b3b] py-24 lg:py-2">

          <div className="absolute inset-0 bg-gradient-to-r from-[#011b3b] via-[#011b3b] to-[#011b3b]" />

          <div className="container mx-auto px-5 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left Content */}

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

               <span className="bg-white/10 px-4 py-2 rounded-full text-white text-sm">
  DATA RETENTION POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Data Retention Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

<p className="text-blue-100 mt-6 max-w-3xl leading-8">
  This Data Retention Policy explains how SetupFiling.in collects,
  stores, protects, and disposes of personal and business information
  provided by clients while using our professional services. We are
  committed to safeguarding your data, ensuring legal compliance, and
  maintaining transparency regarding how long information is retained
  and when it is permanently deleted from our systems.
</p>

                {/* Features */}

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">

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
     Retention Period
    </p>

    <p className="text-white font-semibold">
      7 Days After Service Delivery
    </p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
    <p className="text-gray-400 text-sm">
      Applicable Law
    </p>

    <p className="text-white font-semibold">
      DPDPA 2023 (India)
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
 className="relative z-10 object-contain w-full max-w-md mx-auto"
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

  <div className="container mx-auto px-2 max-w-7xl">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">

      {/* Sidebar */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="col-span-1 lg:col-span-3"
      >

        <div className="lg:sticky lg:top-28 bg-white rounded-3xl shadow-lg border border-slate-100 p-4 md:p-6">

          <h3 className="text-xl font-bold text-[#092646] mb-6">
            Quick Navigation
          </h3>

         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">

            {[
  "Scope & Applicability",
  "Data We Collect",
  "Retention Schedule",
  "Storage & Security",
  "Data Sharing",
  "Deletion & Disposal",
  "Your Rights",
  "Legal Holds",
  "Policy Changes",
  "Contact Us"
].map((item, i) => (
              <div
                key={i}
                className="text-xs md:text-sm text-slate-600 hover:text-[#092646] cursor-pointer transition bg-slate-50 rounded-xl p-3 border border-slate-100">
                {i + 1}. {item}
              </div>
            ))}

          </div>

        </div>

      </motion.div>

      {/* Main Content */}

     <div className="col-span-1 lg:col-span-9">

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
  DATA RETENTION POLICY
</span>

<h1 className="text-3xl md:text-5xl font-bold text-white mt-6">
  Data Retention Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

</div>

          {/* Body */}

          <div className="p-4 sm:p-6 md:p-12">

            {[
  {
  no: "01",
  title: "Scope & Applicability",
  text: "This policy applies to all personal data and business information collected, processed, or stored by Moneyhunt.in in connection with the delivery of our professional services."
},
  {
  no: "02",
  title: "Data We Collect",
  text: "In the course of providing services, we may collect and retain the following categories of information."
},
  {
    no: "03",
    title: "Retention Schedule",
    text: "Our standard retention period is 7 days after successful service delivery. Once your requested service is completed, all personal and operational data is permanently deleted within 7 days unless retention is required under applicable Indian laws such as the GST Act or Companies Act."
  },
  {
    no: "04",
    title: "Storage & Security",
    text: "All retained information is protected using AES-256 encrypted storage, strict access controls, secure cloud infrastructure hosted within India, routine backups, locked physical storage facilities, and regular internal audits to maintain confidentiality and integrity."
  },
  {
    no: "05",
    title: "Data Sharing",
    text: "We do not sell, rent, or trade client information. Data may only be shared with government authorities, regulatory bodies, authorised professional advisors, service providers operating under confidentiality obligations, or where required by law."
  },
  {
    no: "06",
    title: "Deletion & Disposal",
    text: "After the 7-day retention period, digital records are automatically deleted, emails and communication logs are removed, third-party processors receive deletion instructions, backups are overwritten during rotation cycles, and physical documents are securely cross-cut shredded."
  },
  {
    no: "07",
    title: "Your Rights",
    text: "Under the Digital Personal Data Protection Act, 2023 (DPDPA), you may request access, correction, deletion, portability, objection to processing, and nominee rights. Requests can be submitted to our Grievance Officer and are generally responded to within 30 days."
  },
  {
    no: "08",
    title: "Legal Holds",
    text: "In limited circumstances involving litigation, government investigations, regulatory requirements, audits, or legal preservation notices, specific records may be retained beyond the standard retention period. Such retention is limited only to the relevant information and duration required."
  },
  {
    no: "09",
    title: "Policy Changes",
    text: "This policy is reviewed periodically and may be updated to reflect legal, regulatory, or operational changes. Significant revisions will be communicated through email notifications, platform announcements, and updated policy publication dates."
  },
  {
    no: "10",
    title: "Contact Us",
    text: "For questions regarding this policy, data rights requests, or privacy concerns, please contact Moneyhunt.in. Email: help@Moneyhunt.in | Phone: +91 8127409027 | Address: E-30, Jawahar Park, Laxmi Nagar, Prayagraj 1100.., India."
  }
].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative md:pl-24 pl-0 pb-8 md:pb-12 md:border-l-2 border-slate-200 md:ml-8 ml-0"
              >

                <div className="hidden md:flex absolute -left-8 top-0 w-16 h-16 rounded-2xl bg-[#092646] text-white items-center justify-center font-bold text-lg shadow-lg">
                  {item.no}
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition">

                  <h3 className="text-2xl font-bold text-[#092646] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-8">
                    {item.text}
                  </p>
{item.title === "Retention Schedule" && (
  <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
    <table className="min-w-[700px] w-full">
      <thead>
        <tr className="bg-[#092646] text-white">
          <th className="px-6 py-4 text-left">Data Category</th>
          <th className="px-6 py-4 text-left">Retention Period</th>
          <th className="px-6 py-4 text-left">Basis</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="px-6 py-4">
            Documents uploaded for service processing
          </td>
          <td className="px-6 py-4">
            7 days after service delivery
          </td>
          <td className="px-6 py-4">
            Our Policy
          </td>
        </tr>

        <tr className="border-b bg-slate-50">
          <td className="px-6 py-4">
            Client correspondence
          </td>
          <td className="px-6 py-4">
            7 days after service delivery
          </td>
          <td className="px-6 py-4">
            Our Policy
          </td>
        </tr>

        <tr className="border-b">
          <td className="px-6 py-4">
            Draft forms & working documents
          </td>
          <td className="px-6 py-4">
            7 days after service delivery
          </td>
          <td className="px-6 py-4">
            Our Policy
          </td>
        </tr>

        <tr className="border-b bg-slate-50">
          <td className="px-6 py-4">
            Support tickets & complaints
          </td>
          <td className="px-6 py-4">
            7 days after resolution
          </td>
          <td className="px-6 py-4">
            Our Policy
          </td>
        </tr>

        <tr className="border-b">
          <td className="px-6 py-4">
            Website analytics data
          </td>
          <td className="px-6 py-4">
            7 days (rolling)
          </td>
          <td className="px-6 py-4">
            Consent
          </td>
        </tr>

        <tr className="bg-slate-50">
          <td className="px-6 py-4">
            Marketing communication preferences
          </td>
          <td className="px-6 py-4">
            Until opt-out
          </td>
          <td className="px-6 py-4">
            Consent
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}
{item.title === "Your Rights" && (
  <div className="mt-8 grid md:grid-cols-2 gap-5">

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        🔍 Right to Access
      </h4>
      <p className="text-slate-600 text-sm leading-7">
        Request a summary of the personal data we hold and the purposes for which it is processed.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        ✏️ Right to Correction
      </h4>
      <p className="text-slate-600 text-sm leading-7">
        Request correction of inaccurate or incomplete personal data.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        🗑️ Right to Erasure
      </h4>
      <p className="text-slate-600 text-sm leading-7">
        Request deletion of personal data where retention is no longer required.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        📤 Right to Portability
      </h4>
      <p className="text-slate-600 text-sm leading-7">
        Receive your data in a structured and commonly used format.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        🚫 Right to Object
      </h4>
      <p className="text-slate-600 text-sm leading-7">
        Object to certain types of processing, including direct marketing.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        👶 Nominee Rights
      </h4>
      <p className="text-slate-600 text-sm leading-7">
        Appoint a nominee to exercise rights on your behalf in case of incapacity.
      </p>
    </div>

    <div className="md:col-span-2 bg-blue-50 border border-blue-200 rounded-2xl p-5">
      <p className="text-slate-700 leading-7">
        To exercise any of the above rights, please contact our Grievance Officer.
        We generally respond within 30 days, subject to applicable legal requirements.
      </p>
    </div>

  </div>
)}
{item.title === "Data We Collect" && (
  <div className="grid md:grid-cols-2 gap-5 mt-8">

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        Identity Data
      </h4>
      <p className="text-slate-600 text-sm">
        Name, PAN, Aadhaar, Passport Details, DIN, DSC
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        Contact Data
      </h4>
      <p className="text-slate-600 text-sm">
        Email Address, Mobile Number, Residential & Business Address
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        Financial Data
      </h4>
      <p className="text-slate-600 text-sm">
        Bank Account Details, GST Invoices, Payment Records
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        Business Data
      </h4>
      <p className="text-slate-600 text-sm">
        MOA/AOA, Shareholding Patterns, Incorporation Certificates
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        Correspondence
      </h4>
      <p className="text-slate-600 text-sm">
        Emails, WhatsApp Messages, Client Call Notes
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-[#092646] mb-2">
        Technical Data
      </h4>
      <p className="text-slate-600 text-sm">
        IP Addresses, Browser Information, Cookies & Login Logs
      </p>
    </div>

    <div className="md:col-span-2 bg-gradient-to-r from-[#092646] to-[#0c3c72] rounded-2xl p-6 text-white">
      <h4 className="font-bold mb-2">
        Government Filings
      </h4>

      <p className="text-blue-100">
        Copies of forms and applications filed on your behalf with MCA,
        GSTN, Trade Marks Registry, FSSAI, IEC Authorities and other
        regulatory departments.
      </p>
    </div>

  </div>
)}{item.title === "Scope & Applicability" && (
  <div className="mt-8">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <h4 className="font-bold text-[#092646] mb-2">
          Company & LLP Registration
        </h4>
        <p className="text-slate-600 text-sm">
          Incorporation, registration and related services.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <h4 className="font-bold text-[#092646] mb-2">
          GST Services
        </h4>
        <p className="text-slate-600 text-sm">
          GST registration, filing and compliance management.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <h4 className="font-bold text-[#092646] mb-2">
          Trademark Services
        </h4>
        <p className="text-slate-600 text-sm">
          Trademark filing and intellectual property support.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <h4 className="font-bold text-[#092646] mb-2">
          FSSAI & IEC
        </h4>
        <p className="text-slate-600 text-sm">
          Licensing, certifications and regulatory approvals.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <h4 className="font-bold text-[#092646] mb-2">
          Annual Compliance
        </h4>
        <p className="text-slate-600 text-sm">
          ROC filings, annual returns and advisory services.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-5">
        <h4 className="font-bold text-[#092646] mb-2">
          Website & Communications
        </h4>
        <p className="text-slate-600 text-sm">
          Website usage, marketing and client communications.
        </p>
      </div>

    </div>

    <div className="mt-6 bg-gradient-to-r from-[#092646] to-[#0c3c72] rounded-2xl p-6 text-white">
      <h4 className="font-bold mb-2">
        Data Coverage
      </h4>

      <p className="text-blue-100 leading-7">
        This policy governs all forms of data including electronic
        records, physical documents, email correspondence, client
        portals, uploaded files and cloud storage systems operated by
        or on behalf of Moneyhunt.in.
      </p>
    </div>

  </div>
)}
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