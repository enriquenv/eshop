import { Link } from 'react-router';
import classes from './ProductCard.module.scss';

export default function ProductCard({ product }) {
  return (
    <article
      className={classes.card}
      style={{ backgroundImage: `url(${product.imageUrl})` }}
    >
      <div className={classes.content}>
        <h3>
          {product.name}
        </h3>
        <h5>Price: ${product.price}</h5>
        <Link to={`/products/${product.id}`}>See More</Link>
      </div>
    </article>
  );
}