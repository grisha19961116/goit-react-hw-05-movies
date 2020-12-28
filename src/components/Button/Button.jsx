import s from './Button.module.css';
import { NavLink, useHistory } from 'react-router-dom';

const Button = ({ textArea, to }) => {
  const history = useHistory();
  const setHistory = to => {
    if (to === '/') {
      return history.push(to, { from: 'home' });
    }
    history.push(to, { from: 'movie' });
  };

  return (
    <button type="button" className={s.Button} onClick={() => setHistory(to)}>
      <NavLink
        exact
        to={to}
        activeClassName={s.Button__link__active}
        className={s.Button__link}
      >
        {textArea}
      </NavLink>
    </button>
  );
};

export default Button;
