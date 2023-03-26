import { MovieCard } from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'fetch-services/Fetch-servises';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getMovieDetails(movieId);
        setMovieDetails(responce);
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
        <MovieCard movie={movieDetails} />
      </section>
    </>
  );
};
