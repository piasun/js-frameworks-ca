import ViewProductButton from '../button/Button';
import Card from '../styles/card.styles';
import { Link } from 'react-router-dom';

const ProductCard = ( {product}) => {
    const {title, imageUrl, id, description, price} = product;

    return (
        <Card key={id}>
        <img className="product-image" src={imageUrl} alt={title} />
        <p className="product-title">{title}</p>
        <div>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        </div>
        <Link to={`/product/${product.id}`}>
            <ViewProductButton  />
        </Link>
        </Card>
    )
}

export default ProductCard;