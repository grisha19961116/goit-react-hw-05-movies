import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './Hits.module.css';
import { getTrend, getSearch } from '../../data-api/data-api';
import Loader from '../Loader/Loader';
import HitsList from './HitsList/HitsList';
import Pagination from '../PaginationBar/PaginationBar';

const Hits = ({ flag, query, dataLibrary = null, page, handlePageChange }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (dataLibrary) return;
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
        const { results } = await getTrend(page);
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
        const { results } = await getSearch(query, page);
        if (results === null || results.length === 0) return warn(true);
        setData(results);
      } catch (e) {
        err(e);
      } finally {
        setIsLoading(false);
      }
    }

    if (flag) return trend();
    if (query && query !== '' && !flag) return search();
    if (query === '' && !flag) return setData([]);
  }, [query, flag, dataLibrary, page]);

  const array = dataLibrary ? dataLibrary : data;

  return (
    <Route>
      <ul className={s.hits_list}>
        <HitsList data={array} />
      </ul>
      {array.length > 0 && handlePageChange && (
        <Pagination
          page={page}
          total={array.length}
          handlePageChange={handlePageChange}
        />
      )}
      {isLoading && <Loader />}
    </Route>
  );
};

export default Hits;
