import styled from "styled-components";

export const ProductContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;

        @media (max-width: 600px) {
        grid-template-columns: 1fr;
        }
`;

export const SingleProductContainer = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #f9f9f9;
        padding: 20px;

        @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        flex-wrap: wrap;

        & > div {
        margin-bottom: 15px;
        }

        img {
        max-width: 100%;
        height: auto;
        }

        h1 {
        color: #19263f;
        }

        h2 {
        font-size: 20px;
        }

        h3 {
          font-size: 16px;      
        }

        p {
        color: #19263f;
        }

        .detail-container {
          margin: 20px;      
        }

        .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        p {
        background: #4568ac;
        color: white;
        padding: 5px;
        border-radius: 5px;
        }
        }
`;
