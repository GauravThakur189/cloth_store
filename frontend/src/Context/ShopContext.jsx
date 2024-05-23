import React, { createContext, useEffect, useState } from "react";
// import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product,setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const data = await fetch('http://localhost:4000/allproducts');
        const json = await data.json();
        setAll_product(json);
      } catch (error) {
        console.log("error in fetching",error);
      }
    }

    fetchData();
  },[])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = ()=>{
     let totalAmount = 0;
     for(const item in cartItems){
       if(cartItems[item]>0){
        const  productItem = all_product.find((product)=> product.id == Number(item))
        totalAmount += productItem.new_price *  cartItems[item];
       }
     }
     return totalAmount;
  }

  const getTotalCartItems = ()=>{
    let totalItems = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = { getTotalCartItems, all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
// State for our global state of the
