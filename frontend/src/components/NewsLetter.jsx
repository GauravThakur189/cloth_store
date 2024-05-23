// import React from 'react'

// const NewsLetter = () => {
//   return (
//     <div className=' w-[65%] h-[40vh] flex flex-col   m-auto px-0 py-[140px] mb-36 bg-gradient-to-b from-pink-100 via-green-100 to-transparent '>
//     <h2 className=' text-gray-700 text-5xl font-semibold'>Get Exclusive offers on your email</h2>
//     <p className=' text-gray-700 text-2xl'>Subscribe to our news channel to get updated</p>
//     <div className='flex align-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] '>
//         <input className=' w-[500px] ml-7 outline-none text-gray-500 text-xl ' type='email' placeholder='Your Email Address' />
//         <button className=' w-[210px] h-[70px] rounded-[80px] bg-black text-white text-xl cursor-pointer '>subcribe</button>
//     </div>
//     </div>
//   )
// }

// export default NewsLetter

import React from 'react';

const NewsLetter = () => {
  return (
    <div className='w-[65%]  flex flex-col m-auto px-0 py-[140px] mb-36 bg-gradient-to-b from-pink-100 via-green-100 to-transparent'>
      <h2 className='text-gray-700 text-5xl font-semibold'>Get Exclusive offers on your email</h2>
      <p className='text-gray-700 text-2xl'>Subscribe to our news channel to get updated</p>
      <div className='flex align-center justify-between bg-white w-[730px] h-[70px] rounded-[80px]'>
        <input className='w-[500px] ml-7 outline-none text-gray-500 text-xl' type='email' placeholder='Your Email Address' />
        <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-xl cursor-pointer'>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
