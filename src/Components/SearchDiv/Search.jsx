// import React from 'react'
// import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
// import { BsHouseDoor } from 'react-icons/bs'
// import { CiLocationOn } from 'react-icons/ci'

// const Search = () => {
//   return (
//     <div className='searchDiv grid gp-10 bg-gray-500 rounded-[10px] p-3rem'>

//     {/* Form For Search */}
//     <form action=" ">
       
//       <div className='firstDiv flex justify-between items-center rounded-lg
//            gap-2.5 bg-white p-5 shadow-md shadow-gray-500'>


//          <div className='flex gap-2 items-center'>
//             <AiOutlineSearch className='text-[25px] icon'/>
//             <input type='text' className='bg-transparent text-blue-900
//                focus:outline-none w-full' placeholder='Search Job Here....'/>
//                <AiOutlineCloseCircle className='text-[30px] text-gray-500 
//                 hover:text-red-500 icon'/>
//          </div>
        
//         <div className='flex gap-2 items-center'>
//             <BsHouseDoor className='text-[25px] icon'/>
//             <input type='text' className="bg-transparent text-blue-900
//                focus:outline-none w-full" placeholder='Search By Company....'/>
//                <AiOutlineCloseCircle className='text-[30px] text-gray-500 
//                 hover:text-red-500 icon'/>
//          </div>
        
//         <div className='flex gap-2 items-center'>
//             <CiLocationOn className='text-[25px] icon'/>
//             <input type='text' className='bg-transparent text-blue-900
//                focus:outline-none w-full' placeholder='Search By Location....'/>
//                <AiOutlineCloseCircle className='text-[30px] text-gray-500 
//                 hover:text-red-500 icon'/>
//          </div>

//           <button className='bg-blue-700 h-full px-10 py-4 rounded-[10px]
//           text-white cursor-pointer hover:bg-blue-300'>Search</button>

//       </div>

//     </form>
      

//       {/* Drop Down Boxes */}
//     <div className='secDiv flex items center gap-10 justify-center bg-white '>
      
//       <div className='singleSearch flex items-center gap-1'>
//         <label htmlFor="City" className='text-[#808080] font-semibold'>
//           Sort By:
//         </label>
         
//          <select name=' ' id="City" className='bg-white rounded-[3px] px-4 py-1'>
//            <option value="">City</option>  
//            <option value="Bangalore">Bangalore</option>
//            <option value="Mumbai">Mumbai</option>
//            <option value="Pune">Pune</option>
//            <option value="Delhi">Delhi</option>
//            <option value="Kolkata">Kolkata</option>
//            <option value="Bhubaneswar">Bhubaneswar</option>
//            <option value="Chennai">Chennai</option>
//             <option value="Other">Other</option>
//          </select>
//       </div>

//       <div className='singleSearch flex items-center gap-1'>
//         <label htmlFor="Category" className='text-[#808080] font-semibold'>
//           Category:
//         </label>
         
//          <select name=' ' id="Category" className='bg-white rounded-[3px] px-4 py-1'>  
//            <option value="IT">IT</option>
//            <option value="Marketing">Marketing</option>
//            <option value="Designing">Designing</option>
//            <option value="Accounting">Accounting</option>
           
//          </select>
//       </div>

//           <div className='singleSearch flex items-center gap-1'>
//         <label htmlFor="Level" className='text-[#808080] font-semibold'>
//           Level:
//         </label>
         
//          <select name=' ' id="Level" className='bg-white rounded-[3px] px-4 py-1'> 
//            <option value="Bangalore">Senior</option>
//            <option value="Mumbai">Intermediate</option>
//            <option value="Pune">Beginner</option>
//            <option value="Delhi">Advance</option>
//          </select>
//       </div>

      
//           <div className='singleSearch flex items-center gap-1'>
//         <label htmlFor="Type" className='text-[#808080] font-semibold'>
//           Type:
//         </label>
         
//          <select name=' ' id="Type" className='bg-white rounded-[3px] px-4 py-1'> 
//            <option value="Full-time">Full-time</option>
//            <option value="Remote">Remote</option>
//            <option value="Contract">Contract</option>
//            <option value="Part-Time">Part-Time</option>
//          </select>
//       </div>


//        {/* Clear Button DIV  */}
//       <div className="cl-btn bg-white justify-center p-3">
//      <span className="text-#a1a1a1 cursor-pointer bg-blue-400 text-red 
//       rounded-[10px] hover:bg-blue-400 shadow-2xs shadow-gray-400 hover:shadow-lg ">Clear All</span>
//       </div>

//     </div>

//     </div>
//   )
// }

// export default Search



