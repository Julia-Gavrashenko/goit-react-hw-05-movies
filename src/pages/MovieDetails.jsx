import  MovieCard from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'fetch-services/Fetch-servises';
import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { BackBtn } from 'components/MovieCard/MovieCard.styled'


 const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

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
      <Link to={backLinkLocation.current}>
          <BackBtn  type='button'> Go Back</BackBtn >
        </Link>
      <section>
       
        {loading && <div>Loading...</div>}
        <MovieCard movie={movieDetails} />
      </section>
    </>
  );
};


 export default MovieDetails