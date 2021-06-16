import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import s from './Cast.module.css';
import { getCast } from '../../data-api/data-api';

function Cast() {
  const [data, setData] = useState([]);
  const {
    params: { id },
  } = useRouteMatch();

  useEffect(() => {
    (async function cast() {
      try {
        const { cast } = await getCast(id);
        setData(cast);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    data && (
      <ul className={s.cast__list}>
        {data.map(({ profile_path, cast_id, character, name }) => {
          return (
            <li className={s.cast__li} key={cast_id}>
              <img
                className={s.cast__img}
                alt={name}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                width="300px"
                height="200px"
              />
              <h2 className={s.cast__h2}>{name}</h2>
              <h3 className={s.cast__3}>Character : {character}</h3>
            </li>
          );
        })}
      </ul>
    )
  );
}
export default Cast;
