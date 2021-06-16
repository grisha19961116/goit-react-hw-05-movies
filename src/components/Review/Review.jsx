import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import s from './Review.module.css';
import { getReview } from '../../data-api/data-api';

function Review() {
  const [data, setData] = useState(null);
  const {
    params: { id },
  } = useRouteMatch();

  useEffect(() => {
    async function review() {
      try {
        const { results } = await getReview(id);
        setData(results[0]);
      } catch (error) {
        console.error(error);
      }
    }
    review();
  }, [id]);

  return data ? (
    <div>
      <h3 className={s.detail_h3_review}>{data.author}</h3>
      <p>{data.content}</p>
    </div>
  ) : (
    <h3 className={s.detail_h3_review}>
      `We don't have any Reviews for this video with id !!!`
    </h3>
  );
}
export default Review;
