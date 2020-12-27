import s from './DetailsMovie.module.css';
import api from '../../API/api';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useRouteMatch, NavLink, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
const AsyncComponentCast = lazy(() =>
  import('../Cast/Cast.jsx' /* webpackChunkName: "Cast" */),
);
const AsyncComponentReview = lazy(() =>
  import('../Review/Review' /* webpackChunkName: "Review" */),
);

const DetailsMovie = ({ lastUrl }) => {
  const id = useRouteMatch();
  const [DataFetchDetail, setDataFetchDetail] = useState([]);
  const currentId = Number(id.params.id);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (lastUrl === '' || lastUrl === undefined) {
      return;
    }
    setUrl(lastUrl);
  }, [lastUrl]);
  console.log(url, `right prev path`);
  useEffect(() => {
    const getDetailReqAsync = async () => {
      try {
        const baseUrl = `https://api.themoviedb.org/3/movie/${currentId}?api_key=78f2432cb0b978404715fbeff43c36be&language=en-US`;
        const getDetailArray = await api
          .getFullRequest(baseUrl)
          .then(dataRequest => {
            return dataRequest;
          });

        if (getDetailArray === null || getDetailArray.length === 0) {
          return;
        }

        setDataFetchDetail(getDetailArray);
      } catch (error) {
        console.error(error);
      }
    };
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
  } = DataFetchDetail;

  return (
    <>
      <Navigation />
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
            <h4 className={s.detail_h4}>User score : {popularity * 10}%</h4>
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
          {idLinksCheck === 2 ? <AsyncComponentReview id={id} /> : null}
        </Route>
      </Suspense>

      {!genres ? (
        <div className={s.warning}>
          <h1 className={s.warning__h1}>
            We do not have details information about this film
            {
              <>
                <tr></tr>
                <Button
                  textArea={`back for prev list`}
                  to={url === '' ? '/movies/' : url}
                />
              </>
            }
          </h1>
        </div>
      ) : (
        <Button
          textArea={`back for prev list`}
          to={url === '' ? '/movies/' : url}
        />
      )}
    </>
  );
};
export default DetailsMovie;
