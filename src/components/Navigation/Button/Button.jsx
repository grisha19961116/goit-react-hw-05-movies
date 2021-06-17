import { NavLink, useHistory } from 'react-router-dom';

import s from './Button.module.css';

const Button = ({ text, to, isRedirect }) => {
  const history = useHistory();

  const setHistory = to => {
    if (to === '/') {
      return history.push(to, { from: 'home' });
    }
    history.push(to, { from: 'movie' });
  };

  return (
    <button
      type="button"
      className={s.button_navigation}
      onClick={() => !isRedirect && setHistory(to)}
    >
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
