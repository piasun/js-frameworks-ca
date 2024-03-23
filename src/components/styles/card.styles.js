import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 5px; 
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .product-title {
    margin: 10px;
    color: #375287;
    font-size: 20px;
    font-weight: bold;
  }

  .product-description {
    padding: 10px;
    color: #19263f;
  }

  .product-price {
    position: relative;
    float:right;
    margin-right: 10px;
    font-size: 16px;
    color: #19263f;
  }

  .link-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top:10px;
  }
`;

export default Card;
