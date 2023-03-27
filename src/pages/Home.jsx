import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'fetch-services/Fetch-servises';
import { TrendingMovieList } from 'components/TrendingMovieList/TrendingMovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getTrendingMovies();
        console.log(responce);
        setTrendingMovies(responce);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error]);

  return (
    <main>
      <section>
        {loading && <div>Loading...</div>}
        <div>
          <TrendingMovieList moviesInTrend={trendingMovies} />
        </div>
      </section>
    </main>
  );
};

export default Home;
