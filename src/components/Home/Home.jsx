import { useState, useEffect } from 'react';

import Hits from '../Hits/Hits';

const HomePage = () => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const page = localStorage.getItem('pageHome');
    setActivePage(Number(page));
  }, []);

  const handlePageChange = page => {
    localStorage.setItem('pageHome', page);
    setActivePage(page);
  };

  return (
    <Hits
      flag={true}
      query={null}
      page={activePage}
      handlePageChange={handlePageChange}
    />
  );
};

export default HomePage;
