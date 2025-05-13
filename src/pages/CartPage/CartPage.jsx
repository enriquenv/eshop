import { useCart } from '../../context/CartContext';
import Button from '../../components/Button/Button';
import classes from './CartPage.module.scss';

export default function CartPage() {
  const { cart, removeFromCart, increment, decrement, clearCart } = useCart();

  let total = 0;
  for (const item of cart) {
  total += item.price * item.quantity;
}

  return (
    <main className={classes.container}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <div key={item.id + item.variant}>
                <Button onClick={() => decrement(item.id, item.variant)}>-</Button>
                <Button onClick={() => increment(item.id, item.variant)}>+</Button>
                <p className={classes.p}><strong>{item.name}</strong> ({item.variant}) - ${item.price} x {item.quantity}</p>
                <Button onClick={() => removeFromCart(item.id, item.variant)}>Remove</Button>
              </div>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <Button onClick={clearCart}>Pay Now</Button>
        </>
      )}
    </main>
  );
}