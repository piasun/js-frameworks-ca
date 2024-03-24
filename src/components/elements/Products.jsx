import { useState } from "react";
import useApi from "../../hooks/apiHook";
import ProductContainer from "../product/productPage.styles";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
    const { products, isLoading, isError } = useApi('https://api.noroff.dev/api/v1/online-shop');
    const [searchQuery, setSearchQuery] = useState("");

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error loading products.</div>;
    }

    const fetchedProducts = products.map((product) => {
       
        return {
            ...product,
            title: product.title.toLowerCase()
        };
    });

    const filteredProducts = fetchedProducts.filter(product =>
        product.title.includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ProductContainer>
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <section key={product.id}>
                        {}
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <ProductCard product={product} />
                        </Link>
                    </section>
                ))
            ) : (
                <div>No products found.</div>
            )}
            </ProductContainer>
        </>
    );
}

export default Products;
