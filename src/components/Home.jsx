import React, { useState } from "react"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlineMailOutline } from "react-icons/md"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6"

const Home = () => {
  const [openTop, setOpenTop] = useState(false)
  const [openBottom, setOpenBottom] = useState(false)

  return (
    <>
      <div className="relative">
        <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
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
              <button onClick={() => setOpenTop(!openTop)} className="text-3xl text-blue-500">
                {openTop ? <HiX /> : <HiMenuAlt3 />}
              </button>
              {/* <button onClick={() => setOpenBottom(!openBottom)} className="text-3xl text-blue-500">
              {openBottom ? <HiX /> : <HiMenuAlt3 />}
            </button> */}
            </div>
          </div>

          {openTop && <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4">
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

        <nav className="bg-blue-500 w-full shadow-sm mt-18 nav2">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
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

        {openBottom && <div className="md:hidden bg-blue-200 px-6 py-4 space-y-3 text-gray-800 font-semibold mt-24">
          <p className="hover:text-blue-600 cursor-pointer">Home</p>
          <p className="hover:text-blue-600 cursor-pointer">About us</p>
          <p className="hover:text-blue-600 cursor-pointer">Courses</p>
          <p className="hover:text-blue-600 cursor-pointer">Scholarships</p>
          <p className="hover:text-blue-600 cursor-pointer">Partner</p>
          <p className="hover:text-blue-600 cursor-pointer">Franchise</p>
          <p className="hover:text-blue-600 cursor-pointer">Contact</p>

          <div className="flex gap-3 pt-3 text-blue-600">
            <p className="w-10 h-10 flex justify-center items-center rounded-full bg-white"><FaFacebookSquare size={20} /></p>
            <p className="w-10 h-10 flex justify-center items-center rounded-full bg-white"><FaInstagramSquare size={20} /></p>
            <p className="w-10 h-10 flex justify-center items-center rounded-full bg-white"><FaLinkedin size={20} /></p>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <p className="flex items-center gap-2 text-gray-800"><FaPhoneVolume /> +91 7020609101</p>
            <button className="flex items-center gap-2 py-2 px-4 bg-white cursor-pointer rounded hover:bg-gray-100">Apply Now <FaLongArrowAltRight className="text-xl" /></button>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Home
