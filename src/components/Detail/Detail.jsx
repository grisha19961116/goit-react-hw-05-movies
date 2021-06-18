import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import s from './Detail.module.css';
import { getDetail, getIframe } from '../../data-api/data-api';
import Button from '../Navigation/Button/Button';
import { QueueWatched } from '../QueueWatched/QueueWatched';

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

        const state = await {
          id: id,
          key: iframe.results[0] ? iframe.results[0].key : null,
          backdrop_path:
            array.backdrop_path &&
            `https://image.tmdb.org/t/p/w500/${array.backdrop_path}`,
          release_date: array.release_date
            ? array.release_date
            : 'Data is missing...',
          genres: array.genres ? array.genres : [],
          original_title: array.original_title
            ? array.original_title
            : 'Title is missing...',
          popularity: array.popularity ? array.popularity : 'is missing...',
          overview: array.overview ? array.overview : 'Overview is missing',
        };
        setData(state);
      } catch (err) {
        setData(null);
      }
    })();
  }, [id]);

  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  return data && data.length !== 0 ? (
    <div className={s.detail_wrapper}>
      <div className={s.detail_btn_wrapper}>
        <Button text={from === '/' ? 'Home' : 'Movies'} to={from} />
      </div>
      <QueueWatched movie={data} />
      <div className={s.wrapper_description}>
        {data.key ? (
          <iframe
            className={s.detail_iframe_trailer}
            title="trailer"
            width="420"
            height="345"
            src={`https://www.youtube.com/embed/${data.key}`}
          />
        ) : (
          <img
            className={s.detail_img_trailer}
            alt="trailer"
            src={
              data.backdrop_path
                ? data.backdrop_path
                : 'https://thumbs.dreamstime.com/z/illustration-red-unavailable-sign-white-background-174556653.jpg'
            }
            width="500px"
            height="300px"
          />
        )}

        <div className={s.detail_description}>
          <h2 className={s.detail_title}>{data.original_title}</h2>
          <h2 className={s.detail_data}>{data.release_date}</h2>
          <h2 className={s.detail_popularity}>
            Votes : {data.popularity + ' 💖'}
          </h2>
          <ul className={s.detail_genres_list}>
            <li className={s.detail_genres_list_first_item} key="first">
              Genres :
            </li>
            {data.genres.length !== 0 ? (
              data.genres.map(({ name }, i) => {
                return (
                  <li
                    className={s.detail_genres_list_item}
                    style={{
                      color: '#' + randomColor(),
                      backgroundColor: '#' + randomColor(),
                    }}
                    key={i}
                  >
                    {name}
                  </li>
                );
              })
            ) : (
              <li
                className={s.detail_genres_list_item}
                style={{
                  color: '#' + randomColor(),
                  background: '#' + randomColor(),
                }}
                key="warn"
              >
                not available!
              </li>
            )}
          </ul>
          <h2 className={s.detail_overview}>{data.overview}</h2>
        </div>
      </div>
      <div className={s.detail_navigation_wrapper}>
        <Button text="Cast" to={`/movies/${id}/cast`} />
        <Button text="Review" to={`/movies/${id}/review`} />
      </div>
    </div>
  ) : (
    <h3 className={s.detail_error}>Detail content is missed...</h3>
  );
}
export default Detail;
