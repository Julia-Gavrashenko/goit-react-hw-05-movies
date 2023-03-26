import { getReviews } from 'fetch-services/Fetch-servises';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
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
                <li key={id}>
                  <h4>Author{author}</h4>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </section>
    </>
  );
};
