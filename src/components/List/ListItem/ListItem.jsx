import s from './ListItem.module.css';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const ListItem = ({ dataFetchTrend }) => {
  const { path } = useRouteMatch();
  const setPrevList = from => {
    console.log(from, `from we come`);
    localStorage.setItem('path', from);
  };

  return dataFetchTrend.length > 0 ? (
    dataFetchTrend.map((elem, index) => {
      if (elem.original_title !== undefined) {
        return (
          <li key={index} className={s.trend__list__item}>
            <Link
              className={s.trend__link__item}
              to={`/movies/${index}`}
              onClick={() => setPrevList(path)}
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
export default ListItem;
