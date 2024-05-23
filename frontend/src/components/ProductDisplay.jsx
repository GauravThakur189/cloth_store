// import React from "react";
// import star_icon from "./assets/star_icon.png";
// import star_dull_icon from "./assets/star_dull_icon.png";

// const ProductDisplay = (props) => {
//   const { product } = props;
//   return (
//     <div>
//       <div>
//         <div>
//           <img src={product.image} alt="product" />
//           <img src={product.image} alt="product" />
//           <img src={product.image} alt="product" />
//           <img src={product.image} alt="product" />
//         </div>
//         <div>
//           <img src={product.image} alt="product" />
//         </div>
//       </div>
//       <div>
//         <h1>{product.name}</h1>
//         <div>
//           <img src={star_icon} alt="Star" />
//           <img src={star_icon} alt="Star" />
//           <img src={star_icon} alt="Star" />
//           <img src={star_icon} alt="Star" />
//           <img src={star_dull_icon} alt="Star_dull" />
//           <p>(122)</p>
//         </div>
//         <div>
//           <div>{product.new_prices}</div>
//           <div>{product.old_price}</div>
//         </div>
//         <div>
//           A product description is a piece of writing that explains a product's
//           features, benefits, and use, and encourages consumers to buy it. It
//           can be one sentence, a short paragraph, or bullete
//         </div>
//         <div>
//           <h1>Select Size</h1>
//           <div>S</div>
//           <div>M</div>
//           <div>L</div>
//           <div>XL</div>
//           <div>XXL</div>
//         </div>
//       </div>
//       <button>Add to Cart</button>
//       <p>
//         <span>category: </span>Women , T-shirt , Crop Top
//       </p>
//       <p>
//         <span>Tags: </span>Modern , latest
//       </p>
//     </div>
//   );
// };

// export default ProductDisplay;


import React, { useContext } from "react";
import star_icon from "./assets/star_icon.png";
import star_dull_icon from "./assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <img src={product.image} alt="product" className=' h-20 w-16' />
          <img className=' h-20 w-16 col-span-1' src={product.image} alt="product" />
          <img className=' h-20 w-16' src={product.image} alt="product" />
          <img className=' h-20 w-16' src={product.image} alt="product" />
          <img className=' h-20 w-16' src={product.image} alt="product"  />
          </div>
          <div>
          <img src={product.image} alt="product" className="col-span-1" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <div className="flex items-center mb-4">
          <img src={star_icon} alt="Star" className="w-6 h-6" />
          <img src={star_icon} alt="Star" className="w-6 h-6" />
          <img src={star_icon} alt="Star" className="w-6 h-6" />
          <img src={star_icon} alt="Star" className="w-6 h-6" />
          <img src={star_dull_icon} alt="Star_dull" className="w-6 h-6" />
          <p className="ml-2 text-gray-500">(122)</p>
        </div>
        <div className="text-xl font-semibold mb-4">
          <div>{product.new_prices}</div>
          <div>${product.old_price}</div>
        </div>
        <div className="text-base mb-4">
          A product description is a piece of writing that explains a product's
          features, benefits, and use, and encourages consumers to buy it. It
          can be one sentence, a short paragraph, or bullet.
        </div>
        <div>
          <h1 className="text-xl font-bold mb-2">Select Size</h1>
          <div className="flex">
            <div className="bg-gray-200 rounded-full py-2 px-4 mr-2">S</div>
            <div className="bg-gray-200 rounded-full py-2 px-4 mr-2">M</div>
            <div className="bg-gray-200 rounded-full py-2 px-4 mr-2">L</div>
            <div className="bg-gray-200 rounded-full py-2 px-4 mr-2">XL</div>
            <div className="bg-gray-200 rounded-full py-2 px-4 mr-2">XXL</div>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600" 
         onClick={()=>addToCart(product.id)}
        >
          Add to Cart
        </button>
        <div className="mt-4">
          <p className="text-sm"><span className="font-bold">Category:</span> Women, T-shirt, Crop Top</p>
          <p className="text-sm"><span className="font-bold">Tags:</span> Modern, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
