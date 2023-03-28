import { Link } from 'react-router-dom';
import { SearchList, List, ListItem } from './SearchMovieList.styled';
import PropTypes from 'prop-types';

export const SearchMovieList = ({ searchMovies, location }) => {
  if (searchMovies === []) {
    return;
  }

  return (
    <SearchList>
      <List>
        {searchMovies?.map(({ id, title }) => (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <p> {title}</p>
            </Link>
          </ListItem>
        ))}
      </List>
    </SearchList>
  );
};

SearchMovieList.propTypes = {
  searchMovies: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
