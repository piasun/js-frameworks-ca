import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {productId}</p>
      {/* product details*/}
    </div>
  );
}

export default ProductPage;
