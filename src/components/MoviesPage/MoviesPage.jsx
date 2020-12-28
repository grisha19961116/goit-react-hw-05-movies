import s from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import List from '../List/List';

function MoviesPage() {
  const [saveValue, setSaveValue] = useState('');

  useEffect(() => {
    const getQuery = localStorage.getItem('query');
    if (getQuery === null) {
      return;
    }
    setSaveValue(getQuery);
  }, []);

  const handlerSubmit = e => {
    e.preventDefault();
    const query = e.target.lastChild.value.toLowerCase().trim();
    if (query === '') {
      return;
    }
    localStorage.setItem('query', query);
    setSaveValue(query);
  };

  return (
    <>
      <header className={s.Searchbar}>
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
      <List query={saveValue !== '' && saveValue} flagTrend={false} />
    </>
  );
}
export default MoviesPage;
