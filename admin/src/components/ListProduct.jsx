import React, { useEffect, useState } from 'react';
import cross_icon from '../assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchData = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
      
  };

  const removeProduct  = async(id)=>{
   
    // await fetch(`http://localhost:4000/removeproduct',{
    //   method:'POST',
    //   headers:{
    //     Accept:'application/json',
    //     'Content-Type':'Application/json',
    //   },
    //   body:JSON.stringify({id})
    // }
     await fetch('http://localhost:4000/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        "Content-type":"application/json",
      },
      body:JSON.stringify({id:id})
     })
    await fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Product List</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="font-bold">Products</th>
            <th className="font-bold">Title</th>
            <th className="font-bold">Old Price</th>
            <th className="font-bold">New Price</th>
            <th className="font-bold">Category</th>
            <th className="font-bold">Remove</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product, index) => (
            <tr key={index} className="border-b text-center">
              <td className="flex items-center justify-center"><img src={product.image} alt="product" className="w-16 h-16" /></td>
              <td className="text-lg">{product.name}</td>
              <td>${product.old_price}</td>
              <td>${product.new_price}</td>
              <td>{product.category}</td>
              <td className="flex items-center justify-center"><img  onClick={()=>removeProduct(product.id)} src={cross_icon} alt="cross_icon" className="w-6 h-6 cursor-pointer" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
