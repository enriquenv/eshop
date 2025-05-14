import { useContext } from 'react';
import { useParams } from 'react-router';
import { ProductsContext } from '../../context/ProductsProvider';
import useQuery from '../../hooks/useQuery';
import { getProductById } from '../../services/product-services';
import ProductDetails from './ProductDetails';
import classes from './ProductPage.module.scss';

export default function ProductPage() {
  const { id } = useParams();
  const {
    data: product,
    isFail,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useQuery({ fetchFn: getProductById, dependencies: [id], args: [id] });

  return (
    <main>
      {isLoading && <p className={classes.centered}>Loading...</p>}
      {isFail && <p className={classes.centered}>{error.message}</p>}
      {isSuccess && <ProductDetails productData={product} resetFetch={reset} />}
    </main>
  );
}