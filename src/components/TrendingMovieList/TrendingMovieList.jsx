export const TrendingMovieList = ({ moviesInTrend }) => {
  const movies = moviesInTrend.results;

    return (
        <ul>
            {movies?.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    )
  
};
