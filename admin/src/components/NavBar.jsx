import React from 'react'
import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'

const NavBar = () => {
  return (
    <div className=' flex items-center justify-between py-4 px-16 shadow-lg mb-[1px]'>
    <img src={navlogo} alt="Logo" className=' w-[200px]'/>
    <img src={navProfile} alt='profile' className=' w-[75px]'/>
    </div>
  )
}

export default NavBar