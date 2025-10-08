import React, { useState, useEffect } from "react"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineMailOutline } from "react-icons/md"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"
import { FaLaptop, FaUsers, FaHandshake } from "react-icons/fa";

const Home = () => {
  const [openTop, setOpenTop] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const images = [
    "https://tipsg.in/assets/img/img/full%20stack%20(1).svg",
    "https://tipsg.in/assets/img/img/cyber%20security.svg",
    "https://tipsg.in/assets/img/img/ai.svg",
    "https://tipsg.in/assets/img/img/tipsg%2007.jpg",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1473187983305-f615310e7daa"
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((p) => (p + 1) % images.length), 2500)
    return () => clearInterval(timer)
  }, [images.length])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // const cardData = [
  //   { title: "Become an AI & Data Science Expert", description: "This is the first card", image: "https://tipsg.in/assets/img/img/detascienceexpert.png" },
  //   { title: "Card 2", description: "This is the second card", image: "https://tipsg.in/assets/img/img/fulllstack.png" },
  //   { title: "Card 3", description: "This is the third card", image: "https://tipsg.in/assets/img/img/fulllstack.png" },
  // ];

  return (
    <>
      <nav className={`w-full bg-white shadow-md fixed top-0 left-0 z-40 transition-transform duration-500 ${scrollY > 100 ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img width={100} src="https://tipsg.in/assets/img/img/new%20tipsg%20logo.png" alt="Logo" />
          </div>

          <div className="hidden lg:flex gap-10">
            <div className="flex gap-2 items-center">
              <p className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-400 text-white"><CiLocationOn size={20} /></p>
              <div>
                <h1 className="font-bold text-sm">Location Address</h1>
                <h3 className="text-xs">Gandhi Path Road, Vaishali Nagar, Jaipur</h3>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-400 text-white"><MdOutlineMailOutline size={20} /></p>
              <div>
                <h1 className="font-bold text-sm">Email Address</h1>
                <h3 className="text-xs">info@tipsg.in</h3>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button className="bg-blue-500 text-white cursor-pointer py-2 px-4 rounded-lg hover:bg-blue-600 transition">Download Brochure</button>
          </div>

          <div className="lg:hidden flex gap-3">
            <button onClick={() => setOpenTop(!openTop)} className="text-3xl text-blue-500">{openTop ? <HiX /> : <HiMenuAlt3 />}</button>
          </div>
        </div>

        {openTop &&
          <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
            <div className="flex gap-2 items-center">
              <p className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-400 text-white"><CiLocationOn size={20} /></p>
              <div>
                <h1 className="font-bold text-sm">Location Address</h1>
                <h3 className="text-xs">Gandhi Path Road, Vaishali Nagar, Jaipur</h3>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p className="w-10 h-10 rounded-full flex justify-center items-center bg-blue-400 text-white"><MdOutlineMailOutline size={20} /></p>
              <div>
                <h1 className="font-bold text-sm">Email Address</h1>
                <h3 className="text-xs">info@tipsg.in</h3>
              </div>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Download Brochure</button>
          </div>
        }
      </nav>

      <nav className={`bg-blue-500 w-full fixed z-50 left-0 shadow-md transition-all duration-500 ${scrollY > 100 ? "top-0" : "top-[73px]"} nav2`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex gap-6 text-white font-semibold flex-wrap">
            <p className="hover:text-blue-200 cursor-pointer">Home</p>
            <p className="hover:text-gray-200 cursor-pointer">About us</p>
            <p className="hover:text-gray-200 cursor-pointer">Courses</p>
            <p className="hover:text-gray-200 cursor-pointer">Scholarships</p>
            <p className="hover:text-gray-200 cursor-pointer">Partner</p>
            <p className="hover:text-gray-200 cursor-pointer">Franchise</p>
            <p className="hover:text-gray-200 cursor-pointer">Contact</p>
          </div>

          <div className="flex gap-3 text-blue-600">
            <p className="w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-100 cursor-pointer"><FaFacebookSquare size={20} /></p>
            <p className="w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-100 cursor-pointer"><FaInstagramSquare size={20} /></p>
            <p className="w-10 h-10 flex justify-center items-center rounded-full bg-white hover:bg-gray-100 cursor-pointer"><FaLinkedin size={20} /></p>
          </div>

          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2 text-white"><FaPhoneVolume /> +91 7020609101</p>
            <button className="flex items-center gap-2 py-2 px-4 bg-white cursor-pointer rounded hover:bg-gray-100">Apply Now <FaLongArrowAltRight className="text-xl" /></button>
          </div>
        </div>
      </nav>

      <div className="relative w-full h-[100vh] mt-[180px] slide1">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="w-full h-full object-cover transition-all duration-700 ease-in-out" />
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}></div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mt-10">Why Choose TIPS-G ?</h1>
        <p className="mt-1">Empowering Your Career with the Best in Education and Industry Experience</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-6">

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-1 hover:shadow-2xl transition-shadow duration-300">
            <img src="https://tipsg.in/assets/img/img/detascienceexpert.png" alt="Card 1" className="w-full h-48 object-cover transition-transform duration-1000 hover:scale-110" />
            <div className="p-5">
              <h2 className="mb-2 font-semibold">Become an AI & Data Science Expert</h2>
              <h1 className="font-bold hover:text-blue-400 text-xl">Master 100+ Tools in Applied AI, ML & Big Data</h1>
              <p className="text-gray-500 mt-1">Get trained by industry experts and IIT alumni. Work on live projects in NLP, Computer Vision, Generative AI, and more.</p>
              <p className="text-sm mt-1">AI & Data Science Course India, IIT AI Degree, Applied AI Training, Data Science Certification</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-1 hover:shadow-2xl transition-shadow duration-300">
            <img src="https://tipsg.in/assets/img/img/fulllstack.png" alt="Card 2" className="w-full h-48 object-cover transition-transform duration-1000 hover:scale-110" />
            <div className="p-4">
              <h2 className="mb-2 font-semibold">Become an AI & Data Science Expert</h2>
              <h1 className="font-bold hover:text-blue-400 text-xl">Master 100+ Tools in Applied AI, ML & Big Data</h1>
              <p className="text-gray-500 mt-1">Get trained by industry experts and IIT alumni. Work on live projects in NLP, Computer Vision, Generative AI, and more.</p>
              <p className="text-sm mt-1">AI & Data Science Course India, IIT AI Degree, Applied AI Training, Data Science Certification</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-1 hover:shadow-2xl transition-shadow duration-300">
            <img src="https://tipsg.in/assets/img/img/fulllstack.png" alt="Card 3" className="w-full h-48 object-cover transition-transform duration-1000 hover:scale-110" />
            <div className="p-4">
              <h2 className="mb-2 font-semibold">Become an AI & Data Science Expert</h2>
              <h1 className="font-bold hover:text-blue-400 text-xl">Master 100+ Tools in Applied AI, ML & Big Data</h1>
              <p className="text-gray-500 mt-1">Get trained by industry experts and IIT alumni. Work on live projects in NLP, Computer Vision, Generative AI, and more.</p>
              <p className="text-sm mt-1">AI & Data Science Course India, IIT AI Degree, Applied AI Training, Data Science Certification</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="postion">
          <div className="relative bg-[url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d3')] bg-cover bg-center bg-fixed py-16">
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-10 text-center text-white">

              <div className="flex flex-col items-center w-full md:w-1/3">
                <div className="border border-white/70 rounded-full p-6 mb-4">
                  <FaLaptop className="text-4xl text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">LEARN FROM THE BEST –</h3>
                <p className="font-bold text-sm sm:text-base">IITS + INDUSTRY EXPERTS</p>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/3">
                <div className="border border-white/70 rounded-full p-6 mb-4">
                  <FaUsers className="text-4xl text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">PLACEMENT-FOCUSED TRAINING</h3>
                <p className="font-bold text-sm sm:text-base">WITH UPTO ₹25 LPA PACKAGES</p>
              </div>

              <div className="flex flex-col items-center w-full md:w-1/3">
                <div className="border border-white/70 rounded-full p-6 mb-4">
                  <FaHandshake className="text-4xl text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">STACKABLE SKILLS FOR THE FUTURE –</h3>
                <p className="font-bold text-sm sm:text-base">AI TO CYBER SECURITY</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
