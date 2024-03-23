import useCartStore from "../../hooks/cartStoreHook";
import { shallow } from "zustand/shallow";

const SingleProduct = ({ product }) => {
    const { title, imageUrl, price, discountedPrice, description, tags = [], reviews = [] } = product;

    const { addProduct } = useCartStore (
        (state) => ({
            addProduct: state.addProduct
        }),
        shallow,
    );

    const addToCart = () => {
        addProduct(product);
    }
    return (
    <>
        <section>
            <div>
            <img src={imageUrl} alt={title}/>
            </div>
            <h1>{title}</h1>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <p>{price}{discountedPrice}</p>
            </div>
            <div>
            {tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))}
            </div>
            <div>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </section>
        <section>
            <p>{reviews}</p>
        </section>
    </>
    )
}
export default SingleProduct;