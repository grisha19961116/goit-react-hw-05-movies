import s from './HomePage.module.css';
import Button from '../Button/Button';
import List from '../List/List';
import Navigation from '../Navigation/Navigation';

const HomePage = () => {
  const baseUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=78f2432cb0b978404715fbeff43c36be`;
  return (
    <>
      <Navigation />
      <List baseUrl={baseUrl} flagTrend={true} />
    </>
  );
};
export default HomePage;