// import React, { useState } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BsHouseDoor } from "react-icons/bs";
// import { CiLocationOn } from "react-icons/ci";

// // Logos

// import Google_Logo from "../../assets/Google_Logo.jpg"
// import asus from "../../assets/asus.png"
// import Apple from "../../assets/Apple.png"
// import capgemini from "../../assets/capgemini.jpg"
// import EY from "../../assets/EY.png"
// import facebook from "../../assets/facebook.jpg"
// import Genpact from "../../assets/Genpact.png"
// import hp from "../../assets/hp.png"
// import samsung from "../../assets/samsung.png"

// const Search = () => {

//   // 🔹 Example Job Data (with company logo)
//   const jobsData = [
//     {
//       id: 1,
//       title: "Frontend Developer",
//       company: "Google",
//       logo: Google_Logo,
//       location: "Bangalore",
//       city: "Bangalore",
//       category: "IT",
//       level: "Senior",
//       type: "Full-time",
//       description: "We are looking for an experienced Frontend Developer with React skills.",
//     },
//     {
//       id: 2,
//       title: "Marketing Manager",
//       company: "Asus",
//       logo: asus,
//       location: "Mumbai",
//       city: "Mumbai",
//       category: "Marketing",
//       level: "Intermediate",
//       type: "Full-time",
//       description: "Responsible for marketing campaigns and brand strategy.",
//     },
//     {
//       id: 3,
//       title: "UI/UX Designer",
//       company: "Apple",
//       logo: Apple,
//       location: "Pune",
//       city: "Pune",
//       category: "Designing",
//       level: "Beginner",
//       type: "Remote",
//       description: "Design intuitive user experiences and modern UI systems.",
//     },
//     {
//       id: 4,
//       title: "Frontend Designer",
//       company: "Capgemini",
//       logo: capgemini,
//       location: "Pune",
//       city: "Pune",
//       category: "Designing",
//       level: "Beginner",
//       type: "Remote",
//       description: "Design intuitive user experiences and modern UI systems.",
//     },
//     {
//       id: 5,
//       title: "Application Developer",
//       company: "EY",
//       logo: EY,
//       location: "Delhi",
//       city: "Delhi",
//       category: "IT",
//       level: "Intermediate",
//       type: "Remote",
//       description: "Design intuitive user experiences and modern Applications.",
//     },
//     {
//       id: 6,
//       title: "Frontend Designer",
//       company: "Capgemini",
//       logo: capgemini,
//       location: "Pune",
//       city: "Pune",
//       category: "Designing",
//       level: "Experienced",
//       type: "Full-Time",
//       description: "Design intuitive user experiences and modern UI systems.",
//     },
//     {
//       id: 7,
//       title: "System Engineer",
//       company: "HP",
//       logo: hp,
//       location: "Bangalore",
//       city: "Bangalore",
//       category: "IT",
//       level: "Beginner",
//       type: "Full-Time",
//       description: "Design intuitive user experiences and modern UI systems.",
//     },
//     {
//       id: 8,
//       title: "Frontend Designer",
//       company: "Capgemini",
//       logo: capgemini,
//       location: "Bangalore",
//       city: "Bangalore",
//       category: "Designing",
//       level: "Intermediate",
//       type: "Remote",
//       description: "Design intuitive user experiences and modern UI systems.",
//     },
//     {
//       id: 9,
//       title: "Full-Stack Developer",
//       company: "Facebook",
//       logo: facebook,
//       location: "Chennai",
//       city: "Chennai",
//       category: "Development",
//       level: "Intermediate",
//       type: "Hybrid",
//       description: "Develop good and smooth site.",
//     },
//     {
//       id: 10,
//       title: "Software Developer",
//       company: "Genpact",
//       logo: Genpact,
//       location: "Delhi",
//       city: "Delhi",
//       category: "Development",
//       level: "Intermediate",
//       type: "Full-Time",
//       description: "Develop good and smooth site.",
//     },
//     {
//       id: 11,
//       title: "Accountant",
//       company: "Genpact",
//       logo: Genpact,
//       location: "Kolkata",
//       city: "Kolkata",
//       category: "Accountant",
//       level: "Beginner",
//       type: "Full-Time",
//       description: "Give good accounting services.",
//     },
//     {
//       id: 12,
//       title: "Software Developer",
//       company: "Samsung",
//       logo: samsung,
//       location: "Delhi",
//       city: "Delhi",
//       category: "Developer",
//       level: "Beginner",
//       type: "Full-Time",
//       description: "Develop good and smooth site.",
//     },
    
//   ];

