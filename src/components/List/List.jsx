import s from './List.module.css';
import api from '../../API/api';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ListItem from '../ListItem/ListItem.jsx';

const List = ({ baseUrl, flagTrend }) => {
  const [dataFetchTrend, setDataFetchTrend] = useState([]);

  useEffect(() => {
    const getTrendReqAsync = async () => {
      try {
        const getTrendArray = await api
          .getFullRequest(baseUrl)
          .then(dataRequest => {
            return dataRequest.results;
          });

        if (getTrendArray === null || getTrendArray.length === 0) {
          return;
        }

        setDataFetchTrend(getTrendArray);
      } catch (error) {
        console.error(error);
      }
    };
    getTrendReqAsync();
  }, [baseUrl]);

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
