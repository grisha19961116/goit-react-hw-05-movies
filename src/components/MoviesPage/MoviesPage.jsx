import { useState, useEffect } from 'react';

import s from './MoviesPage.module.css';
import List from '../List/List';

function MoviesPage() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const query = localStorage.getItem('query');
    setValue(query);
  }, []);

  const handlerSubmit = e => {
    e.preventDefault();
    const query = e.target.lastChild.value.toLowerCase().trim();
    localStorage.setItem('query', query);
    setValue(query);
  };

  return (
    <>
      <header className={s.SearchBar}>
        <form className={s.SearchForm} onSubmit={e => handlerSubmit(e)}>
          <button type="submit" className={s.SearchForm__button}>
            <span className="s.SearchForm-button-label"></span>
          </button>
          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            defaultValue=""
          />
        </form>
      </header>
      <List flag={false} query={value} />
    </>
  );
}
export default MoviesPage;
