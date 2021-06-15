import s from './Review.module.css';
import { fetchReview } from '../../data-api/api';
import { useEffect, useState } from 'react';

function Review() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getReview() {
      try {
        const id = await localStorage.getItem('id');
        const { results } = await fetchReview(id);
        setData(results[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getReview();
  }, []);

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
