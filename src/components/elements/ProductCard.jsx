import AddToCartButton from '../button/Button';
import Card from '../styles/card.styles';
import PriceCalculation from './PriceCalculation';
import { Link } from 'react-router-dom';

const ProductCard = ( {product}) => {
    const {title, imageUrl, id, description, price, discountedPrice} = product;

    return (
        <Card key={id}>
        <div>    
        <Link to={`/product/${product.id}`}>    
        <img className="product-image" src={imageUrl} alt={title} />
        <p className="product-title">{title}</p>
        <h3>View Product</h3>
        </Link>
        </div>
        <div className="product-price">
            <PriceCalculation price={price} discount={discountedPrice}/>  
        </div>
        <div>
            <AddToCartButton  />
        </div>
        </Card>
    )
}

export default ProductCard;