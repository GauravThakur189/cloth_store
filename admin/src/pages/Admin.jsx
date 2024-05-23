import React from 'react'
import SideBar from '../components/SideBar'
import {Routes ,Route} from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'

const admin = () => {
  return (
    <div className='flex '>
      <SideBar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>} />
      </Routes>
    </div>
  )
}

export default admin