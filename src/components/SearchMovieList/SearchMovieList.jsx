import { Link } from 'react-router-dom';

export const SearchMovieList = ({ searchMovies, location }) => {
  return (
    <ul>
      {searchMovies?.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            <p> {item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
