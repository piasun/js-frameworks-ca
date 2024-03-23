import styled from "styled-components";

const ProductContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;

        @media (max-width: 600px) {
        grid-template-columns: 1fr; // Stack the cards on smaller screens
        }
`;

export default ProductContainer;