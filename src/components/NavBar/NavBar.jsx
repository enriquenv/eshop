import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/cart">
          Cart
        </NavLink>
      </div>
    </nav>
  );
}
