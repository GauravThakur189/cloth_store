// import React from "react";
// import logo from "../assets/logo.png";
// import cart_icon from "../assets/cart_icon.png";

// const Navbar = () => {
//   return (
//     <div className="p-16 flex justify-around shadow-lg shadow-black">
//       <div>
//         <img src={logo} alt="logo" />
//         <p>SHO00PPER</p>
//       </div>
//       <div>
//         <ul>
//           <li>Shop</li>
//           <li>Men</li>
//           <li>Women</li>
//           <li>Kids</li>
//         </ul>
//       </div>
//       <div>
//         <button>Login</button>
//         <img src={cart_icon} alt="cart_icon" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const[menu, setMenu] = useState("shop")
    const { getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="p-8 flex justify-around shadow-sm shadow-black">
      <div>
        <img src={logo} alt="logo" />
        <p className="text-xl font-bold">SHOPPER</p>
      </div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-4">
          <li onClick={()=>setMenu("shop")} className="text-gray-700 hover:text-gray-900"><Link to="/">Shop</Link> {menu==="shop" ? <hr/>: <></>}</li>
          <li onClick={()=> setMenu("mens")} className="text-gray-700 hover:text-gray-900"><Link to='/mens'>Men</Link> {menu ==="mens" ? <hr/>:<></>}</li>
          <li onClick={()=> setMenu("womens")} className="text-gray-700 hover:text-gray-900"><Link to='/womens'>Women</Link>{menu==="womens" ? <hr/> : <></>}</li>
          <li onClick={()=> setMenu("kids")} className="text-gray-700 hover:text-gray-900"><Link to='kids'>Kids</Link>{menu==="kids" ? <hr/> : <></>}</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
      {localStorage.getItem('auth-token') ?<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>: <Link to='/login'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button> </Link> }
      
       <Link to='/cart'> <img src={cart_icon} alt="cart_icon" className="w-8 h-8" /> </Link>
       <div>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

