import s from './DetailsMovie.module.css';
import { fetchDetail } from '../../API/api';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useRouteMatch, NavLink, Route } from 'react-router-dom';
import Button from '../Button/Button';
const AsyncComponentCast = lazy(() =>
  import('../Cast/Cast.jsx' /* webpackChunkName: "Cast" */),
);
const AsyncComponentReview = lazy(() =>
  import('../Review/Review' /* webpackChunkName: "Review" */),
);

function DetailsMovie() {
  const id = useRouteMatch();
  const [dataFetchDetail, setDataFetchDetail] = useState([]);
  const currentId = id.params.id;
  const [pathLc, setPathLc] = useState('/');

  useEffect(() => {
    const path = localStorage.getItem('path');
    if (path === null) {
      return;
    }
    setPathLc(path);
  }, []);

  useEffect(() => {
    async function getDetailReqAsync() {
      try {
        const getDetailArray = await fetchDetail(currentId);

        if (getDetailArray === null || getDetailArray.length === 0) {
          return;
        }

        setDataFetchDetail(getDetailArray);
      } catch (error) {
        console.error(error);
      }
    }

    getDetailReqAsync();
  }, [currentId]);

  const [idLinksCheck, setIdLinksCheck] = useState(null);

  const handleCastAndReview = e => {
    const id = Number(e.target.id);
    setIdLinksCheck(id);
  };

  const {
    genres,
    backdrop_path,
    original_title,
    release_date,
    popularity,
    overview,
    imdb_id,
  } = dataFetchDetail;

  return (
    <>
      {genres && <Button textArea={`back to list`} to={pathLc} />}
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
                  id="1"
                  onClick={e => handleCastAndReview(e)}
                  className={s.link}
                  activeStyle={
                    idLinksCheck === 1 ? { color: 'red' } : { color: 'blue' }
                  }
                  to={`${id.url}`}
                >
                  Cast
                </NavLink>
              </span>
              <span>
                <NavLink
                  id="2"
                  onClick={e => handleCastAndReview(e)}
                  className={s.link}
                  activeStyle={
                    idLinksCheck === 2 ? { color: 'red' } : { color: 'blue' }
                  }
                  to={`${id.url}`}
                >
                  Reviews
                </NavLink>
              </span>
            </div>
          </div>
        </>
      )}

      <Suspense>
        <Route exact path={`/movies/:id`}>
          {idLinksCheck === 1 ? <AsyncComponentCast id={imdb_id} /> : null}
          {idLinksCheck === 2 ? <AsyncComponentReview id={currentId} /> : null}
        </Route>
      </Suspense>

      {!genres && (
        <div className={s.warning}>
          <h1 className={s.warning__h1}>
            We do not have details information about this film
            {
              <>
                <Button textArea={`back to list`} to={pathLc} />
              </>
            }
          </h1>
        </div>
      )}
    </>
  );
}
export default DetailsMovie;
