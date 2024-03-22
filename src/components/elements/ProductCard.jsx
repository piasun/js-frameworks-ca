import Card from '../styles/card.styles'

const ProductCard = ( {product}) => {
    const {title, imageUrl, id, description, price} = product;

    return (
        <Card key={product.id}>
        <img className="product-image" src={imageUrl} alt={title} />
        <p className="product-title">{title}</p>
        <div>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        </div>
        </Card>
    )
}

export default ProductCard;