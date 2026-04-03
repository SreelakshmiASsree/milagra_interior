"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../public/images/milagra.png";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall, FiPhone } from "react-icons/fi";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page"
import aboutone from "../../public/images/aboutone.png";
import abouttwo from "../../public/images/abouttwo.png";
import packageone from "../../public/images/packageone.png";
import packagetwo from "../../public/images/packagetwo.png";
import packagethree from "../../public/images/packagethree.png";
import packagefour from "../../public/images/packagefour.png";
import { MdOutlineArrowForward } from "react-icons/md";
import projectone from "../../public/images/milagraimg1.jpg";
import projecttwo from "../../public/images/milagraimg3.jpg";
import projectthree from "../../public/images/milagraimg4.jpg";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";
import galleryone from "../../public/images/milagraimg5.jpg";
import gallerytwo from "../../public/images/milagraimg6.jpg";
import gallerythree from "../../public/images/milagraimg7.jpg";
import galleryfour from "../../public/images/milagraimg3.jpg";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import testimonialone from "../../public/images/testimonialone.png"
import { MdArrowOutward } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import InitialLoader from "../components/InitialLoader/page";
const testimonials = [
  {
    name: "Harisal",
    location: "Calicut",
    image: "/images/testimonialone.png",
    text: "We hired Milagra for our commercial space, and the results exceeded our expectations. The team is creative, responsive, and committed to quality. blending tradition ",
  },
  {
    name: "Joseph Varghese",
    location: "Thrissur",
    image: "/images/testimonialone.png",
    text: "We hired Milagra for our commercial space, and the results exceeded our expectations. The team is creative, responsive, and committed to quality. blending tradition ",
  },
  {
    name: "Cibin",
    location: "Calicut",
    image: "/images/testimonialone.png",
    text: "From the first consultation to final handover, the experience was seamless. Their design sense is exceptional, blending tradition with modern elements perfectly.",
  },
  {
    name: "Anjana",
    location: "Bangalore",
    image: "/images/testimonialone.png",
    text: "From the first consultation to final handover, the experience was seamless. Their design sense is exceptional, blending tradition with modern elements perfectly.",
  },
  {
    name: "Rahul",
    location: "Kochi",
    image: "/images/testimonialone.png",
    text: "From the first consultation to final handover, the experience was seamless. Their design sense is exceptional, blending tradition with modern elements perfectly.",
  },
];


const faqData = [
  {
    question: "How do I choose the right color palette for my space?",
    answer: "Start by considering your lighting, existing furniture, and personal taste. Test samples first."
  },
  {
    question: "What’s the typical timeline for a complete interiors?",
    answer: "It usually takes 6–12 weeks, depending on the size and customization level."
  },
  {
    question: "Can you work within my budget and still deliver a stylish design?",
    answer: "Absolutely! We tailor each design plan to match your budget and still keep it stylish."
  },
  {
    question: "Do I need to be involved throughout the entire design process?",
    answer: "We welcome collaboration but also offer full-service solutions for minimal involvement."
  }
];



const galleryImages = [
  galleryone,
  gallerytwo,
  gallerythree,
  galleryfour,
  gallerythree,

];

