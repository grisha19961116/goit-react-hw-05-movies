import s from './Cast.module.css';
import { fetchCast } from '../../API/api';
import { useEffect, useState } from 'react';

function Cast() {
  const [dataFetchCast, setDataFetchCast] = useState([]);
  useEffect(() => {
    async function gethCast() {
      try {
        const id = await localStorage.getItem('pathIdCast');
        const dataCast = await fetchCast(id);
        setDataFetchCast(dataCast.cast);
      } catch (error) {
        console.error(error);
      }
    }
    gethCast();
  }, []);

  return (
    <ul className={s.cast__list}>
      {dataFetchCast &&
        dataFetchCast.map(({ profile_path, cast_id, character, name }) => {
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
  );
}
export default Cast;
