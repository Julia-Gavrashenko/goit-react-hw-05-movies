import { Link } from 'react-router-dom';
import { SearchList, List, ListItem } from './SearchMovieList.styled';

export const SearchMovieList = ({ searchMovies, location }) => {
  return (
    <SearchList>
      <List>
        {searchMovies?.map(({id, title}) => (
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
