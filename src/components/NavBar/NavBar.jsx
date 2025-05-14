import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_group}>
        <NavLink className={classes.nav_link} to="/">
          🏠 Home
        </NavLink>
      </div>
      <div><h1><NavLink className={`${classes.nav_title} ${classes.logoFont}`} to="/">StoryMaps Co.</NavLink></h1></div>
      <div className={classes.nav_group}>
        <NavLink className={classes.nav_link} to="/cart">
          Cart 🛒
        </NavLink>
      </div>
    </nav>
  );
}