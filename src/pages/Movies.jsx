import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMovieList } from 'components/SearchMovieList/SearchMovieList';
import { getMoviesBySearch } from 'fetch-services/Fetch-servises';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = value => {
    setMovieSearch(value);
  };

    
    
    
    useEffect(() => {
        if (!movieSearch) return;
        
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getMoviesBySearch(movieSearch);
        console.log(responce);
        setMovies(responce);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error, movieSearch]);

  return (
    <>
      <section>
        {loading && <div>Loading...</div>}
        <div>
          <SearchForm getMovieOnSearch={onSubmit} />
              </div>
              <SearchMovieList searchMovies={movies } />
      </section>
    </>
  );
};