//   const [filters, setFilters] = useState({
//     title: "",
//     company: "",
//     location: "",
//     city: "",
//     category: "",
//     level: "",
//     type: "",
//   });

//   const [visibleCount, setVisibleCount] = useState(3);

//   const handleChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const clearFilters = () => {
//     setFilters({
//       title: "",
//       company: "",
//       location: "",
//       city: "",
//       category: "",
//       level: "",
//       type: "",
//     });
//   };

//   // 🔹 Filtering Logic
//   const filteredJobs = jobsData.filter((job) => {
//     return (
//       job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
//       job.company.toLowerCase().includes(filters.company.toLowerCase()) &&
//       job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
//       (filters.city === "" || job.city === filters.city) &&
//       (filters.category === "" || job.category === filters.category) &&
//       (filters.level === "" || job.level === filters.level) &&
//       (filters.type === "" || job.type === filters.type)
//     );
//   });

//   return (
//     <div className="w-full bg-gray-100 p-4 md:p-8">

//       {/* 🔎 SEARCH SECTION */}
//       <div className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col gap-4">

//         {/* Top Inputs */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

//           <div className="flex items-center gap-2 border rounded-md p-2">
//             <AiOutlineSearch />
//             <input
//               type="text"
//               name="title"
//               placeholder="Job Name"
//               value={filters.title}
//               onChange={handleChange}
//               className="w-full outline-none"
//             />
//           </div>

//           <div className="flex items-center gap-2 border rounded-md p-2">
//             <BsHouseDoor />
//             <input
//               type="text"
//               name="company"
//               placeholder="Company"
//               value={filters.company}
//               onChange={handleChange}
//               className="w-full outline-none"
//             />
//           </div>

//           <div className="flex items-center gap-2 border rounded-md p-2">
//             <CiLocationOn />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={filters.location}
//               onChange={handleChange}
//               className="w-full outline-none"
//             />
//           </div>

//           <select
//             name="city"
//             value={filters.city}
//             onChange={handleChange}
//             className="border rounded-md p-2"
//           >
//             <option value="">All Cities</option>
//             <option value="Bangalore">Bangalore</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Pune">Pune</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="Delhi">Delhi</option>
//             <option value="Kolkata">Kolkata</option>
//             <option value="Bhubaneswar">Bhubaneswar</option>
//             <option value="Chennai">Chennai</option>
//           </select>

//         </div>

//         {/* Dropdown Filters */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

//           <select name="category" value={filters.category} onChange={handleChange} className="border p-2 rounded-md">
//             <option value="">All Categories</option>
//             <option value="IT">IT</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Designing">Designing</option>
//             <option value="Accounting">Accounting</option>
//             <option value="Development">Development</option>
//           </select>

//           <select name="level" value={filters.level} onChange={handleChange} className="border p-2 rounded-md">
//             <option value="">All Levels</option>
//             <option value="Senior">Senior</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Beginner">Beginner</option>
//           </select>

//           <select name="type" value={filters.type} onChange={handleChange} className="border p-2 rounded-md">
//             <option value="">All Types</option>
//             <option value="Full-time">Full-time</option>
//             <option value="Remote">Remote</option>
//             <option value="Contract">Contract</option>
//             <option value="Part-Time">Part-Time</option>
//              <option value="Hybrid">Hybrid</option>
//           </select>

//           <button
//             onClick={clearFilters}
//             className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
//           >
//             Clear All
//           </button>

//         </div>
//       </div>

//       {/* 🔹 JOB RESULTS */}
//       <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//         {filteredJobs.slice(0, visibleCount).map((job) => (
//           <div key={job.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

//             {/* Company + Logo */}
//             <div className="flex items-center gap-3 mb-3">
//               <img
//                 src={job.logo}
//                 alt={job.company}
//                 className="w-12 h-12 object-contain rounded-md"
//               />
//               <div>
//                 <h2 className="font-bold text-lg text-blue-700">{job.title}</h2>
//                 <p className="text-gray-600">{job.company}</p>
//               </div>
//             </div>

//             <p className="text-sm text-gray-500">{job.location}</p>
//             <p className="text-sm mt-2">{job.category} | {job.level} | {job.type}</p>

//             <p className="text-sm mt-3 text-gray-600">{job.description}</p>

//             <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//               View More
//             </button>

//           </div>
//         ))}

//       </div>

//       {/* 🔹 View More Button */}
//       {visibleCount < filteredJobs.length && (
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setVisibleCount(visibleCount + 3)}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
//           >
//             Load More
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Search;

import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

