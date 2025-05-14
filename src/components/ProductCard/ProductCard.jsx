import { Link } from 'react-router';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';
import classes from './ProductCard.module.scss';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const variant = product.size || 'default';

  return (
    <article
      className={classes.card}
      style={{ backgroundImage: `url(${product.imageUrl})` }}
    >
      <div className={classes.content}>
        <h3>{product.name}</h3>
        <h5>Price: ${product.price}</h5>
        <Button onClick={() => addToCart(product, variant)}>Add to Cart</Button>
        <Link to={`/products/${product.id}`}><Button>See More</Button></Link>
      </div>
    </article>
  );
}