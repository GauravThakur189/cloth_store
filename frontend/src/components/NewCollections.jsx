import React from 'react'
import new_collections from './assets/new_collections'
import Item from './Item'


const NewCollections = () => {
  return (
    <div className='flex flex-col align-middle gap-3 mb-[100px]'>
    <h1 className="text-black text-5xl font-semibold ">NEW COLLECTION</h1>
    <hr />
    <div className=' grid grid-cols-4 mt-12 gap-7'>
        {new_collections.map((item,i)=>{
            return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_prices={item.new_price}
              old_prices={item.old_price}
            />
          );
        })}
    </div>
    </div>
  )
}

export default NewCollections