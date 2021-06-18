import { NavLink } from 'react-router-dom';

import s from './Button.module.css';

const Button = ({ text, to }) => {
  return (
    <button type="button" className={s.button_navigation}>
      <NavLink
        exact
        to={to}
        activeClassName={s.navigation_link_active}
        className={s.navigation_link}
      >
        {text}
      </NavLink>
    </button>
  );
};

export default Button;
