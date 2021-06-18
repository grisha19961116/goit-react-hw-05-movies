import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './Cast.module.css';
import { getCast } from '../../data-api/data-api';
import errImg from '../../img/depositphotos_10757374-stock-illustration-no-user-profile-picture(1).jpg';
import Loader from '../Loader/Loader';

function Cast() {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    params: { id },
  } = useRouteMatch();

  useEffect(() => {
    (async function cast() {
      try {
        setIsLoading(true);
        const { cast } = await getCast(id);
        setData(cast);
      } catch (err) {
        toast.error(`🚀 Server error!`, {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <>
      {data ? (
        <ul className={s.cast_list}>
          {data.map(({ profile_path, character, name }, i) => {
            return (
              <li className={s.cast_item} key={i}>
                <img
                  className={s.cast_img}
                  alt={name ? name : 'name'}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : errImg
                  }
                  width="300px"
                  height="200px"
                />
                <h3 className={s.cast_name}>
                  {name ? name : 'Name is missing...'}
                </h3>
                <h3 className={s.cast_character}>Character : {character}</h3>
              </li>
            );
          })}
        </ul>
      ) : null}
      {isLoading && <Loader />}
    </>
  );
}
export default Cast;
