import { Link } from 'react-router-dom';
import { SearchList, List, ListItem } from './SearchMovieList.styled';

export const SearchMovieList = ({ searchMovies, location }) => {
  return (
    <SearchList>
      <List>
        {searchMovies?.map(item => (
          <ListItem key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              <p> {item.title}</p>
            </Link>
          </ListItem>
        ))}
      </List>
    </SearchList>
  );
};
