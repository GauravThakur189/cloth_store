import React from 'react'
import exclusive_image  from './assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='w-[65%] h-[60vh] flex m-auto px-0 py-36 mb-36 bg-gradient-to-b from-pink-100 via-green-100 to-transparent mt-10'>
        <div className='flex-1  flex flex-col justify-center' >
            <h1 className='text-black text-7xl font-semibold '>Exclusive</h1>
            <h1 className='text-black text-7xl font-semibold '>Offers for you</h1>
            <p className='text-black text-xl font-semibold'>ONLY ON BEST SELLAR PRODUCTS</p>
            <button className='w-[288px] h-[70px] rounded-3xl bg-red-600 text-white text-xl font-medium mt-7 cursor-pointer'>Check now</button>
        </div>
        <div className='flex-1 flex align-middle justify-center '>
        <img className='h-[50vh] w-auto' src={exclusive_image} alt='exclusive-image' />
        </div>
    </div>
  )
}

export default Offers