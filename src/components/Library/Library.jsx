import s from './Library.module.css';

const Library = () => {
  return (
    <div className={s.library_btn_wrapper}>
      <button className={s.library__btn}>Queue</button>
      <button className={s.library__btn}>Watched</button>
    </div>
  );
};

export default Library;
