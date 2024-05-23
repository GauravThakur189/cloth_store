import React from 'react'
import data_product from './assets/data';
import Item from './Item';

const RekatedProducts = () => {
  return (
    <div className=' flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className=' text-gray-950 text-5xl mt-20 font-semibold '>Related Tag</h1>
        <hr className=' w-[200px] h-2 rounded-lg bg-gray-900 ' />
        <div className=' my-12 flex gap-7'>
         {data_product.map((item,i)=>{
          return <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_prices={item.new_price}
                old_prices={item.old_price}
              />
         })}
        </div>
    </div>
  )
}

export default RekatedProducts