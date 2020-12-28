import s from './Cast.module.css';
import api from '../../API/api';
import { useEffect, useState } from 'react';

function Cast({ id }) {
  const [dataFetchCast, setDataFetchCast] = useState([]);
  useEffect(() => {
    const getCastReqAsync = async () => {
      try {
        const baseUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=78f2432cb0b978404715fbeff43c36be&language=en-US`;
        const getCastArray = await api
          .getFullRequest(baseUrl)
          .then(dataRequest => {
            return dataRequest.cast;
          });

        if (getCastArray === null || getCastArray.length === 0) {
          return;
        }

        setDataFetchCast(getCastArray);
      } catch (error) {
        console.error(error);
      }
    };
    getCastReqAsync();
  }, [id]);
  console.log(dataFetchCast, `Cast`);
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
