import s from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import List from '../List/List';
import Navigation from '../Navigation/Navigation';

const HomePage = ({ handleUrl }) => {
  const [saveQuery, setSaveQuery] = useState('');

  const { url } = useRouteMatch();
  handleUrl(url);

  useEffect(() => {
    const getQuery = localStorage.getItem('query');
    if (getQuery === null || getQuery === '') {
      return setSaveQuery('');
    }
    setSaveQuery(getQuery);
  }, []);

  const rightRequest = `https://api.themoviedb.org/3/search/movie?api_key=78f2432cb0b978404715fbeff43c36be&language=en-US&query=${saveQuery}&page=1&include_adult=false`;
  const baseUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=78f2432cb0b978404715fbeff43c36be`;

  return (
    <>
      <Navigation />
      {saveQuery === '' ? (
        <List baseUrl={baseUrl} flagTrend={true} />
      ) : (
        <List baseUrl={rightRequest} flagTrend={false} />
      )}
    </>
  );
};

export default HomePage;
