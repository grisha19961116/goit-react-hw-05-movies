import Button from '../Button/Button';
import s from './Navigation.module.css';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className={s.wrapper__button}>
        <Button textArea="Home" to="/" />
        <Button textArea="Movies" to="/movies" />
      </div>
    </>
  );
};
export default Navigation;
