
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum';
import ProductDisplay from '../components/ProductDisplay';
import RekatedProducts from '../components/RekatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); 
  console.log(productId); 
  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay  product={product}/>
      {/* Render product details */}
      <RekatedProducts/>
    </div>
  );
};

export default Product;
