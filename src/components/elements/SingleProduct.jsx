import useCartStore from '../../hooks/cartStoreHook';
import { shallow } from 'zustand/shallow';
import PriceCalculation from './PriceCalculation';
import AddToCartButton from '../button/Button';
import Reviews from './Reviews'; 
import { SingleProductContainer } from '../product/productPage.styles';

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
        <SingleProductContainer>
            <section>
                <div>
                    <img src={imageUrl} alt={title} />
                </div>
            </section>
            <section className="detail-container">    
                <h1>{title}</h1>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <PriceCalculation price={price} discount={discountedPrice}/>  
                </div>
                <div className="tags-container">
                    {tags.map(tag => (
                        <p key={tag}>#{tag}</p>
                    ))}
                </div>
                <div>
                    <AddToCartButton onClick={addToCart}/>
                </div>
                <div>
                <Reviews reviews={reviews}/>
                </div>
            </section>
        </SingleProductContainer>
    );
};

export default SingleProduct;