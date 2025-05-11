import { useEffect } from 'react';
import { getAllProducts } from '../../services/product-services';
import classes from './HomePage.module.scss';

export default function HomePage() {
  useEffect(() => {
    getAllProducts().then(products => {
      console.log("Products from firestore:", products);
    }).catch(error => {
      console.error("Error fetching products:", error);
    });
  }, []);

  return (
    <main className={classes.container}>
      <h1>Maps E-Shop</h1>
      <h2>Mapping Moments: Your Story, Beautifully Illustrated</h2>
    </main>
  );
}