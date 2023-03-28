import { getReviews } from 'fetch-services/Fetch-servises';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewAuthor, ReviewText, NoReview } from './Reviews.styled';

 const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getReviews(movieId);
        console.log(responce);
        setReviewList(responce);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error, movieId]);

  return (
    <>
      <section>
        {loading && <div>Loading...</div>}
        {reviewList.length !== 0 ? (
          <ul>
            {reviewList.map(({ id, author, content }) => {
              return (
                <ReviewList key={id}>
                  <ReviewAuthor>Author: {author}</ReviewAuthor>
                  <ReviewText>{content}</ReviewText>
                </ReviewList>
              );
            })}
          </ul>
        ) : (
          <NoReview>We don't have any reviews for this movie</NoReview>
        )}
      </section>
    </>
  );
};

export default Reviews