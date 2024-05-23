import React from 'react'
import {Link} from 'react-router-dom'
import add_product_icon from '../assets/Product_Cart.svg'
import list_product_icon from '../assets/Product_list_icon.svg'

const SideBar = () => {
  return (
    <div className=' flex flex-col pt-[30px] gap-5 max-w-[250px] h-[100vh] bg-white  '>
      <Link to={'/addproduct'}>
      <div className=' flex items-center justify-center my-0 mx-5 py-1 px-2 rounded-md bg-gray-200 gap-5 cursor-pointer'>
        <img src={add_product_icon} alt='Add Product Icon' />
        <p>Add Product</p>
      </div>
       </Link>
       <Link to={'/listproduct'}> 
       <div  className=' flex items-center justify-center my-0 mx-5 py-1 px-2 rounded-md bg-gray-200 gap-5 cursor-pointer'>
        <img src={list_product_icon} alt='List Product Icon'/>
        <p> Products List</p>
       </div>
        </Link>
    </div>
  )
}

export default SideBar