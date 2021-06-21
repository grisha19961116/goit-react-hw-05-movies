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
        const parsedArray = JSON.parse(array);
        let dataDivided = [];
        let arr = [];
        parsedArray.forEach((el, i) => {
          console.log(i);
          arr = [...arr, el];
          if (arr.length === 20) {
            dataDivided = [...dataDivided, arr];
            arr = [];
            return;
          }
          if (parsedArray.length === i + 1) dataDivided = [...dataDivided, arr];
        });
        if (array) setData(dataDivided);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [flag, path]);

  useEffect(() => {
    const page = localStorage.getItem('page' + flag);
    if (page) setActivePage(Number(page));
  }, [flag]);

  const handlePageChange = page => {
    localStorage.setItem('page' + flag, page);
    setActivePage(page);
  };

  console.log(data);
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
