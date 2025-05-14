import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsProvider';
import ProductList from '../../components/ProductList/ProductList';
import Carousel from '../../components/Carousel/Carousel';
import classes from './HomePage.module.scss';

export default function HomePage() {
  const { productData, isLoading } = useContext(ProductsContext);
  const safeProductData = Array.isArray(productData) ? productData : [];

  const featuredProducts = safeProductData.filter(p => p.featured);

  return (
    <main className={classes.container}>
      <h2 className={classes.slogan}>Mapping Moments: Your Story, Beautifully Illustrated</h2>
      {featuredProducts.length > 0 && <Carousel products={featuredProducts} />}
      {isLoading ? <p>Loading...</p> : <ProductList productData={safeProductData} />}
    </main>
  );
}