import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import s from './ListItems.module.css';

const ListItems = ({ data }) => {
  const { path } = useRouteMatch();

  return data.length > 0 ? (
    data.map((elem, i) => {
      if (elem.original_title !== undefined) {
        return (
          <li key={i} className={s.trend__list__item}>
            <Link
              className={s.trend__link__item}
              to={`/movies/${i}`}
              onClick={() => localStorage.setItem('path', path)}
            >
              {elem.original_title}
            </Link>
          </li>
        );
      }
    })
  ) : (
    <p className={s.trend__p}>wait please...</p>
  );
};
export default ListItems;
