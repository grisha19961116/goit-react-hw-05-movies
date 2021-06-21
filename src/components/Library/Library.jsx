import { useEffect, useState } from 'react';

import s from './Library.module.css';
import Button from '../Navigation/Button/Button';

const Library = () => {
  const [from, setFrom] = useState('/');

  useEffect(() => {
    const path = localStorage.getItem('path');
    if (!path) return;
    setFrom(path);
  }, []);

  return (
    <div className={s.library_navigation_wrapper}>
      <div className={s.library_btn_wrapper}>
        <Button text={from === '/' ? 'Home' : 'Movies'} to={from} />
      </div>
      <div className={s.library_refs_wrapper}>
        <Button text="Queue" to={'/library/queue'} />
        <Button text="Watched" to={'/library/watched'} />
      </div>
    </div>
  );
};

export default Library;
