import React from 'react';
import Products from './elements/Products';


const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Market Space</h1>
      <h3>Find your favourite product</h3>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
