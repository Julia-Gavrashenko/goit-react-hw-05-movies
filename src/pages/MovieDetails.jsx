import { getMovieDetails } from 'fetch-services/Fetch-servises';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getMovieDetails();
          console.log(responce);
          setMovieDetails(responce)
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
      };
      fetchData ()
  }, [error]);
    
    
 
};
