import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import css from './Navigation.module.css';
import { buildLinkClass } from '../constanta';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthNav className={buildLinkClass} />}
    </header>
  );
};
