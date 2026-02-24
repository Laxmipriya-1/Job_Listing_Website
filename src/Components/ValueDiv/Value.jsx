// import React from 'react'
// import  simplicity from '../../assets/simplicity.jpg'
// import shield from '../../assets/shield.png'
// import valentine from '../../assets/valentine.png'

// const Value = () => {
//   return (
//     <div className="mb-[4rem] mt-[6rem]">
//        <h1 className="text-black text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block
//        " >The value that holds us true and to account</h1>

//        <div className="grid gap-[10rem] grid-cols-3 items-center ">

//           <div className="SingleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
//             <div className='flex items-center gap-3'>
//               <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8]
//                h-[40px] w-[40px] flex items-center justify-center">
//                <img src={simplicity} alt="Photo" className="w-[80%]"/>
//               </div>
//               <span className="font-semibold text-black text-[18px]">
//                 Simplicity
//               </span>
//             </div>
//             <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
//               Things beinf made beautiful simple are at the heart of everything we do.
//             </p>

//           </div>

//           <div className="SingleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
//             <div className='flex items-center gap-3'>
//               <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8]
//                h-[40px] w-[40px] flex items-center justify-center">
//                <img src={valentine} alt="Photo" className="w-[80%]"/>
//               </div>
//               <span className="font-semibold text-black text-[18px]">
//                 Simplicity
//               </span>
//             </div>
//             <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
//               We believe in making things better for everyone, even if just by a little bit!
//             </p>

//           </div>

//           <div className="SingleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
//             <div className='flex items-center gap-3'>
//               <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8]
//                h-[40px] w-[40px] flex items-center justify-center">
//                <img src={shield} alt="Photo" className="w-[80%]"/>
//               </div>
//               <span className="font-semibold text-black text-[18px]">
//                 Simplicity
//               </span>
//             </div>
//             <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
//               We work on the basis of creating trust which can be nutured through
//               authenticity and transparency.
//             </p>

//           </div>

//        </div>

//        <div className="card mt-[2rem] flex justify-between bg-gray-200 p-[5rem]
//        rounded-[10px]">
//          <div>
//           <h1 className='text-blue-500 font-bold text-[30px]'>
//             Ready to switch a career
//           </h1>
//           <h2 className='text-black text-[25px] font-bold'>Let's get started!</h2>
//           <button className='border-[2px] rounded-[10px] py-[4px] px-[50px]
//            text-[18px] font-semibold text-blue-400 hover:bg-white border-blue-500'>
//             Get Started
//           </button>
//          </div>

//        </div>

//     </div>
//   )
// }

// export default Value

import React from 'react'
import simplicity from '../../assets/simplicity.jpg'
import shield from '../../assets/shield.png'
import valentine from '../../assets/valentine.png'

const Value = () => {
  return (
    <div className="mb-16 mt-20 px-6 md:px-12 lg:px-20">

      {/* Heading */}
      <h1 className="text-black text-2xl md:text-3xl font-bold pb-10 max-w-lg">
        The value that holds us true and to account
      </h1>

      {/* Value Grid */}
      <div className="grid gap-10 md:gap-16 lg:gap-24 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      items-center">

        {/* Card 1 */}
        <div className="rounded-xl hover:bg-[#eeedf7] p-6 transition duration-300">
          <div className='flex items-center gap-3'>
            <div className="p-2 rounded-lg bg-[#dedef8]
                            h-10 w-10 flex items-center justify-center">
              <img src={simplicity} alt="Simplicity" className="w-[80%]" />
            </div>
            <span className="font-semibold text-black text-lg">
              Simplicity
            </span>
          </div>
          <p className="text-sm text-black opacity-70 py-4 font-medium">
            Things being made beautifully simple are at the heart of everything we do.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl hover:bg-[#eeedf7] p-6 transition duration-300">
          <div className='flex items-center gap-3'>
            <div className="p-2 rounded-lg bg-[#dedef8]
                            h-10 w-10 flex items-center justify-center">
              <img src={valentine} alt="Improvement" className="w-[80%]" />
            </div>
            <span className="font-semibold text-black text-lg">
              Improvement
            </span>
          </div>
          <p className="text-sm text-black opacity-70 py-4 font-medium">
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl hover:bg-[#eeedf7] p-6 transition duration-300">
          <div className='flex items-center gap-3'>
            <div className="p-2 rounded-lg bg-[#dedef8]
                            h-10 w-10 flex items-center justify-center">
              <img src={shield} alt="Trust" className="w-[80%]" />
            </div>
            <span className="font-semibold text-black text-lg">
              Trust
            </span>
          </div>
          <p className="text-sm text-black opacity-70 py-4 font-medium">
            We work on the basis of creating trust nurtured through
            authenticity and transparency.
          </p>
        </div>

      </div>

      {/* Bottom CTA Card */}
      <div className="mt-12 flex flex-col md:flex-row 
                      items-center justify-between 
                      bg-gray-200 p-8 md:p-12 lg:p-16 
                      rounded-xl gap-6">

        <div className="text-center md:text-left">
          <h1 className='text-blue-500 font-bold text-2xl md:text-3xl'>
            Ready to switch a career?
          </h1>
          <h2 className='text-black text-xl md:text-2xl font-bold mt-2'>
            Let's get started!
          </h2>
        </div>

        <button className='border-2 rounded-xl py-2 px-10
                           text-lg font-semibold 
                           text-blue-500 hover:bg-white 
                           border-blue-500 transition duration-300'>
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Value