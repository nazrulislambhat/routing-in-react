import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>{' '}
        <li>
          <NavLink to="/user/1">user/1</NavLink>
        </li>
        <li>
          <NavLink to="/user/2">user/2</NavLink>
        </li>
        <li>
          <NavLink to="/user/3">user/3</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