// Logos
import Google_Logo from "../../assets/Google_Logo.jpg"
import asus from "../../assets/asus.png"
import Apple from "../../assets/Apple.png"
import capgemini from "../../assets/capgemini.jpg"
import EY from "../../assets/EY.png"
import facebook from "../../assets/facebook.jpg"
import Genpact from "../../assets/Genpact.png"
import hp from "../../assets/hp.png"
import samsung from "../../assets/samsung.png"

const Search = () => {

  // 🔹 Example Job Data (UNCHANGED)
  const jobsData = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      logo: Google_Logo,
      location: "Bangalore",
      city: "Bangalore",
      category: "IT",
      level: "Senior",
      type: "Full-time",
      description: "We are looking for an experienced Frontend Developer with React skills.",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Asus",
      logo: asus,
      location: "Mumbai",
      city: "Mumbai",
      category: "Marketing",
      level: "Intermediate",
      type: "Full-time",
      description: "Responsible for marketing campaigns and brand strategy.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Apple",
      logo: Apple,
      location: "Pune",
      city: "Pune",
      category: "Designing",
      level: "Beginner",
      type: "Remote",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 4,
      title: "Frontend Designer",
      company: "Capgemini",
      logo: capgemini,
      location: "Pune",
      city: "Pune",
      category: "Designing",
      level: "Beginner",
      type: "Remote",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 5,
      title: "Application Developer",
      company: "EY",
      logo: EY,
      location: "Delhi",
      city: "Delhi",
      category: "IT",
      level: "Intermediate",
      type: "Remote",
      description: "Design intuitive user experiences and modern Applications.",
    },
    {
      id: 6,
      title: "Frontend Designer",
      company: "Capgemini",
      logo: capgemini,
      location: "Pune",
      city: "Pune",
      category: "Designing",
      level: "Experienced",
      type: "Full-Time",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 7,
      title: "System Engineer",
      company: "HP",
      logo: hp,
      location: "Bangalore",
      city: "Bangalore",
      category: "IT",
      level: "Beginner",
      type: "Full-Time",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 8,
      title: "Frontend Designer",
      company: "Capgemini",
      logo: capgemini,
      location: "Bangalore",
      city: "Bangalore",
      category: "Designing",
      level: "Intermediate",
      type: "Remote",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 9,
      title: "Full-Stack Developer",
      company: "Facebook",
      logo: facebook,
      location: "Chennai",
      city: "Chennai",
      category: "Development",
      level: "Intermediate",
      type: "Hybrid",
      description: "Develop good and smooth site.",
    },
    {
      id: 10,
      title: "Software Developer",
      company: "Genpact",
      logo: Genpact,
      location: "Delhi",
      city: "Delhi",
      category: "Development",
      level: "Intermediate",
      type: "Full-Time",
      description: "Develop good and smooth site.",
    },
    {
      id: 11,
      title: "Accountant",
      company: "Genpact",
      logo: Genpact,
      location: "Kolkata",
      city: "Kolkata",
      category: "Accountant",
      level: "Beginner",
      type: "Full-Time",
      description: "Give good accounting services.",
    },
    {
      id: 12,
      title: "Software Developer",
      company: "Samsung",
      logo: samsung,
      location: "Delhi",
      city: "Delhi",
      category: "Developer",
      level: "Beginner",
      type: "Full-Time",
      description: "Develop good and smooth site.",
    },
    {
      id: 13,
      title: "Frontend Developer",
      company: "Google",
      logo: Google_Logo,
      location: "Bangalore",
      city: "Bangalore",
      category: "IT",
      level: "Senior",
      type: "Full-time",
      description: "We are looking for an experienced Frontend Developer with React skills.",
    },
    {
      id: 14,
      title: "Marketing Manager",
      company: "Asus",
      logo: asus,
      location: "Mumbai",
      city: "Mumbai",
      category: "Marketing",
      level: "Intermediate",
      type: "Full-time",
      description: "Responsible for marketing campaigns and brand strategy.",
    },
    {
      id: 15,
      title: "UI/UX Designer",
      company: "Apple",
      logo: Apple,
      location: "Pune",
      city: "Pune",
      category: "Designing",
      level: "Beginner",
      type: "Remote",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 16,
      title: "Frontend Designer",
      company: "Capgemini",
      logo: capgemini,
      location: "Pune",
      city: "Pune",
      category: "Designing",
      level: "Beginner",
      type: "Remote",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 17,
      title: "Application Developer",
      company: "EY",
      logo: EY,
      location: "Delhi",
      city: "Delhi",
      category: "IT",
      level: "Intermediate",
      type: "Remote",
      description: "Design intuitive user experiences and modern Applications.",
    },
    {
      id: 18,
      title: "Frontend Designer",
      company: "Capgemini",
      logo: capgemini,
      location: "Pune",
      city: "Pune",
      category: "Designing",
      level: "Experienced",
      type: "Full-Time",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 19,
      title: "System Engineer",
      company: "HP",
      logo: hp,
      location: "Bangalore",
      city: "Bangalore",
      category: "IT",
      level: "Beginner",
      type: "Full-Time",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 20,
      title: "Frontend Designer",
      company: "Capgemini",
      logo: capgemini,
      location: "Bangalore",
      city: "Bangalore",
      category: "Designing",
      level: "Intermediate",
      type: "Remote",
      description: "Design intuitive user experiences and modern UI systems.",
    },
    {
      id: 21,
      title: "Full-Stack Developer",
      company: "Facebook",
      logo: facebook,
      location: "Chennai",
      city: "Chennai",
      category: "Development",
      level: "Intermediate",
      type: "Hybrid",
      description: "Develop good and smooth site.",
    },
    {
      id: 22,
      title: "Software Developer",
      company: "Genpact",
      logo: Genpact,
      location: "Delhi",
      city: "Delhi",
      category: "Development",
      level: "Intermediate",
      type: "Full-Time",
      description: "Develop good and smooth site.",
    },
    {
      id: 23,
      title: "Accountant",
      company: "Genpact",
      logo: Genpact,
      location: "Kolkata",
      city: "Kolkata",
      category: "Accountant",
      level: "Beginner",
      type: "Full-Time",
      description: "Give good accounting services.",
    },
    {
      id: 24,
      title: "Software Developer",
      company: "Samsung",
      logo: samsung,
      location: "Delhi",
      city: "Delhi",
      category: "Developer",
      level: "Beginner",
      type: "Full-Time",
      description: "Develop good and smooth site.",
    },
  ];

  const [filters, setFilters] = useState({
    title: "",
    company: "",
    location: "",
    city: "",
    category: "",
    level: "",
    type: "",
  });

  // ✅ PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({
      title: "",
      company: "",
      location: "",
      city: "",
      category: "",
      level: "",
      type: "",
    });
  };

  // 🔹 Filtering Logic (UNCHANGED)
  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.company.toLowerCase().includes(filters.company.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.city === "" || job.city === filters.city) &&
      (filters.category === "" || job.category === filters.category) &&
      (filters.level === "" || job.level === filters.level) &&
      (filters.type === "" || job.type === filters.type)
    );
  });

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // ✅ Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div className="w-full bg-gray-100 p-4 md:p-8">

      {/* 🔎 SEARCH SECTION (UNCHANGED UI) */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col gap-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="flex items-center gap-2 border rounded-md p-2">
            <AiOutlineSearch />
            <input
              type="text"
              name="title"
              placeholder="Job Name"
              value={filters.title}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center gap-2 border rounded-md p-2">
            <BsHouseDoor />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={filters.company}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center gap-2 border rounded-md p-2">
            <CiLocationOn />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>

          <select
            name="city"
            value={filters.city}
            onChange={handleChange}
            className="border rounded-md p-2"
          >
            <option value="">All Cities</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bhubaneswar">Bhubaneswar</option>
            <option value="Chennai">Chennai</option>
          </select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <select name="category" value={filters.category} onChange={handleChange} className="border p-2 rounded-md">
            <option value="">All Categories</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Designing">Designing</option>
            <option value="Accounting">Accounting</option>
            <option value="Development">Development</option>
          </select>

          <select name="level" value={filters.level} onChange={handleChange} className="border p-2 rounded-md">
            <option value="">All Levels</option>
            <option value="Senior">Senior</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Beginner">Beginner</option>
          </select>

          <select name="type" value={filters.type} onChange={handleChange} className="border p-2 rounded-md">
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Remote">Remote</option>
            <option value="Contract">Contract</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          <button
            onClick={clearFilters}
            className="bg-red-500 text-white rounded-md p-2 hover:bg-red-600"
          >
            Clear All
          </button>

        </div>
      </div>

      {/* 🔹 JOB RESULTS */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {currentJobs.map((job) => (
          <div key={job.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">

            <div className="flex items-center gap-3 mb-3">
              <img
                src={job.logo}
                alt={job.company}
                className="w-12 h-12 object-contain rounded-md"
              />
              <div>
                <h2 className="font-bold text-lg text-blue-700">{job.title}</h2>
                <p className="text-gray-600">{job.company}</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="text-sm mt-2">{job.category} | {job.level} | {job.type}</p>

            <p className="text-sm mt-3 text-gray-600">{job.description}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              View More
            </button>

          </div>
        ))}

      </div>

      {/* ✅ PAGINATION UI */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
};

export default Search;


