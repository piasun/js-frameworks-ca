import useApi from '../../hooks/apiHook';
import { useParams } from 'react-router-dom';
import SingleProduct from '../elements/SingleProduct';

const ProductPage = () => {
  let {id} = useParams();
  const productUrl = `https://api.noroff.dev/api/v1/online-shop/${id}`
  const { products, isLoading, isError } = useApi(productUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
      return <div>Error loading products.</div>;
  }
  return (
    <>
     <SingleProduct product={products} />

    </>
  )

}

export default ProductPage;
