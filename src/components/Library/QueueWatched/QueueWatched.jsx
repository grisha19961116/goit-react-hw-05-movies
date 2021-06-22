import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Hits from '../../Hits/Hits';

const QueueWatched = ({ flag }) => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const { path } = useRouteMatch();

  useEffect(() => {
    (async function handleDivide() {
      try {
        localStorage.setItem('library', path);
        const array = localStorage.getItem(flag);
        if (!array) return;
        const parsedArray = JSON.parse(array);
        let dataDivided = [];
        let arr = [];
        parsedArray.forEach((el, i) => {
          arr = [...arr, el];
          if (arr.length === 20) {
            dataDivided = [...dataDivided, arr];
            arr = [];
            return;
          }
          if (parsedArray.length === i + 1) dataDivided = [...dataDivided, arr];
        });
        setData(dataDivided);
        setActivePage(dataDivided.length);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [flag, path]);

  const handlePageChange = page => setActivePage(page);

  return (
    <Hits
      dataLibrary={data}
      page={activePage}
      total={data.length}
      handlePageChange={handlePageChange}
    />
  );
};

export default QueueWatched;
