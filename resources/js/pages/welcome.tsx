import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Shield,Users,Star,Clock3,Headphones,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import "swiper/css";
import {
    Linkedin,
    Facebook,
    Instagram,
    Twitter,
    Mail
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone
} from "lucide-react";
export default function Welcome() {
  const [open, setOpen] = useState(0);
const [showDemo, setShowDemo] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  mobile: "",
  email: "",
  business: "",
  service: "",
  date: "",
  time: "",
  city: "",
  message: "",
});

const [errors, setErrors] = useState<any>({});
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setErrors({
    ...errors,
    [e.target.name]: "",
  });
};
const validate = () => {
  let newErrors: any = {};

  if (!formData.name.trim())
    newErrors.name = "Full Name is required";

  if (!formData.mobile)
    newErrors.mobile = "Mobile Number is required";
  else if (!/^[6-9]\d{9}$/.test(formData.mobile))
    newErrors.mobile = "Enter valid Mobile Number";

  if (!formData.email)
    newErrors.email = "Email is required";

  if (!formData.business)
    newErrors.business = "Business Name is required";

  if (!formData.service)
    newErrors.service = "Select Service";

  if (!formData.date)
    newErrors.date = "Select Date";

  if (!formData.time)
    newErrors.time = "Select Time";

  if (!formData.city)
    newErrors.city = "City is required";

  if (!formData.message)
    newErrors.message = "Message is required";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

 alert("✅ Thank you! Your demo request has been submitted successfully.\n\nOur MoneyHunt team will contact you shortly.");

  console.log(formData);

  setShowDemo(false);
};
const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    image: "/images/user1.png",
    review:
      "MoneyHunt made our company registration process extremely smooth. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Gupta",
    city: "Lucknow",
    image: "/images/user3.png",
    review:
      "Excellent support for GST Registration. The team is professional and responsive.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    city: "Mumbai",
    image: "/images/user2.png",
    review:
      "Very quick service for Trademark Registration. Amazing experience with MoneyHunt.",
    rating: 5,
  },
  {
    name: "Sneha Singh",
    city: "Noida",
    image: "/images/user4.png",
    review:
      "Professional team with excellent customer support. Everything was completed on time.",
    rating: 5,
  },
];
const faqs = [
  {
    question: "What is Moneyhunt.in and who founded it?",
    answer:
      "Moneyhunt.in is India’s leading online professional business services platform..."
  },
  {
    question: "Who are the professionals behind Moneyhunt.in?",
    answer:
      "We are backed by qualified Chartered Accountants, Company Secretaries and Trademark Attorneys."
  },
  {
    question: "How many businesses has Moneyhunt.in helped so far?",
    answer:
      "Thousands of businesses across India trust our services."
  },
  {
    question: "What is the mission of Moneyhunt.in?",
    answer:
      "To simplify business registrations and compliance."
  },
  {
    question: "Is Moneyhunt.in and MoneyHunt.com are same?",
    answer:
      "Please refer to official company communication."
  }
];
  return (
    <>
      <Header />

      <main>

        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <img
            src="/images/businessteam.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001c3d] via-[#001c3ddd] to-transparent"></div>

          {/* CONTENT */}
          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">

            <div className="max-w-3xl text-white">

              {/* TRUSTED BADGE */}
              <div className="inline-flex items-center gap-3 border border-yellow-500 rounded-full px-6 py-3 mb-8">
                <span className="text-yellow-400">⭐</span>
                <span className="font-semibold">
                  Trusted by 50,000+ Businesses Across India
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                India’s Leading Online
                <br />
                Business Compliance
                <br />
                Platform
              </h1>

              {/* DESCRIPTION */}
              <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-10">
                Your Trusted Online Platform for Company Registration,
                GST Registration, Trademark Registration &
                Tax Filing Services
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">

                <button className="bg-[#c57a00] hover:bg-[#b26d00] px-8 py-4 rounded font-semibold text-lg flex items-center justify-center gap-2">
                  <ArrowRight size={22} />
                  View Our Services
                </button>

               <button
    onClick={() => setShowDemo(true)}
    className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded font-semibold text-lg flex items-center justify-center gap-2"
>
    <Headphones size={22} />
    Book Demo
</button>

              </div>

            </div>
          </div>

          {/* BOTTOM STATS BAR */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#001c3d] border-t border-white/10">

            <div className="max-w-7xl mx-auto">

              <div className="grid grid-cols-2 lg:grid-cols-4">

                <div className="flex items-center gap-4 p-6 border-r border-white/20">
                  <Shield size={40} className="text-white" />
                  <div>
                    <h3 className="text-white text-3xl font-bold">
                      100%
                    </h3>
                    <p className="text-white">
                      Secure Process
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 border-r border-white/20">
                  <Users size={40} className="text-white" />
                  <div>
                    <h3 className="text-white text-3xl font-bold">
                      50,000+
                    </h3>
                    <p className="text-white">
                      Happy Clients
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 border-r border-white/20">
                  <Star size={40} className="text-white" />
                  <div>
                    <h3 className="text-white text-3xl font-bold">
                      4.8+
                    </h3>
                    <p className="text-white">
                      Customer Rating
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6">
                  <Clock3 size={40} className="text-white" />
                  <div>
                    <h3 className="text-white text-3xl font-bold">
                      24/7
                    </h3>
                    <p className="text-white">
                      Quick Support
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>
<section className="py-6 bg-[#f8f8f8]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-10">

      <p className="text-[#d88912] font-bold text-xl mb-4">
        🚀 Our Most Popular Services
      </p>

      <h2 className="text-3xl lg:text-3xl font-bold text-black">
        Start Your Business With Experts Registration Services
      </h2>

      <div className="w-40 h-1 bg-[#d88912] mx-auto mt-5 mb-8"></div>

      <p className="text-gray-700 text-lg">
        Fast, affordable and trusted startup registration solutions
        for entrepreneurs across India.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-b-[6px] border-[#273a8a] p-8 text-center">

        <img
          src="/images/privatelimited.png"
          className="w-32 h-32 rounded-full  object-cover mx-auto mb-6"
          alt=""
        />

        <h3 className="text-[#243b87] text-3xl font-bold mb-5">
          Private Limited Company Registration
        </h3>

        <p className="text-gray-700 leading-8 mb-8">
          Register your Private Limited Company quickly with expert
          legal support. Get full assistance with MCA filings,
          PAN and TAN at an affordable price.
        </p>

        <button className="bg-[#273a8a] hover:bg-[#1f2f70] text-white px-8 py-4 rounded-full font-semibold">
          Get Started →
        </button>

      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-b-[6px] border-[#273a8a] p-8 text-center">

        <img
          src="/images/partnership.png"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          alt=""
        />

        <h3 className="text-[#243b87] text-3xl font-bold mb-5">
          Partnership Firm Registration
        </h3>

        <p className="text-gray-700 leading-8 mb-8">
          Register your Partnership Firm easily with fast
          processing and full expert assistance. Define your
          partnership clearly with professional guidance.
        </p>

        <button className="bg-[#273a8a] hover:bg-[#1f2f70] text-white px-8 py-4 rounded-full font-semibold">
          Get Started →
        </button>

      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-b-[6px] border-[#273a8a] p-8 text-center">

        <img
          src="/images/proprietorship.png"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          alt=""
        />

        <h3 className="text-[#243b87] text-3xl font-bold mb-5">
          Sole Proprietorship Registration
        </h3>

        <p className="text-gray-700 leading-8 mb-8">
          Start your Sole Proprietorship easily with affordable
          registration and expert help. Get your business up and
          running with minimal compliance.
        </p>

        <button className="bg-[#273a8a] hover:bg-[#1f2f70] text-white px-8 py-4 rounded-full font-semibold">
          Get Started →
        </button>

      </div>

    </div>
     <div className="grid md:grid-cols-2 mt-5 lg:grid-cols-3 gap-8">

      {/* Card 4 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-b-[6px] border-[#273a8a] p-8 text-center">

        <img
          src="/images/privatelimited.png"
          className="w-32 h-32 rounded-full  object-cover mx-auto mb-6"
          alt=""
        />

        <h3 className="text-[#243b87] text-3xl font-bold mb-5">
         GST Registration
        </h3>

        <p className="text-gray-700 leading-8 mb-8">
         Register your business for GST easily. Get expert help with document verification and seamless application for hassle-free tax compliance.
        </p>

        <button className="bg-[#273a8a] hover:bg-[#1f2f70] text-white px-8 py-4 rounded-full font-semibold">
          Get Started →
        </button>

      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-b-[6px] border-[#273a8a] p-8 text-center">

        <img
          src="/images/partnership.png"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          alt=""
        />

        <h3 className="text-[#243b87] text-3xl font-bold mb-5">
         GST Cancellation
        </h3>

        <p className="text-gray-700 leading-8 mb-8">
         Cancel your GST registration quickly with professional support. We handle the entire application process to ensure a smooth closure of your account.
        </p>

        <button className="bg-[#273a8a] hover:bg-[#1f2f70] text-white px-8 py-4 rounded-full font-semibold">
          Get Started →
        </button>

      </div>

      {/* Card 6 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-b-[6px] border-[#273a8a] p-8 text-center">

        <img
          src="/images/proprietorship.png"
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
          alt=""
        />

        <h3 className="text-[#243b87] text-3xl font-bold mb-5">
          GST Return Filing
        </h3>

        <p className="text-gray-700 leading-8 mb-8">
          File your monthly and annual GST returns accurately and on time. We ensure complete compliance to help you avoid late fees and penalties.
        </p>

        <button className="bg-[#273a8a] hover:bg-[#1f2f70] text-white px-8 py-4 rounded-full font-semibold">
          Get Started →
        </button>

      </div>

    </div>
    <div className="flex justify-center mt-5">
  <Link
    href="/AllServices"
    className="bg-[#d88912] hover:bg-[#c17b0f] text-white px-10 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-lg"
  >
    View All Services →
  </Link>
</div>
  </div>
{/* TRUSTED BRANDS SECTION */}
<div className="max-w-7xl py-10 mx-auto px-4">

  <h2 className="text-center text-4xl font-bold text-black">
    Onlinebusiness.In Trusted By
    <span className="text-pink-600"> Leading Brands</span>
  </h2>

  <div className="flex justify-center mt-4">
    <div className="w-52 h-1 bg-yellow-500"></div>
    <div className="w-52 h-1 bg-[#4c5f95]"></div>
  </div>

  <div className="mt-16">

    <Swiper
      modules={[Autoplay, Navigation]}
      slidesPerView={2}
      spaceBetween={30}
      navigation
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      <SwiperSlide>
        <img
          src="/images/brand1.jpeg"
          alt="Brand"
          className="h-20 mx-auto object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/brand1.jpeg"
          alt="Brand"
          className="h-20 mx-auto object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/brand1.jpeg"
          alt="Brand"
          className="h-20 mx-auto object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/brand1.jpeg"
          alt="Brand"
          className="h-20 mx-auto object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/brand1.jpeg"
          alt="Brand"
          className="h-20 mx-auto object-contain"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/images/brand1.jpeg"
          alt="Brand"
          className="h-20 mx-auto object-contain"
        />
      </SwiperSlide>
    </Swiper>

  </div>

</div>

{/* ===========================
      PREMIUM DIVIDER
=========================== */}
<div className="max-w-7xl mx-auto px-6 py-2">

    <div className="relative flex items-center justify-center">

        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        <div className="relative z-10 flex items-center gap-3 bg-white px-8">

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

            <div className="w-12 h-[2px] bg-yellow-500"></div>

            <div className="w-5 h-5 rounded-full bg-[#4c5f95] shadow-lg"></div>

            <div className="w-12 h-[2px] bg-[#4c5f95]"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

        </div>

    </div>

</div>

{/* ===========================
      ABOUT US SECTION
=========================== */}
<div className="max-w-7xl py-10 mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Image */}
        <div className="relative">

            <img
                src="/images/aboutus.png"
                alt="About Us"
                className="w-full rounded-3xl shadow-2xl"
            />


        </div>

        {/* Right Content */}
        <div>

          

            <h2 className="mt-1 text-2xl font-bold text-gray-900 leading-tight">
                About Our
                <span className="text-yellow-500"> Company</span>
            </h2>

            <div className="w-28 h-1 bg-yellow-500 mt-6 mb-8 rounded-full"></div>

            <p className="text-gray-600 text-lg leading-8">
                We are a trusted technology and business solutions company
                helping startups, enterprises and growing brands build
                scalable digital products and streamline operations.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-8">
                From website development and software solutions to
                registration, compliance and business automation,
                we deliver reliable services that drive growth,
                innovation and long-term success.enterprises and growing brands build
                scalable digital products and streamline operations.
            </p>

           
        </div>

    </div>

</div>
    <div className="max-w-7xl mx-auto px-4">

        <div className="text-center">
            <p className="text-[#c97900] font-semibold text-xl">
                ★ Why Onlinebusiness.in
            </p>

            <h2 className="text-3xl font-bold text-black mt-2">
                India's most trusted platform for business compliance
            </h2>

            <div className="w-28 h-1 bg-[#c97900] mx-auto mt-5 rounded-full"></div>

            <p className="mt-8 text-[18px] text-black">
                Founded by CAs, CSs & Trademark Attorneys with 15+ years of expertise —
                we simplify every step of your entrepreneurial journey.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-10">
                    <div className="text-center text-[#c97900] text-5xl mb-6">
                        👥
                    </div>

                    <h3 className="text-3xl font-bold text-center text-[#1e2d74] mb-8">
                        Qualified Team
                    </h3>

                    <p className="text-gray-700 leading-8 text-justify">
                        Moneyhunt.in is founded and run by Chartered
                        Accountants (CA), Company Secretaries (CS),
                        and Trademark Attorneys with over 15+ years
                        of experience.
and Trademark Attorneys with over                     </p>
                </div>

                <div className="h-3 bg-[#283593]"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-10">
                    <div className="text-center text-[#c97900] text-5xl mb-6">
                        ⚖️
                    </div>

                    <h3 className="text-3xl font-bold text-center text-[#1e2d74] mb-8">
                        Ensuring Compliance
                    </h3>

                    <p className="text-gray-700 leading-8 text-justify">
                        Our team of qualified professionals ensures
                        that all Startup services are handled with
                        a deep, technical understanding of Indian
                        legal and tax frameworks.
                    </p>
                </div>

                <div className="h-3 bg-[#283593]"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-10">
                    <div className="text-center text-[#c97900] text-5xl mb-6">
                        🤝
                    </div>

                    <h3 className="text-3xl font-bold text-center text-[#1e2d74] mb-8">
                        Reliable Guidance
                    </h3>

                    <p className="text-gray-700 leading-8 text-justify">
                        Our experienced Team provide complete and
                        reliable guidance, ensuring that a business's
                        compliance documentation is accurate  compliance documentation is accurate.
                    </p>
                </div>

                <div className="h-3 bg-[#283593]"></div>
            </div>

        </div>

    </div>
   <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6">

    {/* Heading */}
    <div className="text-center mb-8">

        <span className="inline-block px-6 py-2 rounded-full bg-amber-100 text-[#d4941f] font-semibold">
            ★ Expert Team
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-black mt-5">
            Led By Practicing
            <span className="text-[#d4941f]"> Professionals</span>
        </h2>

        <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-5 rounded-full"></div>

    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/founder.jpeg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Prateek Kumar
                    </h3>

                    <p className="tracking-[4px] text-[#273a8a] text-sm uppercase mt-2">
                        Founder & CEO
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                15+ years in corporate taxation and MCA compliance.
                Former Big Four practice lead passionate about helping
                businesses achieve sustainable growth.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-amber-500 to-orange-500"></div>

        </div>

        {/* CARD 2 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/cofounder.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Riya Rai
                    </h3>

                    <p className="tracking-[4px] text-600 text-[#273a8a] text-sm uppercase mt-2">
                        Co-Founder
                    </p>

                     <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                Expert in financial strategy, startup consulting,
                taxation planning and business transformation.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-blue-500 to-indigo-600"></div>

        </div>

        {/* CARD 3 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/expert1.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Rahul Sharma
                    </h3>

                    <p className="tracking-[4px] text-600 text-[#273a8a] text-sm uppercase mt-2">
                        Tax Expert
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                Expert in taxation, GST, auditing and regulatory
                compliance with extensive industry experience.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-green-500 to-emerald-600"></div>

        </div>

        {/* CARD 4 */}
        <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">

            <div className="flex flex-col sm:flex-row items-center gap-6">

                <img
                    src="/images/expert2.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-500"
                />

                <div className="text-center sm:text-left">

                    <h3 className="text-3xl font-bold text-black">
                        Priya Singh
                    </h3>

                    <p className="tracking-[4px] text-600 text-sm uppercase text-[#273a8a] mt-2">
                        Compliance Head
                    </p>

                    <div className="flex justify-center sm:justify-start gap-3 mt-4">

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition">
                            <Linkedin size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white flex items-center justify-center transition">
                            <Facebook size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center transition">
                            <Instagram size={18} />
                        </a>

                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 hover:text-white flex items-center justify-center transition">
                            <Twitter size={18} />
                        </a>

                    </div>

                </div>

            </div>

            <p className="mt-8 text-gray-600 leading-8">
                Specialized in ROC filings, company registration,
                startup compliance and legal documentation.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-2 bg-[#273a8a] via-purple-500 to-pink-600"></div>

        </div>

    </div>
 <div className="py-10 mx-auto px-4">

            <h2 className="text-center text-4xl font-bold text-black">
                Frequently Asked Questions
            </h2>

            <div className="w-32 h-[3px] bg-[#d4a017] mx-auto mt-2 mb-8"></div>

            <div className="border border-gray-300 bg-white">

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 last:border-b-0"
                    >
                        <button
                            onClick={() => setOpen(open === index ? -1 : index)}
                            className={`w-full flex items-center gap-4 px-4 py-4 text-left font-semibold transition
                            ${
                                open === index
                                    ? "bg-[#28357A] text-white"
                                    : "bg-[#f3f3f3] text-black"
                            }`}
                        >
                            {open === index ? (
                                <ChevronDown size={16} />
                            ) : (
                                <ChevronRight size={16} />
                            )}

                            {faq.question}
                        </button>

                        {open === index && (
                            <div className="bg-white px-4 py-6 text-[15px] leading-8 text-gray-700">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}

            </div>

        </div>

</div>
</section>

    {/* CTA SECTION */}
    <section className="bg-[#001b4e] py-14">

        <div className="max-w-7xl mx-auto px-4 text-center">

            <h2 className="text-3xl md:text-5xl font-bold text-white">
                Start Your Business Journey Today
            </h2>

            <p className="text-white mt-4 text-lg">
                Talk to a CA, CS, or attorney — free initial consultation,
                no obligation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

                <button className="bg-[#c88700] hover:bg-[#a76e00] text-white px-8 py-4 rounded font-semibold flex items-center justify-center gap-2 transition">
                    <ArrowRight size={18} />
                    View Our Services
                </button>

                <button
    onClick={() => setShowDemo(true)}
    className="bg-white text-black px-8 py-4 rounded font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition"
>
    Book Demo
</button>

            </div>

        </div>

    </section>
    <section className="bg-[#f3f3f3] py-8">

    <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

            <h2 className="text-3xl md:text-5xl font-bold text-black">
                Latest Insights & Compliance Updates
            </h2>

            <div className="w-28 h-1 bg-[#d4af37] mx-auto mt-5"></div>

        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog1.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                        Online ITR Filing
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        Online ITR Filing AY 2026-27 | File Income Tax Return
                        online quickly and securely.
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog2.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                        Class 43 Trademark Registration in India
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        NICE Classification Hospitality & Food Services
                        Class 43 Trademark registration guide.
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-500 flex flex-col">

                <img
                    src="/images/blog3.png"
                    alt=""
                    className="w-full h-[240px] object-cover"
                />

                <div className="p-6 flex flex-col flex-grow">

                    <h3 className="text-2xl font-bold text-black leading-10">
                        How to File GSTR 3B Nil Return Online
                    </h3>

                    <p className="text-gray-700 mt-4 leading-8">
                        Complete step-by-step GST Compliance guide for
                        filing GSTR 3B Nil Return online.
                    </p>

                    <div className="mt-auto pt-8">

                        <button className="bg-[#28357A] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1f295f] transition">
                            Read More &gt;
                        </button>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>
<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="text-yellow-500 font-semibold text-lg">
        ⭐ Testimonials
      </span>

      <h2 className="text-4xl font-bold mt-3">
        What Our Clients Say
      </h2>

      <div className="w-28 h-1 bg-yellow-500 mx-auto mt-5 rounded-full"></div>

      <p className="mt-6 text-gray-600 text-lg">
        Trusted by 50,000+ Businesses Across India
      </p>

    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >

      {testimonials.map((item, index) => (

        <SwiperSlide key={index}>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <div className="flex gap-1 mb-5">

              {[...Array(item.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            <p className="text-gray-600 leading-8 italic">
              "{item.review}"
            </p>

            <div className="flex items-center gap-4 mt-8">

              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              <div>

                <h4 className="font-bold text-lg">
                  {item.name}
                </h4>

                <p className="text-gray-500">
                  {item.city}
                </p>

              </div>

            </div>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>
      </main>
{showDemo && (
  <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">

    <div className="relative w-full max-w-6xl h-[95vh] bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,.35)] overflow-hidden">

      {/* Close Button */}
      <button
        onClick={() => setShowDemo(false)}
        className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        ✕
      </button>

      <div className="grid lg:grid-cols-[42%_58%] h-full">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#243B87] via-[#2d4cb0] to-[#1a255c] text-white">

          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-12 flex flex-col justify-center">

            <span className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold w-fit">
              🚀 Book Free Demo
            </span>

            <h2 className="text-3xl font-extrabold leading-tight mt-2">
              Grow Your
              <br />
              Business With
              <span className="text-yellow-400">
                {" "}MoneyHunt
              </span>
            </h2>

            <p className="mt-6 text-white/90 leading-8 text-lg">
              Schedule a FREE consultation with our experts.
              We help startups and businesses with Company
              Registration, GST, Trademark, Income Tax,
              Compliance and Legal Services.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">
                  ✔
                </div>
                <div>
                  <h4 className="font-bold">
                    Free Consultation
                  </h4>
                  <p className="text-white/70 text-sm">
                    No hidden charges
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">
                  ⏰
                </div>
                <div>
                  <h4 className="font-bold">
                    30 Minutes Demo
                  </h4>
                  <p className="text-white/70 text-sm">
                    One-to-one expert session
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">
                  🔒
                </div>
                <div>
                  <h4 className="font-bold">
                    Secure Process
                  </h4>
                  <p className="text-white/70 text-sm">
                    Your information stays safe
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl">
                  ⭐
                </div>
                <div>
                  <h4 className="font-bold">
                    50,000+ Happy Clients
                  </h4>
                  <p className="text-white/70 text-sm">
                    Trusted across India
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white h-full overflow-y-auto">

          <div className="p-6 sm:p-8 lg:p-10">

            <h3 className="text-3xl font-bold text-[#243B87]">
              Schedule Your Demo
            </h3>

            <p className="text-gray-500 mt-2 mb-4">
              Fill your details and our team will contact you shortly.
            </p>

           <form onSubmit={handleSubmit} className="space-y-5">
              
                         {/* Name & Mobile */}
              <div className="grid md:grid-cols-2 gap-5">

               <div>
    {errors.name && (
        <p className="text-red-500 text-sm mb-1">
            {errors.name}
        </p>
    )}

    <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.name
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>

              <div>
    {errors.mobile && (
        <p className="text-red-500 text-sm mb-1">
            {errors.mobile}
        </p>
    )}

    <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.mobile
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>

              </div>

              {/* Email & Business */}
              <div className="grid md:grid-cols-2 gap-5">

               <div>
    {errors.email && (
        <p className="text-red-500 text-sm mb-1">
            {errors.email}
        </p>
    )}

    <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.email
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>

               <div>
    {errors.business && (
        <p className="text-red-500 text-sm mb-1">
            {errors.business}
        </p>
    )}

    <input
        type="text"
        name="business"
        value={formData.business}
        onChange={handleChange}
        placeholder="Business Name"
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.business
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>

              </div>

              {/* Service & Date */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
    {errors.service && (
        <p className="text-red-500 text-sm mb-1">
            {errors.service}
        </p>
    )}

    <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.service
                ? "border-red-500"
                : "border-gray-300"
        }`}
    >
        <option value="">Select Service</option>
        <option>Company Registration</option>
        <option>GST Registration</option>
        <option>Trademark Registration</option>
    </select>
</div>

                <div>
    {errors.date && (
        <p className="text-red-500 text-sm mb-1">
            {errors.date}
        </p>
    )}

    <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.date
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>

              </div>

              {/* Time & City */}
              <div className="grid md:grid-cols-2 gap-5">

               <div>
    {errors.time && (
        <p className="text-red-500 text-sm mb-1">
            {errors.time}
        </p>
    )}

    <select
        name="time"
        value={formData.time}
        onChange={handleChange}
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.time
                ? "border-red-500"
                : "border-gray-300"
        }`}
    >
        <option value="">Select Time</option>
        <option>09:00 AM</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
    </select>
</div>

              <div>
    {errors.city && (
        <p className="text-red-500 text-sm mb-1">
            {errors.city}
        </p>
    )}

    <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.city
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>
              </div>

              {/* Message */}
             <div>
    {errors.message && (
        <p className="text-red-500 text-sm mb-1">
            {errors.message}
        </p>
    )}

    <textarea
        rows={4}
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your requirement..."
        className={`w-full rounded-xl px-5 py-3 border ${
            errors.message
                ? "border-red-500"
                : "border-gray-300"
        }`}
    />
</div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#293878] to-[#4967db] hover:from-[#1f2e6e] hover:to-[#3653c6] text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                🚀 Book Free Consultation
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
            
      <Footer />
    </>
  );
}