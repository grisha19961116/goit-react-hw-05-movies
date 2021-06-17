import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import errImg from '../../../img/360_F_17777112_qXha4dViITwacvljBhqexBJdA0w09W3p(1).png';
import s from './HitsList.module.css';

const HitsList = ({ data }) => {
  const { path } = useRouteMatch();
  console.log(errImg);

  return data.length > 0
    ? data.map(({ original_title, backdrop_path, id }, i) => {
        console.log(!backdrop_path);
        const title = original_title ? original_title : 'The film...';
        return (
          <li key={i} className={s.hits_item}>
            <Link
              className={s.hits_link}
              to={`/movies/${id}`}
              onClick={() => localStorage.setItem('path', path)}
            >
              <img
                className={s.hits_img}
                alt={original_title}
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : errImg
                }
                width="500px"
                height="300px"
              />
              <p className={s.hits_title}>{title}</p>
            </Link>
          </li>
        );
      })
    : null;
};
export default HitsList;
