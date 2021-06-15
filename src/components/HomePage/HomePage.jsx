import { useState, useEffect } from 'react';
import List from '../List/List';

const HomePage = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const query = localStorage.getItem('query');
    setValue(query);
  }, []);

  return (
    <>
      <List flag={true} query={value} />
    </>
  );
};

export default HomePage;
