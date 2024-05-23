

import React from 'react';
import hand_icon from '../assets/hand_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className=" py-10 px-4 lg:px-20 bg-gradient-to-b from-pink-200 to-green-200 bg-opacity-60 flex">
      <div className="flex flex-col justify-center gap-[20px] pl-[180px] leading-[1.1]">
        <h2 className="text-2xl font-bold text-[#090909] text-[26px]">NEW ARRIVALS ONLY</h2>
        
        <div className="flex items-center">
      <div className="flex items-center mr-4">
        <p className="text-5xl font-semibold mr-2">New</p>
        <img src={hand_icon} alt="hand_icon" className="w-10 h-10" />
      </div>
      <div className="md:block">
        <p className="text-5xl font-semibold">Collection</p>
        <p className="text-5xl">for everyone</p>
      </div>
    </div>
 
        <div className="flex items-center bg-red-600 rounded-l-full rounded-r-full w-56">
          <div className="text-lg font-semibold m-2 pl-6">Latest Collection</div>
          <img src={arrow_icon} alt="arrow_icon" className="w-6 h-6" />
        </div>
      </div>

      <div className="mt-8 lg:flex lg:justify-between gap-20">
        <div className="lg:w-1/2 lg:mr-4 gap-20">
          <img src={hero_image} alt="hero_image" className="w-full" />
        </div>
        {/* Add any other content here */}
      </div>
    </div>
  );
};

export default Hero;
