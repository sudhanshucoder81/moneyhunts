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

export default function refundpolicy() {
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
 REFUND POLICY
</span>

<h1 className="text-5xl font-bold text-white mt-6">
  Refund Policy
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

<p className="text-blue-100 mt-6 max-w-3xl leading-8">
  At Moneyhunt.in, our mission is to deliver prompt, transparent,
  and reliable services in the areas of business registration,
  legal compliance, taxation, and intellectual property.
  This Refund & Cancellation Policy explains how cancellations,
  refunds and service modifications are handled.
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
  "Satisfaction Guarantee",
  "Refund Eligibility",
  "Non-Refundable Charges",
  "Refund Request Procedure",
  "Refund Processing Timeline",
  "Service Modification",
  "Cancellation Policy",
  "Government Delays",
  "Force Majeure",
  "Dispute Resolution",
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
  REFUND POLICY
</span>

<h1 className="text-3xl md:text-5xl font-bold text-white mt-6">
  REFUND POLICY
</h1>

<p className="text-blue-100 mt-4 text-lg">
  Effective Date: January 2026
</p>

</div>

          {/* Body */}

          <div className="p-4 sm:p-6 md:p-12">

            {[
{
  no:"01",
  title:"Satisfaction Guarantee",
  text:"We take pride in our quality of service across company formation, GST, trademarks, tax filing and other professional services. If you are not fully satisfied, please contact us and we will review the matter and may provide corrections, refunds or service credits where appropriate."
},
{
  no:"02",
  title:"Refund Eligibility",
  text:"Refunds may be granted where services are not initiated within the promised timeline or where services are delivered incorrectly due to Monyhunt error. Change of mind, customer errors, government rejections due to incorrect documents and requests made after 15 days are not eligible."
},
{
  no:"03",
  title:"Non-Refundable Charges",
  text:"Government fees, third-party charges, stamp duty, payment gateway fees, professional fees and work already completed by our team are non-refundable."
},
{
  no:"04",
  title:"Refund Request Procedure",
  text:"Email help@Moneyhunt.in with your Order ID, service details and reason for refund. Requests must be raised within 15 calendar days from the payment date."
},
{
  no:"05",
  title:"Refund Processing Timeline",
  text:"Approved refunds are processed within 15–21 working days and returned to the original payment method."
},
{
  no:"06",
  title:"Service Modification / Change of Plan",
  text:"Service changes may be permitted within 15 days if work has not progressed significantly. Eligible balances may be issued as service credit."
},
{
  no:"07",
  title:"Cancellation Policy",
  text:"Services may be cancelled before work begins. A 20% cancellation charge may apply. Once work starts, full refunds may not be available."
},
{
  no:"08",
  title:"No Refund for Government Delays",
  text:"Government processing delays or rejections by MCA, GST, Income Tax, Trademark Registry or other authorities do not qualify for refunds."
},
{
  no:"09",
  title:"Force Majeure Clause",
  text:"Moneyhunt.in is not liable for delays caused by natural disasters, government restrictions, pandemics, strikes, internet failures or other events beyond our control."
},
{
  no:"10",
  title:"Dispute Resolution",
  text:"Unresolved refund disputes may be escalated and, if required, referred to arbitration under the Arbitration and Conciliation Act, 1996 with jurisdiction in Delhi, India."
},
{
  no:"11",
  title:"Contact Us",
  text:"Email: help@moneyhynt.in | Phone: +91 8127409027 | Working Hours: Monday to Saturday, 10:00 AM to 6:00 PM."
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
{item.title === "Refund Eligibility" && (
  <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
    <table className="min-w-[700px] w-full">
      <thead>
        <tr className="bg-[#092646] text-white">
          <th className="px-6 py-4 text-left">Sr No.</th>
          <th className="px-6 py-4 text-left"> Condition</th>
          <th className="px-6 py-4 text-left">Refund Eligibility</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="px-6 py-4">
           1
          </td>
          <td className="px-6 py-4">
            Service not initiated within promised timeline
          </td>
          <td className="px-6 py-4">
            ✔ Eligible for full or partial refund
          </td>
        </tr>

        <tr className="border-b bg-slate-50">
          <td className="px-6 py-4">
            2
          </td>
          <td className="px-6 py-4">
           Service delivered incorrectly due to Moneyhunt error
          </td>
          <td className="px-6 py-4">
           ✔ Eligible for partial or full refund
          </td>
        </tr>

        <tr className="border-b">
          <td className="px-6 py-4">
            3
          </td>
          <td className="px-6 py-4">
            Change of mind after gathering all knowledge / No longer need the service
          </td>
          <td className="px-6 py-4">
           ✘ Not eligible
          </td>
        </tr>

        <tr className="border-b bg-slate-50">
          <td className="px-6 py-4">
            4
          </td>
          <td className="px-6 py-4">
             ✘ Not eligible
          </td>
          <td className="px-6 py-4">
             ✘ Not eligible
          </td>
        </tr>

        <tr className="border-b">
          <td className="px-6 py-4">
            5
          </td>
          <td className="px-6 py-4">
            Government rejection due to customer error (incorrect documents, details, etc.)
          </td>
          <td className="px-6 py-4">
            ✘ Not eligible
          </td>
        </tr>

        <tr className="bg-slate-50">
          <td className="px-6 py-4">
            6
          </td>
          <td className="px-6 py-4">
            Refund request made after 15 days of purchase
          </td>
          <td className="px-6 py-4">
            ✘ Not eligible
          </td>
        </tr>
      </tbody>
    </table>
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