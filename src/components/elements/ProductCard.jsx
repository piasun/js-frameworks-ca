import ViewProductButton from '../button/Button';
import Card from '../styles/card.styles';
import PriceCalculation from './PriceCalculation';
import { Link } from 'react-router-dom';

const ProductCard = ( {product}) => {
    const {title, imageUrl, id, description, price, discountedPrice} = product;

    return (
        <Card key={id}>
        <img className="product-image" src={imageUrl} alt={title} />
        <p className="product-title">{title}</p>
        <div>
        <p className="product-description">{description}</p>
        <div className="product-price">
        <PriceCalculation price={price} discount={discountedPrice}/>  
        </div>
        </div>
        <div className="link-container">
        <Link to={`/product/${product.id}`}>
            <ViewProductButton  />
        </Link>
        </div>
        </Card>
    )
}

export default ProductCard;