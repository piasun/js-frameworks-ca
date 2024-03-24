import useCartStore from '../../hooks/cartStoreHook';
import { shallow } from 'zustand/shallow';
import PriceCalculation from './PriceCalculation';
import AddToCartButton from '../button/Button';
import Reviews from './Reviews'; 

const SingleProduct = ({ product }) => {
    const { title, imageUrl, price, discountedPrice, description, tags = [], reviews = [] } = product;
    const { addProduct } = useCartStore(
        state => ({ addProduct: state.addProduct }),
        shallow
    );

    const addToCart = () => {
        addProduct(product);
    };

    return (
        <>
            <section>
                <div>
                    <img src={imageUrl} alt={title} />
                </div>
                <h1>{title}</h1>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <PriceCalculation price={price} discount={discountedPrice}/>  
                </div>
                <div>
                    {tags.map(tag => (
                        <p key={tag}>#{tag}</p>
                    ))}
                </div>
                <div>
                    <AddToCartButton/>
                </div>
            </section>
            <section>
                <Reviews reviews={reviews}/>
            </section>
        </>
    );
};

export default SingleProduct;