const PriceCalculation = (props) => {
    const { price, discount } = props;

    if (discount < price) {
        const pricePresentage = (((price - discount) / price)*100).toFixed(0);
        return (
            <>
            <div>
                <p>{pricePresentage}% off</p>
            </div>
            <div>
                <p>{price}</p>
                <p>{discount}</p>
            </div>
            </>
        );
    }
    else {
            return(
                <div>
                    <p>{price}</p>
                </div>
            )
        }
    
}

export default PriceCalculation;