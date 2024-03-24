import React from 'react';
import Products from './elements/Products';


const HomePage = () => {
  return (
    <main>
      <h1>Welcome to Your Market Space</h1>
      <h3>Find your favourite product</h3>
      <div>
        <Products />
      </div>
    </main>
  );
};

export default HomePage;
