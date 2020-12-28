import s from './ListItem/ListItem.module.css';
import { fetchTrend, fetchSearch } from '../../API/api';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ListItem from './ListItem/ListItem';

const List = ({ flagTrend, query }) => {
  const [dataFetchTrend, setDataFetchTrend] = useState([]);

  useEffect(() => {
    if (query !== '') {
      return;
    }
    flagTrend &&
      fetchTrend().then(data => {
        if (data === null || data.length === 0) {
          return;
        }
        setDataFetchTrend(data.results);
      });
  }, [flagTrend, query]);

  useEffect(() => {
    query !== '' &&
      fetchSearch(query).then(data => {
        if (data === null || data.length === 0) {
          return;
        }
        setDataFetchTrend(data.results);
      });
  }, [query]);

  return (
    <>
      {flagTrend && <h1 className={s.trend__h1}>Trending today...</h1>}
      <ul className={s.trend__list}>
        <Route>
          <ListItem dataFetchTrend={dataFetchTrend} />
        </Route>
      </ul>
    </>
  );
};

export default List;
