import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import ProductList from '../../components/ProductList/ProductList';
import classes from './HomePage.module.scss';

export default function HomePage() {
  const { productData, isLoading } = useContext(ProductsContext);
  const safeProductData = Array.isArray(productData) ? productData : [];

  return (
    <main className={classes.container}>
      <h1>Maps E-Shop</h1>
      <h2>Mapping Moments: Your Story, Beautifully Illustrated</h2>
      {isLoading ? <p>Loading...</p> : <ProductList productData={safeProductData} />}
    </main>
  );
}