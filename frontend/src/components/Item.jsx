import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='w-[350px]'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='items'/></Link>
        <p  className='mx-[6px] my-0'>{props.name}</p>
        <div className='flex gap-[20px]'>
            <div className='text-xl
            font-semibold text-gray-700 '>
               $ {props.new_prices}
            </div>
            <div className='text-xl text-gray-600 font-normal line-through'>
               $ {props.old_prices}
            </div>
        </div>
    </div>
  )
}

export default Item