import './MoviesPage.module.css';
import s from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import List from '../List/List';
import Button from '../Button/Button';

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
    console.log(e);
    e.preventDefault();
    const query = e.target.lastChild.value.toLowerCase().trim();
    localStorage.setItem('query', query);
    setSaveValue(query);
  };

  const baseUrlTrend = `https://api.themoviedb.org/3/trending/all/day?api_key=78f2432cb0b978404715fbeff43c36be`;
  const rightRequest = `https://api.themoviedb.org/3/search/movie?api_key=78f2432cb0b978404715fbeff43c36be&language=en-US&query=${saveValue}&page=1&include_adult=false`;
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
      <Button textArea="back on Home Page" to="/" />
      {saveValue !== '' ? (
        <List baseUrl={rightRequest} />
      ) : (
        <List baseUrl={baseUrlTrend} flagTrend={true} />
      )}
    </>
  );
}
export default MoviesPage;
