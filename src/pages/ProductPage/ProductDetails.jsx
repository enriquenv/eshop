import { useCart } from '../../context/CartContext';
import Button from '../../components/Button/Button';
import classes from './ProductDetails.module.scss';

export default function ProductDetails({ productData }) {
  const { addToCart } = useCart();
  if (!productData) return null;
  const variant = productData.size || 'default';

  return (
    <section className={classes.container}>
      <h2>{productData.name}</h2>
      <img src={productData.imageUrl} alt={productData.name} style={{ maxWidth: '400px' }} />
      <p>Price: ${productData.price}</p>
      <p>Available: {productData.quantity}</p>
      <p>Size: {productData.size}</p>
      <Button onClick={() => addToCart(productData, variant)}>Add to Cart</Button>
    </section>
  );
}