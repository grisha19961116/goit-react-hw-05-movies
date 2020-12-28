import { useState, useEffect } from 'react';
import List from '../List/List';

const HomePage = () => {
  const [saveQuery, setSaveQuery] = useState('');

  useEffect(() => {
    const getQuery = localStorage.getItem('query');
    if (getQuery === null || getQuery === '') {
      return setSaveQuery('');
    }
    setSaveQuery(getQuery);
  }, []);

  return (
    <>
      <List flagTrend={true} query={saveQuery !== '' && saveQuery} />
    </>
  );
};

export default HomePage;
