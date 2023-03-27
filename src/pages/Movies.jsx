import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMovieList } from 'components/SearchMovieList/SearchMovieList';
import { getMoviesBySearch } from 'fetch-services/Fetch-servises';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLocation, useSearchParams } from 'react-router-dom';

 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getMoviesBySearch(movieName, page);
        console.log(responce);
        setMovies(prevState => [...prevState, ...responce.results]);
        setTotalResults(responce.total_results);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieName, page, error]);

  const updateQueryString = name => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);

    setMovies([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <section>
        {loading && <div>Loading...</div>}
        <div>
          <SearchForm value={movieName} onSubmit={updateQueryString} />
        </div>
        <SearchMovieList searchMovies={movies} location={location} />

        {movies.length > 0 && movies.length < totalResults && (
          <button onClick={onLoadMore}>More Results</button>
        )}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </section>
    </>
  );
};

export default Movies