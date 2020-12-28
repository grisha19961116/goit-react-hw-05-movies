import s from './Review.module.css';
import { fetchReview } from '../../API/api';
import { useEffect, useState } from 'react';

function Review({ id }) {
  const [dataFetchReview, setDataFetchReview] = useState(null);

  useEffect(() => {
    async function getReview() {
      try {
        const dataReview = await fetchReview(id);
        console.log(dataReview);
        setDataFetchReview(dataReview.results[0]);
      } catch (error) {
        console.error(error);
      }
    }
    getReview();
  }, [id]);

  return dataFetchReview !== null ? (
    <div>
      <h3 className={s.detail_h3_review}>{dataFetchReview.author}</h3>
      <p>{dataFetchReview.content}</p>
    </div>
  ) : (
    <h3 className={s.detail_h3_review}>
      `We don't have any Reviews for this video with id ${id}!!!`
    </h3>
  );
}
export default Review;
