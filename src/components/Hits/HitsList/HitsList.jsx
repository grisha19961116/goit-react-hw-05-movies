import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import s from './HitsList.module.css';

const HitsList = ({ data }) => {
  const { path } = useRouteMatch();

  return data.length > 0
    ? data.map(({ original_title, id }, i) => {
        return (
          <li key={i} className={s.hits_item}>
            <Link
              className={s.hits__link}
              to={`/movies/${id}`}
              onClick={() => localStorage.setItem('path', path)}
            >
              {original_title}
            </Link>
          </li>
        );
      })
    : null;
};
export default HitsList;
