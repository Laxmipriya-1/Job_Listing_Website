// import React from 'react'
// import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
// import { BsFacebook } from 'react-icons/bs'

// const Footer = () => {
//   return (
//     <div className="footer p-[5rem] mb-4 bg-blue-500 rounded-[10px]
//      gap-8 grid grid-cols-5 items-center justify-center">

//        <div>
//          <div className="logoDiv">
//           <h1 className="logo text-[25px] text-white pb-[1.5rem]">
//             <strong>Job Listing Website </strong>
//           </h1>
//         </div>

//         <p className="text-white pb-[13px] opacity-70 leading-7">
//           We always make our seekers and companies find the best jobs 
//           and employees find the best candidates.
//         </p>
//        </div>

//        <div className='grid '>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Company
//         </span>
//          <div className='grid gap-3 '>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>

//          </div>

//        </div>

//        <div className='grid '>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Resources
//         </span>
//          <div className='grid gap-3 '>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>

//          </div>

//        </div>
       
//        <div className='grid '>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Support
//         </span>
//          <div className='grid gap-3 '>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
//            <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
//          </div>

//        </div>

//        <div className='grid '>
//         <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
//           Contact Info
//         </span>
//          <div>
//            <small className='text-[14px] text-white'>
//             JobListingWebsite@gmail.com
//            </small>
//              <div className='icons flex gap-4 py-[1rem]'>
//                <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full
//                  text-blue-600'/>
//                <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full
//                  text-blue-600'/>
//                <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full
//                  text-blue-600'/> 
//              </div>
  

//          </div>

//        </div>

//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-blue-500 rounded-xl 
                    px-6 py-10 md:px-12 lg:px-20 
                    mb-6">

      <div className="grid gap-10
                      grid-cols-1 sm:grid-cols-2 
                      md:grid-cols-3 lg:grid-cols-5">

        {/* Logo + Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h1 className="text-2xl text-white font-bold pb-6">
            Job Listing Website
          </h1>

          <p className="text-white opacity-70 leading-7 text-sm md:text-base">
            We always make our seekers and companies find the best jobs 
            and employees find the best candidates.
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold pb-6 text-white">
            Company
          </h2>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              About Us
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Features
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              News
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              FAQ
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold pb-6 text-white">
            Resources
          </h2>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Account
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Support Center
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Feedback
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold pb-6 text-white">
            Support
          </h2>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Events
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Promo
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Req Demo
            </li>
            <li className="text-white opacity-70 hover:opacity-100 cursor-pointer transition">
              Careers
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold pb-6 text-white">
            Contact Info
          </h2>

          <small className="text-white text-sm md:text-base">
            JobListingWebsite@gmail.com
          </small>

          <div className="flex gap-4 pt-5">
            <AiFillInstagram className="bg-white p-2 h-9 w-9 rounded-full text-blue-600 cursor-pointer hover:scale-110 transition" />
            <BsFacebook className="bg-white p-2 h-9 w-9 rounded-full text-blue-600 cursor-pointer hover:scale-110 transition" />
            <AiOutlineTwitter className="bg-white p-2 h-9 w-9 rounded-full text-blue-600 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer