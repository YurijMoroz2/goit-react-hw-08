import { NavLink } from 'react-router-dom';

export const AuthNav = ({ className }) => {
  return (
    <div>
      <NavLink className={className} to="/register">
        Register
      </NavLink>
      <NavLink className={className} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
