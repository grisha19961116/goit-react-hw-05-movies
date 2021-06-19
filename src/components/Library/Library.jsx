import s from './Library.module.css';
import Navigation from './Navigation/Navigation';

const Library = () => {
  return (
    <div className={s.library_wrapper}>
      <Navigation />
    </div>
  );
};

export default Library;
