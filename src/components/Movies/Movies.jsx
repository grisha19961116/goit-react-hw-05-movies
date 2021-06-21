import { useState, useEffect } from 'react';

import s from './Movies.module.css';
import Hits from '../Hits/Hits';

function MoviesPage() {
  const [value, setValue] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const query = localStorage.getItem('query');
    setValue(query);
    const page = localStorage.getItem('pageSearch');
    if (page) setActivePage(Number(page));
  }, []);

  const handlerSubmit = e => {
    const query = e.target.lastChild.value.toLowerCase().trim();
    localStorage.setItem('query', query);
    setValue(query);
    e.preventDefault();
    localStorage.setItem('pageSearch', 1);
    setActivePage(1);
  };

  const handlePageChange = page => {
    localStorage.setItem('pageSearch', page);
    setActivePage(page);
  };

  return (
    <>
      <header className={s.SearchBar}>
        <form className={s.SearchForm} onSubmit={handlerSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <span className="s.SearchForm-button-label"></span>
          </button>
          <input
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
            defaultValue={value}
          />
        </form>
      </header>
      <Hits
        flag={false}
        query={value}
        page={activePage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
export default MoviesPage;
