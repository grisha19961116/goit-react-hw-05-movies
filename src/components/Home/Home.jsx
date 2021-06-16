import { useState, useEffect } from 'react';

import Hits from '../Hits/Hits';

const HomePage = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const query = localStorage.getItem('query');
    setValue(query);
  }, []);

  return <Hits flag={true} query={value} />;
};

export default HomePage;
