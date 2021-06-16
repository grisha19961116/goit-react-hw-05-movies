import Button from './Button/Button';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.wrapper__button}>
      <Button text="Home" to="/" />
      <Button text="Movies" to="/movies" />
    </div>
  );
};
export default Navigation;
