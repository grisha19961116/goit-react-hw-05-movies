import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Hits from '../../Hits/Hits';

const QueueWatched = ({ flag }) => {
  const [data, setData] = useState(null);
  const { path } = useRouteMatch();

  useEffect(() => {
    localStorage.setItem('library', path);
    const array = localStorage.getItem(flag);
    if (!array) return;
    setData(JSON.parse(array));
  }, [flag, path]);

  return <Hits dataLibrary={data} />;
};

export default QueueWatched;
