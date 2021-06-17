import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import s from './Detail.module.css';
import { getDetail, getIframe } from '../../data-api/data-api';
import Button from '../Navigation/Button/Button';

function Detail() {
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
        const iframe = await getIframe(id);
        if (iframe === null || iframe.length === 0) return;

        const data = {
          key: iframe.results[0] ? iframe.results[0].key : null,
          backdrop_path:
            array.backdrop_path &&
            `https://image.tmdb.org/t/p/w500/${array.backdrop_path}`,
          release_date: array.release_date ? array.release_date : null,
          genres: array.genres ? array.genres : null,
          original_title: array.original_title ? array.original_title : null,
          popularity: array.popularity ? array.popularity : null,
          overview: array.overview ? array.overview : null,
        };

        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  const {
    key,
    backdrop_path,
    release_date,
    genres,
    original_title,
    popularity,
    overview,
  } = data;

  return data ? (
    <div className={s.detail__wrapper}>
      <div className={s.detail_btn_wrapper}>
        <Button text={from === '/' ? 'Home' : 'Movies'} to={from} />
      </div>

      <div className={s.wrapper_description}>
        {key ? (
          <iframe
            className={s.detail_iframe_trailer}
            title="trailer"
            width="420"
            height="345"
            src={`https://www.youtube.com/embed/${key}`}
          />
        ) : (
          <img
            className={s.detail_img_trailer}
            alt="trailer"
            src={
              backdrop_path
                ? backdrop_path
                : 'https://thumbs.dreamstime.com/z/illustration-red-unavailable-sign-white-background-174556653.jpg'
            }
            width="500px"
            height="300px"
          />
        )}

        <div className={s.detail_description}>
          <h2 className={s.detail_title}>
            {original_title ? original_title : 'Title is missing'}
          </h2>
          <h2 className={s.detail_data}>
            {release_date ? release_date : 'Data is missing'}
          </h2>
          <h2 className={s.detail_popularity}>
            Votes : {popularity ? popularity + ' 💖' : 'is missing'}
          </h2>
          <ul className={s.detail_genres_list}>
            <li className={s.detail_genres_list_first_item} key="first">
              Genres :
            </li>
            {genres ? (
              genres.map(({ name }, i) => {
                return (
                  <li style={{ color: '#' + randomColor() }} key={i}>
                    {name},
                  </li>
                );
              })
            ) : (
              <li style={{ color: '#' + randomColor() }} key="warn">
                not available!
              </li>
            )}
          </ul>
          <h2 className={s.detail_overview}>
            {overview ? overview : 'Overview is missing'}
          </h2>
        </div>
      </div>
      <div className={s.detail_navigation_wrapper}>
        <Button text="Cast" to={`/movies/${id}/cast`} isRedirect={true} />
        <Button text="Review" to={`/movies/${id}/review`} isRedirect={true} />
      </div>
    </div>
  ) : null;
}
export default Detail;
