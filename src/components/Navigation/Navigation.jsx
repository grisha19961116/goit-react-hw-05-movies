import { useRouteMatch } from 'react-router-dom';

import Button from './Button/Button';
import s from './Navigation.module.css';

const Navigation = () => {
  const setLc = from => {
    localStorage.removeItem('library');
    localStorage.setItem('path', from);
  };

  const { path } = useRouteMatch();

  return (
    <div className={s.wrapper__button}>
      <Button handleClick={setLc('/')} text="Home" to="/" />
      <Button handleClick={setLc('/movies')} text="Movies" to="/movies" />
      <Button handleClick={setLc(path)} text="Library" to="/library/queue" />
    </div>
  );
};
export default Navigation;
