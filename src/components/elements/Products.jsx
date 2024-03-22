import ProductCard from "./ProductCard";
import useApi from "../../hooks/apiHook";

const Products = () => {
    const { products, loading, error } = useApi('https://api.noroff.dev/api/v1/online-shop');

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error loading products.</div>;
    }

    const processedProducts = products.map((product) => {
       
        return {
            ...product,
            title: product.title.toLowerCase()
        };
    });

    return (
        <>
            {processedProducts.map((product) => (
                <section key={product.id}>
                    <ProductCard product={product} />
                </section>
            ))}
        </>
    );
}

export default Products;
