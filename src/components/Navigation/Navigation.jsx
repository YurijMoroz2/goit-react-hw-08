import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const Navigation = () => {
  return (
    <header className={css.header}>

    <nav className={css.nav}>
      <NavLink to="/"  className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={buildLinkClass}>
        Contacts
      </NavLink>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Login
      </NavLink>
    </nav>
    </header>
  );
};