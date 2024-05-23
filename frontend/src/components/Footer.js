import React from 'react';
import footer_logo from './assets/logo_big.png';
import instagram from './assets/instagram_icon.png';
import pintester from './assets/pintester_icon.png';
import whatsapp from './assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 mt-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={footer_logo} alt="Logo" className="w-16" />
          <p className="ml-2 font-semibold">SHOPPER</p>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Offices</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex space-x-4">
          <img src={instagram} alt="Instagram" className="w-6 cursor-pointer" />
          <img src={pintester} alt="Pinterest" className="w-6 cursor-pointer" />
          <img src={whatsapp} alt="WhatsApp" className="w-6 cursor-pointer" />
        </div>
      </div>
      <hr className="mt-8 border-gray-700" />
      <p className="text-center mt-4">Copyright @ 2024 - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
