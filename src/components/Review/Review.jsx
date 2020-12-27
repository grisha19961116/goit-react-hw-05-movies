import s from './Review.module.css';
import api from '../../API/api';
import { useEffect, useState } from 'react';

function Review({ id }) {
  const [dataFetchReview, setDataFetchReview] = useState({});
  useEffect(() => {
    const getReviewReqAsync = async () => {
      try {
        const baseUrl = `https://api.themoviedb.org/3/movie/tt0092149/reviews?api_key=78f2432cb0b978404715fbeff43c36be&language=en-US&page=1`;
        const getReviewArray = await api
          .getFullRequest(baseUrl)
          .then(dataRequest => {
            return dataRequest.results;
          });

        if (getReviewArray === null || getReviewArray.length === 0) {
          return;
        }

        setDataFetchReview(getReviewArray[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getReviewReqAsync();
  }, [id]);
  console.log(dataFetchReview, `dataFetchReview`);
  const { author, content } = dataFetchReview;
  console.log(content, `content`);
  return dataFetchReview !== {} ? (
    <div>
      <h3 className={s.detail_h3_review}>{author}</h3>
      <p>{content}</p>
    </div>
  ) : (
    <h3 className={s.detail_h3_review}>
      `We don't have any Reviews for this video with id ${id}!!!`
    </h3>
  );
}
export default Review;
