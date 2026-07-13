import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "@inertiajs/react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
  }, []);

 return (
  <>
    <footer ref={footerRef} className="bg-[#002b55] text-white pt-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 pb-12">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-4xl mb-4">Moneyhunt.In</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li><Link href="/about" className="hover:underline">• About Us</Link></li>
              <li><Link href="/ourservices" className="hover:underline">• Our Services</Link></li>
              <li><Link href="/newbusiness" className="hover:underline">• Learning Center</Link></li>
              <li><Link href="/fraudalerts" className="hover:underline">• Fraud Alert</Link></li>
              <li><Link href="/payments" className="hover:underline">• Online Payment</Link></li>
              <li><Link href="/ContactUs" className="hover:underline">• Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-4xl mb-4">Policies</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li><Link href="/termsandconditions" className="hover:underline">• Terms & Conditions</Link></li>
              <li><Link href="/privacypolicy" className="hover:underline">• Privacy Policy</Link></li>
              <li><Link href="/cookiespolicy" className="hover:underline">• Cookies Policy</Link></li>
              <li><Link href="/disclaimerpolicy" className="hover:underline">• Disclaimer Policy</Link></li>
              <li><Link href="/DataRetentionPolicy" className="hover:underline">• Data Retention Policy</Link></li>
              <li><Link href="/refundpolicy" className="hover:underline">• Cancellation & Refund Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-4xl mb-4">Contact Us</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li>• Call Us: +91 8127409027</li>
              <li>• Chat on WhatsApp</li>
              <li>• Email Us</li>
            </ul>
          </div>

        </div>

        {/* SECOND SECTION */}
        <div className="grid md:grid-cols-3 gap-12 pb-12">

          <div>
            <h3 className="text-4xl mb-4">Start a Business</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3 text-lg">
              <li><Link href="/Sole-Proprietorship-Registration" className="hover:underline">• Sole Proprietorship Registration</Link></li>
              <li><Link href="/partnershipregistration" className="hover:underline">• Partnership Registration</Link></li>
              <li>• Pvt Ltd Company Registration</li>
              <li>• Startup India Registration</li>
              <li>• MSME Registration</li>
              <li>• Shop & Establishment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl mb-4">Compliance, IPR & Tax</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li>• GST Registration</li>
              <li>• Trademark Registration</li>
              <li>• ITR Filing For Last 4 Years</li>
              <li>• Project Report (DPR)</li>
              <li>• Annual Compliance</li>
              <li>• Professional Tax Registration</li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl mb-4">Important Links</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-xl">
              <li><a href="https://tmrsearch.ipindia.gov.in/tmrpublicsearch/" target="_blank" rel="noopener noreferrer" className="hover:underline"> • Trademark Public Search </a></li>
               <li><a href="https://tmrsearch.ipindia.gov.in/estatus/" target="_blank" rel="noopener noreferrer" className="hover:underline"> • Trademark Status Check </a></li>
                <li><a href="https://services.gst.gov.in/services/searchhsnsac/" target="_blank" rel="noopener noreferrer" className="hover:underline"> • GST - HSN Code Finder </a></li>
                <li><a href="https://cbic-gst.gov.in/gst-goods-services-rates.html/" target="_blank" rel="noopener noreferrer" className="hover:underline"> • GST - Rate Finder </a></li>
                 <li><a href="https://eportal.incometax.gov.in/iec/foservices/#/TaxCalc/calculator/" target="_blank" rel="noopener noreferrer" className="hover:underline"> • Income Tax Calculator </a></li>
                  <li><a href="https://www.mca.gov.in/content/mca/global/en/home.html/" target="_blank" rel="noopener noreferrer" className="hover:underline"> • Ministry of Corporate Affairs </a></li>
                  </ul>
          </div>

        </div>

      </div>

      <div className="bg-[#001f3f] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-lg">
            © 2025–2026 GK Technology. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaXTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
            <FaPinterestP className="hover:text-yellow-400 cursor-pointer" />
          </div>

        </div>
      </div>

    </footer>

    {/* WHATSAPP FLOATING SUPPORT */}
    <div className="fixed bottom-6 right-4 z-[9999] flex items-end gap-3">
  
  <a
    href="https://wa.me/918127409027"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-2xl shadow-2xl px-4 py-3 w-[200px] sm:w-[230px] cursor-pointer hover:scale-105 transition-all duration-300"
  >
    <h4 className="font-bold text-gray-800 text-base sm:text-lg">
      Chat with an Expert!
    </h4>

    <p className="text-gray-500 text-xs sm:text-sm mt-1 flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      24/7 Live Support Available
    </p>
  </a>

  <a
    href="https://wa.me/918127409027"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
  >
    <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
      1
    </span>

    <FaWhatsapp className="text-white text-3xl sm:text-4xl" />
  </a>

</div>
  </>
);
    <footer ref={footerRef} className="bg-[#002b55] text-white pt-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 pb-12">

          {/* COLUMN 1 */}
          <div>
            <h3 className="text-4xl mb-4">Moneyhunt.In</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li><Link href="/about" className="hover:underline">• About Us</Link></li>
              <li><Link href="/ourservices" className="hover:underline">• Our Services</Link></li>
              <li><Link href="/newbusiness" className="hover:underline">• Learning Center</Link></li>
              <li><Link href="/fraudalerts" className="hover:underline">• Fraud Alert</Link></li>
              <li><Link href="/payments" className="hover:underline">• Online Payment</Link></li>
              <li><Link href="/ContactUs" className="hover:underline">• Contact Us</Link></li>
            </ul>
          </div>
          {/* COLUMN 2 */}
          <div>
            <h3 className="text-4xl mb-4">Policies</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li><Link href="/termsandconditions" className="hover:underline">•  Terms & Conditions</Link></li>
              <li><Link href="/privacypolicy" className="hover:underline">• Privacy Policy</Link></li>
               <li><Link href="/cookiespolicy" className="hover:underline">• Cookies Policy</Link></li>
               <li><Link href="/disclaimerpolicy" className="hover:underline">• Disclaimer Policy</Link></li>
               <li><Link href="/DataRetentionPolicy" className="hover:underline">• Data Retention Policy</Link></li>
                <li><Link href="/refundpolicy" className="hover:underline">• Cancellation & Refund Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-4xl mb-4">Contact Us</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li>• Call Us: +91 8127409027</li>
              <li>• Chat on WhatsApp</li>
              <li>• Email Us</li>
            </ul>
          </div>

        </div>

        {/* SECOND SECTION */}
        <div className="grid md:grid-cols-3 gap-12 pb-12">

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-4xl mb-4">Start a Business</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li>• Sole Proprietorship Registration</li>
              <li>• Partnership Registration</li>
              <li>• Pvt Ltd Company Registration</li>
              <li>• Startup India Registration</li>
              <li>• MSME Registration</li>
              <li>• Shop & Establishment</li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h3 className="text-4xl mb-4">Compliance, IPR & Tax</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li>• GST Registration</li>
              <li>• Trademark Registration</li>
              <li>• ITR Filing For Last 4 Years</li>
              <li>• Project Report (DPR)</li>
              <li>• Annual Compliance</li>
              <li>• Professional Tax Registration</li>
            </ul>
          </div>

          {/* COLUMN 6 */}
          <div>
            <h3 className="text-4xl mb-4">Important Links</h3>
            <div className="w-52 h-1 bg-yellow-500 mb-6"></div>

            <ul className="space-y-3 text-lg">
              <li>• Trademark Public Search</li>
              <li>• Trademark Status Check</li>
              <li>• GST - HSN Code Finder</li>
              <li>• GST - Rate Finder</li>
              <li>• Income Tax Calculator</li>
              <li>• Ministry of Corporate Affairs</li>
            </ul>
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#001f3f] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-lg">
            © 2025–2026 GK Technology. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaXTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
            <FaPinterestP className="hover:text-yellow-400 cursor-pointer" />
          </div>

        </div>
      </div>
    </footer>
  
}