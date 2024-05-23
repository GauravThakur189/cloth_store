
import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item";

const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className="container mx-auto">
      <img
        src={props.banner}
        alt="catagory banner"
        className="block  mx-auto my-8 w-[82%]"
      />
      <div className="flex justify-between items-center my-0 mx-40">
        <p>
          <span className="font-bold ">Showing 1-12</span> out of 36 products
        </p>
        <div className=" py-2 px-5 rounded-2xl">
          Sort by
          <img src={dropdown_icon} alt="dropdown" className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            
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
          } else {
            return null;
          }
        })}
      </div>
      <div className=" flex justify-center items-center my-36 mx-auto w-[233px] h-[69px] rounded-[75px] bg-slate-200 text-gray-500 font-bold">
        Explore More
        
      </div>
    </div>
  );
};

export default ShopCatagory;
