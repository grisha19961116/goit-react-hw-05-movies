import React from 'react';
import { Link } from 'react-router-dom';

import errImg from '../../../img/360_F_17777112_qXha4dViITwacvljBhqexBJdA0w09W3p(1).png';
import s from './HitsList.module.css';

const HitsList = ({ data }) => {
  return data.length > 0 ? (
    data.map(({ original_title, backdrop_path, id }, i) => {
      return (
        <li key={i} className={s.hits_item}>
          <Link className={s.hits_link} to={`/movies/${id}`}>
            <img
              className={s.hits_img}
              alt={original_title ? original_title : 'title'}
              src={
                backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                  : errImg
              }
              width="500px"
              height="300px"
            />
            <p className={s.hits_title}>
              {original_title ? original_title : 'Unknown film...'}
            </p>
          </Link>
        </li>
      );
    })
  ) : (
    <h3 className={s.hits_list_error}>List is empty...</h3>
  );
};
export default HitsList;
