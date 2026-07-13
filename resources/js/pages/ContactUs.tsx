import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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

export default function ContactUs() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">

        {/* Hero Section */}

        <section className="relative bg-[#011b3b] py-24 lg:py-2">

          <div className="absolute inset-0 bg-gradient-to-r from-[#011b3b] via-[#011b3b] to-[#011b3b]" />

          <div className="container mx-auto px-6 relative z-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Content */}

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <span className="bg-white/10 text-white px-5 py-2 rounded-full text-sm">
                  Contact Our Experts
                </span>

                <h1 className="text-5xl lg:text-6xl font-bold text-white mt-8 leading-tight">
                  Let's Discuss Your
                  <span className="text-cyan-400">
                    {" "}Business Needs
                  </span>
                </h1>

                <p className="text-gray-300 text-lg mt-8 leading-relaxed">
                  Get professional assistance for GST Registration,
                  Income Tax, Trademark Registration, LLP,
                  Company Registration and Compliance Services.
                </p>

                {/* Features */}

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <ShieldCheck
                      className="text-cyan-400"
                      size={30}
                    />

                    <div>
                      <h4 className="text-white font-semibold">
                        Expert Guidance
                      </h4>

                      <p className="text-gray-400 text-sm">
                        Industry Experts
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Clock3
                      className="text-cyan-400"
                      size={30}
                    />

                    <div>
                      <h4 className="text-white font-semibold">
                        Quick Response
                      </h4>

                      <p className="text-gray-400 text-sm">
                        Fast Support
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <Globe
                      className="text-cyan-400"
                      size={30}
                    />

                    <div>
                      <h4 className="text-white font-semibold">
                        PAN India
                      </h4>

                      <p className="text-gray-400 text-sm">
                        Services Across India
                      </p>
                    </div>
                  </motion.div>

                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-5 mt-10">

                  <motion.a
                    href="https://wa.me/918127409027"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </motion.a>

                  <motion.a
                    href="tel:+918127409027"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="border border-white text-white hover:bg-white hover:text-[#092646] transition px-8 py-4 rounded-xl font-semibold flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Call Now
                  </motion.a>

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
                  src="/images/contactexpert.png"
                  alt="Contact Expert"
                  className="relative z-10 object-contain"

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
                {/* Contact Form Section */}

        <section className="py-24 bg-gray-50">

          <div className="container mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Form */}

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 rounded-3xl shadow-xl"
              >

                <h2 className="text-4xl font-bold text-[#092646] mb-8">
                  Send Us a Message
                </h2>

                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#092646]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#092646]"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#092646]"
                  />

                  <select className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none">

                    <option>Select Service</option>
                    <option>GST Registration</option>
                    <option>Trademark Registration</option>
                    <option>Income Tax Filing</option>
                    <option>Company Registration</option>
                    <option>LLP Registration</option>

                  </select>

                  <textarea
                    rows={5}
                    placeholder="Write Your Message"
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none"
                  ></textarea>

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="w-full bg-[#092646] hover:bg-[#0d315a] text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition"
                  >
                    <Send size={18} />
                    Submit Enquiry
                  </motion.button>

                </div>

              </motion.div>

              {/* Contact Cards */}

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <Phone className="text-[#092646]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#092646]">
                        Call Us
                      </h3>

                      <p className="text-gray-600">
                        +91 8127409027
                      </p>
                    </div>

                  </div>

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <Mail className="text-[#092646]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#092646]">
                        Email Us
                      </h3>

                      <p className="text-gray-600">
                        support@yourcompany.com
                      </p>
                    </div>

                  </div>

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <MapPin className="text-[#092646]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#092646]">
                        Office Address
                      </h3>

                      <p className="text-gray-600">
                        Prayagraj, Uttar Pradesh, India
                      </p>
                    </div>

                  </div>

                </motion.div>

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <Headphones className="text-[#092646]" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#092646]">
                        Working Hours
                      </h3>

                      <p className="text-gray-600">
                        Mon - Sat : 09:00 AM - 07:00 PM
                      </p>
                    </div>

                  </div>

                </motion.div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* Map */}

        <section>

          <iframe
            src="https://maps.google.com/maps?q=Prayagraj&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          />

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