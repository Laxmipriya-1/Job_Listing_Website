// import React from 'react'
// import { BiTimeFive } from 'react-icons/bi'
// import Google_Logo from "../../assets/Google_Logo.jpg"
// import asus from "../../assets/asus.png"
// import Apple from "../../assets/Apple.png"
// import capgemini from "../../assets/capgemini.jpg"
// import EY from "../../assets/EY.png"
// import facebook from "../../assets/facebook.jpg"
// import Genpact from "../../assets/Genpact.png"
// import hp from "../../assets/hp.png"

//   const Data = [
//   {
//     id:1,
//     img:Google_Logo,
//     title:"Application Developer",
//     time:'12Hrs',
//     location:"Bangalore",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"Google",
//   },
//   {
//     id:2,
//     img:Apple,
//     title:"React Native",
//     time:'1day',
//     location:"Delhi",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"Apple",
//   },
//   {
//     id:3,
//     img:asus,
//     title:"Full Stack Developer",
//     time:'6Hrs',
//     location:"Bangalore",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"ASUS",
//   },
//   {
//     id:4,
//     img:capgemini,
//     title:"Data Analyst",
//     time:'Now',
//     location:"Pune",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"Capgemini",
//   },
//   {
//     id:5,
//     img:EY,
//     title:"Data Science",
//     time:'Now',
//     location:"Chennai",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"EY",
//   },
//   {
//     id:6,
//     img:facebook,
//     title:"Frontend Developer",
//     time:'15Hrs',
//     location:"Bangalore",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"Facebook",
//   },
//   {
//     id:7,
//     img:Genpact,
//     title:"Accounting",
//     time:'2Hrs',
//     location:"Kolkata",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"Genpact",
//   },
//   {
//     id:8 ,
//     img:hp,
//     title:"System Engineer",
//     time:'Now',
//     location:"Chennai",
//     desc:"We require a 3+ years experience of application developer and to see click on View More Option..!", 
//     company:"HP",
//   },
// ];

// const Jobs = () => {


//   return (
//     <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
       
//        {
//         Data.map(({id,img,title,time,location,desc,company}) =>{
//           return(
//              //This is returning a single job card
//              <div key={id} className="group group/item singleJob w-62.5 p-5 bg-white
//                 rounded-[10px] hover:bg-blue-400 shadow-2xs shadow-gray-500 hover:shadow-lg ">

//               <span className="flex justify-between items-center gap-4">
//                <h1 className="text-[16px] font-semibold text-black group-hover:text-white
//                 ">{title}</h1>
//                <span className="flex items-center text-[#ccc] gap-1">
//                <BiTimeFive/>{time}
//                </span>
//              </span>

//               <h6 className="text-[#ccc">{location}</h6>

//                <p className="text-[13px] text-[#959595] pt-5 border-t-2 mt-5
//                group-hover:text-white ">
//                 {desc}
//                </p>


//                <div className='company flex items-center gap-2'>
//                  <img src={img} alt="Company Logo" className='w-[10%]' />
//                  <span className="text-[14px] py-4 block group-hover:text-white">{company}</span>
//                </div>

//                 <button className="border-2 rounded-[10px] block p-2.5 w-full text-14px
//                 font-semibold text-black hover:bg-white group-hover/item:text-black group-hover">View More</button>

//           </div>

//           )
//         })
//        }

//     </div>
//   )
// }

// export default Jobs