import styled from 'styled-components';

const StyledCart = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: #333;
  }

  section {
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    margin-bottom: 20px; 

    &:last-child {
      border: none;
    }
  }

  button {
    background-color: #0077cc;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #005fa3;
    }

    &:focus, &:active {
      background-color: #003d73;
    }
  }
`;

export default StyledCart;