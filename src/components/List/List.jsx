import s from './List.module.css';
import { fetchTrend, fetchSearch } from '../../data-api/api';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ListItems from './ListItems/ListItems';

const List = ({ flag, query }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function gethTrend() {
      try {
        const hits = await fetchTrend();
        if (hits === null || hits.length === 0) return;
        setData(hits.results);
      } catch (error) {
        console.error(error);
      }
    }

    async function gethSearch() {
      try {
        const hits = await fetchSearch(query);
        if (hits === null || hits.length === 0) return;
        setData(hits.results);
      } catch (error) {
        console.error(error);
      }
    }

    if (flag) return gethTrend();
    if (query && !flag) return gethSearch(query);
  }, [query, flag]);

  return (
    <>
      {flag && <h1 className={s.trend__h1}>Trending today...</h1>}
      {!flag && !query && (
        <h1 className={s.trend__h1}>
          Trending today...We are in movies page i did it special,for preload...
        </h1>
      )}
      <Route>
        <ul className={s.trend__list}>
          <ListItems data={data} />
        </ul>
      </Route>
    </>
  );
};

export default List;
