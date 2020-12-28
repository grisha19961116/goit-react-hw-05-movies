import s from './Review.module.css';
import { fetchReview } from '../../API/api';
import { useEffect, useState } from 'react';

function Review() {
  const [dataFetchReview, setDataFetchReview] = useState(null);

  useEffect(() => {
    async function getReview() {
      try {
        const id = await localStorage.getItem('pathIdReview');
        const dataReview = await fetchReview(id);

        setDataFetchReview(dataReview.results[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getReview();
  }, []);

  return dataFetchReview !== null && dataFetchReview !== undefined ? (
    <div>
      <h3 className={s.detail_h3_review}>{dataFetchReview.author}</h3>
      <p>{dataFetchReview.content}</p>
    </div>
  ) : (
    <h3 className={s.detail_h3_review}>
      `We don't have any Reviews for this video with id !!!`
    </h3>
  );
}
export default Review;
