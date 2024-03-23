import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #375287;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 5px; 

  &:hover {
    background-color: white;
    color: #375287;
    border: 1px solid #375287;
  }

  &:active {
    background-color: #00408b;
  }
`;

export default StyledButton;