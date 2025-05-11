import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductList.module.scss';

export default function ProductList({ productData }) {
  return (
    <section className={classes.container}>
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}