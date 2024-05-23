// import React, { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import remove_icon from "./assets/cart_cross_icon.png";
// import Cart from "../pages/Cart";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// const CartItems = () => {
//   const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
//   return (
//     <div className=" m-[100px] mx-[170px]">
//       <div className=" grid">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />

//       {all_product.map((e, i) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div>
//               <div>
//                 <img src={e.image} alt="" />
//                 <p>{e.name}</p>
//                 <p>${e.new_price}</p>
//                 <button>{cartItems[e.id]}</button>
//                 <p>{e.new_price * cartItems[e.id]}</p>
//                 <img
//                   src={remove_icon}
//                   alt=""
//                   onClick={() => {
//                     removeFromCart(e.id);
//                   }}
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//       })}
//     </div>
//   );
// };

// export default CartItems;













// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext';
// import remove_icon from './assets/cart_cross_icon.png';

// const CartItems = () => {
//     const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

//     return (
//         <div className="m-10 mx-20">
//             <div className="grid grid-cols-6 gap-4 font-semibold">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>
//             <hr className="my-2" />

//             {all_product.map((product) => {
//                 if (cartItems[product.id] > 0) {
//                     return (
//                         <div key={product.id} className="flex items-center justify-between border-b border-gray-300 py-4">
//                             <div className="flex items-start space-y-2">
//                                 <img src={product.image} alt={product.name} className="w-16 h-16" />
//                                 <div>
//                                     <p className="text-base w-[150px]">{product.name}</p>
//                                     <p className="text-xs text-gray-500">{product.description}</p>
//                                 </div>
//                             </div>
//                             <p>${product.new_price}</p>
//                             <div className="flex items-center">
//                                 <button className="border border-gray-300 rounded px-2" disabled>{cartItems[product.id]}</button>
//                             </div>
//                             <p>${product.new_price * cartItems[product.id]}</p>
//                             <button className="focus:outline-none" onClick={() => removeFromCart(product.id)}>
//                                 <img src={remove_icon} alt="Remove" className="w-5 h-5" />
//                             </button>
//                         </div>
//                     );
//                 }
//                 return null;
//             })}
//             <div>
//                 <div>
//                     <h1>Cart Totals</h1>
//                 </div>
//                 <div>
//                    <div>
//                     <p>Subtotals</p>
//                     <p>${0}</p>
//                    </div> 
//                    <hr />
//                    <div>
//                     <p>Shiping Fee</p>
//                     <p>Free</p>
//                    </div>
//                    <hr />
//                    <div>
//                     <h3>Total</h3>
//                     <h3>${0}</h3>
//                    </div>
//                 </div>
//                 <button>PROCEED TO CHECKOUT</button>
//             </div>
//             <div>
//                 <p>If you have a promo code ,Enter it here</p>
//                 <div>
//                     <input type='text' placeholder='promo code' />
//                     <button>Submit</button>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default CartItems;










import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from './assets/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="m-10 mx-20">
            <div className="grid grid-cols-6 gap-4 font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="my-2" />

            {all_product.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id} className="flex items-center justify-between border-b border-gray-300 py-4">
                            <div className="flex items-start space-y-2">
                                <img src={product.image} alt={product.name} className="w-16 h-16" />
                                <div>
                                    <p className="text-base w-[150px]">{product.name}</p>
                                    <p className="text-xs text-gray-500">{product.description}</p>
                                </div>
                            </div>
                            <p>${product.new_price}</p>
                            <div className="flex items-center">
                                <button className="border border-gray-300 rounded px-2" disabled>{cartItems[product.id]}</button>
                            </div>
                            <p>${product.new_price * cartItems[product.id]}</p>
                            <button className="focus:outline-none" onClick={() => removeFromCart(product.id)}>
                                <img src={remove_icon} alt="Remove" className="w-5 h-5" />
                            </button>
                        </div>
                    );
                }
                return null;
            })}

            {/* Payment Section */}
            <div className="mt-8 border-t border-gray-300 pt-4">
                <h1 className="text-xl font-semibold mb-4">Cart Totals</h1>
                <div className="flex justify-between">
                    <div>
                        <p>Subtotals</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr className="w-px h-full bg-gray-300 mx-4" />
                    <div>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">PROCEED TO CHECKOUT</button>
            </div>

            <div className="mt-8">
                <p className="mb-2">If you have a promo code, enter it here</p>
                <div className="flex items-center">
                    <input type='text' placeholder='Promo code' className="border border-gray-300 rounded py-1 px-3 mr-2" />
                    <button className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-900 focus:outline-none">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
