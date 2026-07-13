import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  LockOpen,
} from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Payments() {
  const [selectedQR, setSelectedQR] = useState({
    image: "/images/gpay.jpeg",
    name: "Google Pay",
  });

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] overflow-hidden">
          <img
            src="/images/payment.png"
            alt="Payment Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#001c3d] via-[#001c3de6] to-[#001c3d80]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-[85vh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
                  <ShieldCheck size={18} />
                  <span className="text-sm font-medium">
                    Trusted & Secure Payment Gateway
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                  Secure, Fast and
                  <span className="block text-[#c57a00]">
                    Reliable Payments
                  </span>
                </h1>

                <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10">
                  Multiple payment options — UPI, Net Banking, Razorpay.
                  Fast, secure, reliable and hassle-free transactions.
                </p>

                <button className="bg-[#c57a00] hover:bg-[#b26d00] border border-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl">
                  <LockOpen size={22} />
                  Start Your Secure Payment
                </button>
              </div>

              <div className="hidden lg:flex justify-end">
                <img
                  src="/images/payment.png"
                  alt="Secure Payment"
                  className="w-full max-w-[650px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-blue-100 text-[#001c3d] px-5 py-2 rounded-full text-sm font-semibold mb-4">
                PAYMENT METHODS
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#001c3d]">
                Choose Your Preferred Payment Method
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-5 rounded-full"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">

              {/* Razorpay Card */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[35px] bg-gradient-to-br from-[#001c3d] via-[#002b5c] to-[#004c99] text-white p-10 shadow-[0_20px_70px_rgba(0,28,61,0.25)] hover:-translate-y-3 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <img
                    src="/images/razorpay.png"
                    alt="Razorpay"
                    className="h-12 mb-8"
                  />

                  <h3 className="text-3xl font-bold mb-4">
                    Razorpay Gateway
                  </h3>

                  <p className="text-blue-100 leading-8 mb-8">
                    Pay securely using Credit Card, Debit Card, UPI,
                    Wallets and Net Banking.
                  </p>

                  <ul className="space-y-4 text-blue-100">
                    <li>✓ Instant Processing</li>
                    <li>✓ Bank Grade Security</li>
                    <li>✓ Multiple Payment Modes</li>
                    <li>✓ Real-Time Confirmation</li>
                  </ul>

                  <button className="mt-10 bg-[#c57a00] hover:bg-[#b26d00] px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                    Pay With Razorpay
                  </button>
                </div>
              </motion.div>

              {/* QR Payment Card */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-[35px] p-10 shadow-xl"
              >
                <h3 className="text-3xl font-bold text-[#001c3d] mb-8 text-center">
                  Scan & Pay
                </h3>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <button
                    onClick={() =>
                      setSelectedQR({
                        image: "/images/gpay.jpeg",
                        name: "Google Pay",
                      })
                    }
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white"
                  >
                    GPay
                  </button>

                  <button
                    onClick={() =>
                      setSelectedQR({
                        image: "/images/phonepay.jpeg",
                        name: "PhonePe",
                      })
                    }
                    className="px-6 py-3 rounded-xl bg-purple-600 text-white"
                  >
                    PhonePe
                  </button>

                  <button
                    onClick={() =>
                      setSelectedQR({
                        image: "/images/paytm.jpeg",
                        name: "Paytm",
                      })
                    }
                    className="px-6 py-3 rounded-xl bg-cyan-600 text-white"
                  >
                    Paytm
                  </button>
                </div>

                <div className="text-center">
                  <img
                    src={selectedQR.image}
                    alt={selectedQR.name}
                    className="w-72 mx-auto"
                  />

                  <h4 className="text-2xl font-bold mt-4 text-[#001c3d]">
                    {selectedQR.name}
                  </h4>
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