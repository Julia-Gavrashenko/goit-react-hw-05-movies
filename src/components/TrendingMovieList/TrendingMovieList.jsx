import { Link } from "react-router-dom";


export const TrendingMovieList = ({ moviesInTrend }) => {
  const trendMovies = moviesInTrend.results;

  return (
    <ul>
      {trendMovies?.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>
             <p> {item.title}</p>
          </Link>
         
        </li>
      ))}
    </ul>
  );
};
