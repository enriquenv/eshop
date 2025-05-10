import { Link } from 'react-router';
import classes from './ProductCard.module.scss';

export default function ProductCard() {
  return (
    <article>
      <div>
        <h3>
          Map Product Name
        </h3>
        <h5>Price: $29.99</h5>
        <Link to={``}>See More</Link>
      </div>
    </article>
  );
}
