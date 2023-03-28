import { Link } from "react-router-dom";
import { TrendingList, ListTitle, List, ListItem } from "./TrendingMovieList.styled";
import PropTypes from 'prop-types';


export const TrendingMovieList = ({ moviesInTrend }) => {
  const trendMovies = moviesInTrend.results;

  return (
    <TrendingList >
      <ListTitle>Tranding today</ListTitle>
       <List>
      {trendMovies?.map(item => (
        <ListItem key={item.id}>
          <Link to={`/movies/${item.id}`}>
             <p> {item.title}</p>
          </Link>
         
        </ListItem>
      ))}
    </List>
  
    </TrendingList >
    );
   
};


TrendingMovieList.propTypes = {
  searchMovies: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