const repeatedImages = [...galleryImages, ...galleryImages, ...galleryImages];
export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigation = (path: string) => {
    if (pathname !== path) {
      setLoading(true);
      router.push(path);
    }
  };
  // Dynamically adjust visibleCards based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCards(1); // Mobile
      else if (width < 1024) setVisibleCards(2); // Tablet
      else setVisibleCards(3); // Desktop
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust startIndex if it goes out of bounds
  useEffect(() => {
    if (startIndex + visibleCards > testimonials.length) {
      setStartIndex(Math.max(testimonials.length - visibleCards, 0));
    }
  }, [visibleCards, testimonials.length]);

  const handleNext = () => {
    if (startIndex + visibleCards < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCards);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("initialLoaded");

    if (!hasLoaded) {
      setInitialLoading(true);
      const timer = setTimeout(() => {
        setInitialLoading(false);
        sessionStorage.setItem("initialLoaded", "true");
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setInitialLoading(false); // Skip loader if already loaded
    }
  }, []);

  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");

    if (scrollTo === "about") {
      // Delay scroll to ensure DOM is ready
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTo");
        }
      }, 300); // Adjust timing if needed
    }
  }, []);

  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo === "package") {
      setTimeout(() => {
        const contactSection = document.getElementById("package");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTo");
        }
      }, 300); // Delay ensures the section exists
    }
  }, []);

  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");

    if (scrollTo === "Consultation") {
      setTimeout(() => {
        const contactSection = document.getElementById("Consultation");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTo");
        }
      }, 300); // Delay ensures the section exists
    }
  }, []);

  return initialLoading ? (
    <InitialLoader />
  ) : (
    <>
      <section className=" lg:block hidden bg-[#ECE8E8]">
        <div className="container ">
          <div className="px-16  py-4 flex justify-between">
            <p className="text-[#868686] text-md font-normal flex items-center gap-1">
              <span><FiPhoneCall /></span>
              <a href="tel:+919809584012"></a>+91 9809584012
            </p>
            <div className="text-[#868686] text-md font-normal flex items-center gap-1">
              <span className="text-2xl"><MdEmail /></span>
              <a href="mailto:milgradesign@gmail.com"><p>milgradesign@gmail.com</p></a>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
      <section>
        <div
          className="w-full lg:h-screen  bg-cover bg-center flex items-center justify-start text-white"
          style={{ backgroundImage: `url('/images/milagraimg2.jpg')` }}
        >
          <div className="text-start  p-8 rounded-lg">
            <h1 className="text-4xl lg:text-7xl   font-medium mb-4 lg:ml-20 mt-20">We Build Your <br />OWn Dream</h1>

          </div>
        </div>
      </section>
      <section className="lg:py-16 py-8 " id="about">
        <div className="container">
          <div>
            <h2 className="text-[20px] md:text-[24px] font-normal text-[#C4910D] lg:ml-24 tracking-widest leading-[24px]">
              <span className="border-t border-[#C4910D] w-12 inline-block mr-2 mt-12 "></span>About Us
            </h2>
          </div>
          <div className="flex md:flex-row flex-col justify-center lg:gap-10 md:gap-4 gap-7">
            <div>
              <p className="text-[#535252] lg:text-lg text-sm max-w-[490px] lg:mt-12 mt-5">
                Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion,
                our team ensures exceptional quality and detail,
                transforming homes and commercial spaces into inspiring environments filled with style and purpose.
              </p>
              <div className="flex flex-row justify-center lg:justify-start lg:gap-10 gap-4 lg:mt-20 md:mt-5 mt-10 italic">
                <div className="bg-[#D9D9D9B2] text-[#555554] lg:text-3xl text-sm lg:px-6 px-4  py-3 rounded-xl font-semibold  w-fit">
                  <p className="">100+</p>
                  <p className="">Clients</p>
                </div>
                <div className="bg-[#D9D9D9B2] text-[#555554] lg:text-3xl text-sm lg:px-6 px-4 py-3 rounded-xl font-semibold  w-fit">
                  <p className="">5+</p>
                  <p className="">Awards</p>
                </div>
                <div className="bg-[#D9D9D9B2] text-[#555554] lg:text-3xl text-sm lg:px-6 px-4 py-3 rounded-xl font-semibold  w-fit">
                  <p className="">10+</p>
                  <p className="">years</p>
                </div>
              </div>
            </div>
            <div className="flex lg:gap-7 gap-4 ">
              <div className="" data-aos="zoom-in">
                <Image src={aboutone} alt="Logo" width={300} height={50} className="object-cover" />
              </div>
              <div className="lg:mt-24" data-aos="zoom-in">
                <Image src={abouttwo} alt="Logo" width={300} height={50} className="object-cover" />
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="lg:py-14 py-10" id="package">
        <div className="container">
          <div className="flex lg:flex-row flex-col  justify-center lg:gap-20 ">
            <div className="flex justify-start flex-col lg:gap-10 gap-5">
              <h2 className=" text-[20px] md:text-[24px] font-normal text-[#C4910D] lg:ml-24 tracking-widest leading-[24px]">
                <span className="border-t border-[#C4910D] w-12 inline-block mr-2 mt-5 "></span>Packages
              </h2>
              <p className="lg:text-5xl md:text-3xl text-xl font-extralight text-[#000] "> explore our thoughtfully <br />curated packages.</p>
              <div className="flex flex-col  lg:gap-5 gap-3 lg:mt-10" data-aos="fade-right">
                <Image src={packagetwo} alt="Logo" width={600} height={50} />
                <h1 className="lg:text-2xl text-xl  font-medium">Office and commersial Design</h1>
                <p className="lg:text-sm text-xs font-normal max-w-[550px]"> our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments filled with style and purpose.</p>
              </div>
            </div>

            <div className="flex flex-col lg:gap-5 gap-3 lg:mt-0 md:mt-10 mt-10" data-aos="fade-left">
              <Image src={packageone} alt="Logo" width={600} height={50} />
              <h1 className="lg:text-2xl text-xl  font-medium">Office and commersial Design</h1>
              <p className="lg:text-sm text-xs font-normal max-w-[550px]"> our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments filled with style and purpose.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:gap-18">
            <div className="flex flex-col lg:gap-5 gap-3 lg:mt-20 mt-10 " data-aos="fade-right">
              <Image src={packagefour} alt="Logo" width={600} height={50} />
              <h1 className="lg:text-2xl text-xl  font-medium">Office and commersial Design</h1>
              <p className="lg:text-sm text-xs font-normal max-w-[550px]"> our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments filled with style and purpose.</p>
            </div>


            <div className="flex ">
              <div className="flex flex-col lg:gap-5 gap-3  relative lg:bottom-40 lg:mt-0 md:mt-12 mt-10 " data-aos="fade-left">
                <Image src={packagethree} alt="Logo" width={600} height={50} />
                <h1 className="lg:text-2xl text-xl  font-medium">Office and commersial Design</h1>
                <p className="lg:text-sm text-xs font-normal max-w-[550px]"> our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments filled with style and purpose.</p>
                <div className="flex lg:justify-end lg:mt-32 justify-center ">
                  <button className="flex items-center font-normal gap-1 border bg-[#845607]  text-[#fff] border-[#C4910D] px-4 py-2 rounded-xl hover:bg-[#fff] hover:text-[#C4910D] mt-4">
                    Contact Us <MdOutlineArrowForward />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-14 py-10">
        {loading && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-70">
            <div className="flex gap-3">
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce1"></div>
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce2"></div>
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce3"></div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="flex  flex-col   lg:gap-20 ">
            <div className="flex  flex-col lg:gap-10 gap-5">
              <h2 className=" text-[20px] md:text-[24px] font-normal text-[#C4910D] lg:ml-12 tracking-widest leading-[24px]">
                <span className="border-t border-[#C4910D] w-12 inline-block mr-2 mt-5 "></span>Projects
              </h2>
              <div className="flex justify-center">
                <p className="max-w-[1270px] font-light text-center text-sm lg:text-[16px] lg:leading-7 mb-5 lg:mb-0">Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                  We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion,
                  our team ensures exceptional quality and detail, transforming
                  homes and commercial spaces into inspiring environments filled with style and purpose.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:mt-12 h-[600px] w-full" data-aos="fade-up">
              <Image src={projectone} alt="projectone" width={600} height={50} className="w-full h-full  rounded-xl object-cover" />
            </div>
            <div className="flex lg:flex-row flex-col justify-between lg:gap-10  gap-5 lg:mt-10 mt-5">
              <div className="">
                <div className="h-[470px] w-full">
                  <Image src={projecttwo} alt="projecttwo" width={700} height={50} className="rounded-xl h-full  object-cover" />
                </div>
                <p data-aos="fade-up" data-aos-duration="2000" className="mt-10 max-w-[600px] lg:leading-10 text-sm lg:text-lg" >Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                  We blend creativity and functionality to deliver elegant, bespoke interiors.  From concept to completion,
                  our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments
                  filled with style and purpose. </p>
                <div className="flex justify-start lg:gap-20 gap-10 g:mt-16 mt-8 ">
                  <div className="flex items-center gap-2 " >
                    <LuSquareArrowOutUpRight />
                    <p className="font-bold lg:text-2xl text-sm">2700 sq ft</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineBedroomChild />
                    <p className="font-bold lg:text-2xl text-sm">4  BHK</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <SlCalender />
                    <p className="font-bold lg:text-2xl text-sm">2024</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="lg:h-[800px]">
                  <Image src={projectthree} alt="projectthree" width={700} height={50} className=" h-full object-cover rounded-xl" />
                </div>
                <div className="flex lg:justify-end lg:mt-5 justify-center ">
                  <button onClick={() => handleNavigation("/portfolio")} className="flex items-center font-normal gap-1 border bg-[#845607]  text-[#fff] border-[#C4910D] px-4 py-2 rounded-xl hover:bg-[#fff] hover:text-[#C4910D] mt-4">
                    More Projects <MdOutlineArrowForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-16 py-8 overflow-hidden">
        {loading && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-70">
            <div className="flex gap-3">
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce1"></div>
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce2"></div>
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce3"></div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="flex flex-col  gap-5">
            <div className="flex flex-col lg:gap-10 gap-5">
              <h2 className="text-[20px] md:text-[24px] font-normal text-[#C4910D] lg:ml-12 tracking-widest leading-[24px]">
                <span className="border-t border-[#C4910D] w-12 inline-block mr-2 mt-5"></span>Gallery
              </h2>
            </div>
            <div className="flex justify-center">
              <p className="max-w-[1270px] font-light text-center  lg:text-[16px] text-sm lg:leading-7">
                Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion.
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Gallery */}
        <div className="relative lg:mt-10 mt-5 overflow-hidden group">
          <div className="flex marquee gap-3 ">
            {repeatedImages.map((img, index) => (
              <div
                key={index}
                className="min-w-[275px] transition-transform duration-500 hover:scale-130"
              >
                <div className="overflow-hidden  w-full h-[300px]  object-contain">
                  <Image
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    width={275}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="flex lg:justify-end lg:mt-10 justify-center ">
            <button onClick={() => handleNavigation("/gallery")} className="flex items-center font-normal gap-1 border bg-[#845607]  text-[#fff] border-[#C4910D] px-6 py-2 rounded-xl hover:bg-[#fff] hover:text-[#C4910D] mt-4">
              More  <MdOutlineArrowForward />
            </button>
          </div>
        </div>
      </section>
      <section className="lg:py-16 py-8">
        <div className="container ">
          <div className="flex flex-col lg:flex-row justify-center lg:gap-44 gap-10">
            <div>
              <h1 className="lg:text-6xl md:text-3xl text-lg font-semibold">
                Frequently Asked <br /> Questions
              </h1>
              <p className="max-w-[500px] lg:text-sm text-xs mt-4">
                Our FAQ section offers quick, clear answers to your most common interior design questions.
                From space planning and color selection to budget tips and design timelines, we’ve covered the essentials.
              </p>
              <div className="flex lg:justify-start justify-center lg:mt-10 mt-6">
                <a href="tel:+919809584012">
                  <button className="flex items-center font-normal gap-1 border bg-[#845607] text-[#fff] border-[#C4910D] px-6 py-2 rounded-tl-lg rounded-br-lg hover:bg-[#fff] hover:text-[#C4910D]">
                    Call +91 9809584012
                  </button>
                </a>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className=" space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`flex justify-between w-full text-left items-center ${activeIndex === index ? "text-red-600 font-semibold" : "text-black"
                      }`}
                  >
                    <p className="text-sm lg:text-base max-w-[440px]" >{faq.question}</p>
                    <p className="lg:text-xl text-lg">
                      {activeIndex === index ? <IoClose /> : <FaPlus />}
                    </p>
                  </button>
                  {activeIndex === index && (
                    <div className="mt-2 text-sm text-gray-600 transition-all duration-300 max-w-[440px]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:py-16 py-8">
        <div className="container ">
          <div className="flex flex-col items-center gap-10 mb-6">
            <div className="flex flex-col items-center lg:gap-5 gap-3">
              <h2 className="text-[20px] md:text-[24px] font-normal text-[#C4910D] tracking-widest leading-[24px] text-center">
                Testimonials
              </h2>
              <h3 className="text-base lg:text-4xl md:text-2xl font-semibold">What Client Say</h3>
              <p className="max-w-[1270px] font-light text-center text-[16px] lg:leading-7">
                Milagra Interior Design is proud to create spaces that inspire. Explore heartfelt testimonials
                from homeowners and business owners who turned their vision into reality with us.
              </p>
            </div>


          </div>
        </div>
        <div className="w-full bg-[#D3CEC5] py-16 px-4 rounded-md">
          <div className="container">
            <div className="flex justify-center items-start gap-10 flex-wrap">
              {visibleTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md py-9 px-6 w-full max-w-xs text-center flex flex-col gap-4"
                >
                  <div className="flex justify-around mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold">
                    {t.name}, <span className="font-normal">{t.location}</span>
                  </h4>
                  <p className="text-sm font-light mt-2 text-gray-700">{t.text}</p>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-around gap-6 mt-10">
              <button
                onClick={handlePrev}
                className={`w-10 h-10 rounded-full bg-white shadow flex items-center justify-center ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={startIndex === 0}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className={`w-10 h-10 rounded-full bg-white shadow flex items-center justify-center ${startIndex + visibleCards >= testimonials.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
                  }`}
                disabled={startIndex + visibleCards >= testimonials.length}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-16 py-8" id="Consultation">
        <div className="container">
          <div className="flex flex-col items-center gap-5">
            <h2 className="text-[20px] md:text-[24px] font-normal text-[#C4910D] tracking-widest leading-[24px] text-center">
              Get In Touch
            </h2>

            <p className="max-w-[1270px] font-light text-center text-[16px] lg:leading-7">
              Get in touch with us today to discuss your project and bring your interior design vision to life effortlessly.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="flex justify-center items-center mt-10" >
            <form className="bg-[#c5a266] lg:rounded-4xl rounded-xl lg:px-10 px-5 lg:pt-12 pt-10 pb-5 w-[90%] max-w-xl flex flex-col gap-6 shadow-md">
              <div className="flex flex-col gap-1">
                <label className="text-black font-normal lg:text-[16px] text-sm">Enter Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#f1e9dd] text-black px-4 py-3 rounded-md outline-none placeholder:text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-black font-normal lg:text-[16px] text-sm">Enter Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#f1e9dd] text-black px-4 py-3 rounded-md outline-none placeholder:text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-black font-normal lg:text-[16px] text-sm">Enter Something</label>
                <textarea
                  placeholder="Enter something"
                  className="bg-[#f1e9dd] text-black px-4 py-2 rounded-md min-h-[120px] resize-none outline-none placeholder:text-sm"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#87530b] text-white font-medium py-2 px-8 rounded-md hover:bg-[#fff] hover:text-[#C4910D] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}
