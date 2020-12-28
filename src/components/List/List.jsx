import s from './ListItem/ListItem.module.css';
import { fetchTrend, fetchSearch } from '../../API/api';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ListItem from './ListItem/ListItem';

const List = ({ flagTrend, query }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function gethTrend() {
      try {
        if (!flagTrend) {
          return;
        }
        const dataTrend = await fetchTrend();
        if (dataTrend === null || dataTrend.length === 0) {
          return;
        }
        setDataList(dataTrend.results);
      } catch (error) {
        console.error(error);
      }
    }
    gethTrend();
  }, [flagTrend]);

  useEffect(() => {
    async function gethTrend() {
      try {
        const dataTrend = await fetchTrend();
        if (dataTrend === null || dataTrend.length === 0) {
          return;
        }
        setDataList(dataTrend.results);
      } catch (error) {
        console.error(error);
      }
    }

    async function gethSearch() {
      try {
        const dataSearch = await fetchSearch(query);
        if (dataSearch === null || dataSearch.length === 0) {
          return;
        }
        setDataList(dataSearch.results);
      } catch (error) {
        console.error(error);
      }
    }

    if (query === false && flagTrend === false) {
      return gethTrend();
    }

    if (query !== false && flagTrend === false) {
      return gethSearch();
    }
  }, [query, flagTrend]);

  return (
    <>
      {flagTrend && <h1 className={s.trend__h1}>Trending today...</h1>}
      {!flagTrend && !query && (
        <h1 className={s.trend__h1}>
          Trending today...We are in movies page i did it special,for preload...
        </h1>
      )}
      <ul className={s.trend__list}>
        <Route>
          <ListItem dataFetchTrend={dataList} />
        </Route>
      </ul>
    </>
  );
};

export default List;
