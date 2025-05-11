import { useEffect } from 'react';
import useQuery from '../../hooks/useQuery';
import { getAllProducts, getProductById, updateProductById, subscribeToProducts } from '../../services/product-services';
import classes from './HomePage.module.scss';

export default function HomePage() {
/*   useEffect(() => {
    getAllProducts().then(products => {
      console.log("Products from firestore:", products);
    }).catch(error => {
      console.error("Error fetching products:", error);
    });
  }, []); */
useQuery({ fetchFn: getAllProducts });
useQuery({ fetchFn: getProductById, args: ["1"] });
useQuery({
    fetchFn: updateProductById,
    args: ["1", { quantity: 48 }]
  });

useEffect(() => {
    const unsubscribe = subscribeToProducts((products) => {
      console.log("Realtime products from firestore:", products);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className={classes.container}>
      <h1>Maps E-Shop</h1>
      <h2>Mapping Moments: Your Story, Beautifully Illustrated</h2>
    </main>
  );
}