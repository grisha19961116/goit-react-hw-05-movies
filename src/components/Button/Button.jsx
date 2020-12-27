import s from './Button.module.css';
import { NavLink } from 'react-router-dom';

const Button = ({ textArea, to }) => {
  return (
    <button type="button" className={s.Button}>
      {to === '/' ? (
        <NavLink
          exact
          to={to}
          activeClassName={s.Button__link__active}
          className={s.Button__link}
        >
          {textArea}
        </NavLink>
      ) : (
        <NavLink
          to={to}
          activeClassName={s.Button__link__active}
          className={s.Button__link}
        >
          {textArea}
        </NavLink>
      )}
    </button>
  );
};

export default Button;
