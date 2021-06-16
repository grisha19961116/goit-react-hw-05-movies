import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './Hits.module.css';
import { getTrend, getSearch } from '../../data-api/data-api';
import Loader from '../Loader/Loader';
import HitsList from './HitsList/HitsList';

const Hits = ({ flag, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const err = () =>
      toast.error(`🚀 Server error!`, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    const warn = isTrue =>
      toast.warn(
        `⚠️${
          isTrue
            ? `Not exist hits on '${query}'`
            : 'Default hits is not available'
        } !`,
        {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );

    async function trend() {
      try {
        setIsLoading(true);
        const { results } = await getTrend();
        if (results === null || results.length === 0) return warn(false);
        setData(results);
      } catch (e) {
        err();
      } finally {
        setIsLoading(false);
      }
    }

    async function search() {
      try {
        setIsLoading(true);
        const { results } = await getSearch(query);
        if (results === null || results.length === 0) return warn(true);
        setData(results);
      } catch (e) {
        err(e);
      } finally {
        setIsLoading(false);
      }
    }

    if (flag) return trend();
    if (query && !flag) return search(query);
  }, [query, flag]);

  const renderList = text => {
    return (
      <>
        <h1 className={s.hits_title}> {text} </h1>
        <Route>
          <ul className={s.hits_list}>
            <HitsList data={data} />
          </ul>
          {isLoading && <Loader />}
        </Route>
      </>
    );
  };

  return (
    <>
      {flag && renderList('Trending today')}
      {!flag && query && renderList('Search list')}
      {!flag && !query && <h1 className={s.hits_title}> Just empty query</h1>}
    </>
  );
};

export default Hits;
