import { useEffect, useState } from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';

import s from './DetailsMovie.module.css';
import { getDetail } from '../../data-api/data-api';
import Button from '../Navigation/Button/Button';

function DetailsMovie() {
  const { params } = useRouteMatch();
  const id = params.id;
  const [data, setData] = useState([]);
  const [from, setFrom] = useState('/');

  useEffect(() => {
    const path = localStorage.getItem('path');
    if (!path) return;
    setFrom(path);
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const array = await getDetail(id);
        if (array === null || array.length === 0) return;
        setData(array);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  const {
    genres,
    backdrop_path,
    original_title,
    release_date,
    popularity,
    overview,
  } = data;

  return (
    <div>
      {genres && (
        <Button
          text={`back to ${from === '/' ? 'Home Page' : 'Search Bar'}`}
          to={from}
        />
      )}
      {genres && (
        <>
          <div className={s.detail__wrapper}>
            <img
              alt="s"
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              width="500px"
              height="300px"
            />
            <h2 className={s.detail_h2}>
              {original_title} {release_date.slice(0, 4)}
            </h2>
            <h4 className={s.detail_h4}>User score : {popularity}</h4>
            <h3 className={s.detail_h3}>Overview {overview}</h3>

            <h3 className={s.detail_h3_list}>Genres</h3>
            <ul>
              {genres.map(({ name }) => {
                return <li key={name}>{name}</li>;
              })}
            </ul>
            <div className={s.div_links}>
              <h3 className={s.detail_h3_list}>Additional information</h3>
              <span>
                <NavLink
                  className={s.link}
                  activeStyle={{ color: 'blue' }}
                  to={`/movies/${id}/cast`}
                >
                  Cast
                </NavLink>
              </span>
              <span>
                <NavLink
                  className={s.link}
                  activeStyle={{ color: 'blue' }}
                  to={`/movies/${id}/review`}
                >
                  Reviews
                </NavLink>
              </span>
            </div>
          </div>
        </>
      )}

      {!genres && (
        <div className={s.warning}>
          <h1 className={s.warning__h1}>
            We do not have details information about this film
            {
              <>
                <Button
                  text={`back to ${from === '/' ? 'Home Page' : 'Search Bar'}`}
                  to={from}
                />
              </>
            }
          </h1>
        </div>
      )}
    </div>
  );
}
export default DetailsMovie;
