import React from "react";
import Item from "./Item";
import data_product from "./assets/data";


const Popular = () => {
  console.log("popular" + data_product);
  return (
    <div className='flex flex-col align-middle gap-3 h-[90vh] '>
      <h1 className="text-black text-5xl font-semibold ">POPULAR IN WOMEN</h1>
      <hr />
      <div className='mt-12 flex gap-7' >
        {data_product.map((item, i) => {
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
  );
};

export default Popular;
