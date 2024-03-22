import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .product-description {
    padding: 16px;

    .product-title {
      margin: 0;
      margin-bottom: 8px;
      font-size: 20px;
      font-weight: bold;
    }

    .product-price {
      margin: 0;
      font-size: 16px;
      color: #666;
    }
  }
`;

export default Card;
