import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledButton from './button.styles';

const ViewProductButton = () => {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/productPage');
    }

    return <StyledButton onClick={handleClick}>View Product</StyledButton>;
}

export default ViewProductButton;
