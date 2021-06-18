import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';

import s from './Review.module.css';
import { getReview } from '../../data-api/data-api';
import errImg from '../../img/360_F_17777112_qXha4dViITwacvljBhqexBJdA0w09W3p(1).png';
import Loader from '../Loader/Loader';

function Review() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    params: { id },
  } = useRouteMatch();

  useEffect(() => {
    async function review() {
      try {
        setIsLoading(true);
        const { results } = await getReview(id);
        setData(results[0]);
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
    }
    review();
  }, [id]);

  const profile =
    data && data.author_details ? data.author_details.avatar_path : null;
  const checkPhoto = () =>
    profile.length < 40
      ? `https://image.tmdb.org/t/p/w500${profile}`
      : profile.slice(1);

  return (
    <>
      {' '}
      {data ? (
        <div className={s.review_wrapper}>
          <div className={s.review_block}>
            <h3 className={s.review_title}>
              Was written by '{data.author ? data.author : 'unknown author'}'...
            </h3>
            <img
              className={s.review_img}
              alt="Author_img is missed"
              width="180px"
              height="120px"
              src={profile ? checkPhoto() : errImg}
            />
            <h4 className={s.review_created}>
              Was created{data.created_at ? data.created_at : 'is missed...'}
            </h4>
            <h4 className={s.review_updated}>
              Was updated{data.updated_at ? data.updated_at : 'is missed...'}
            </h4>
            <a
              className={s.review_link}
              href={data.url ? data.url : '#'}
              target="blank"
            >
              Link for well of resource
            </a>
          </div>
          {data.content ? data.content : 'Description is missed...'}
        </div>
      ) : (
        <h3 className={s.review_error}>Review content is missed...</h3>
      )}
      {isLoading && <Loader />}
    </>
  );
}
export default Review;
