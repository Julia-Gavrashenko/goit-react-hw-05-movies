

export const TrendingMovieList = ({ moviesInTrend }) => {
  const movies = moviesInTrend.results;

  return (
    <ul>
      {movies?.map(item => (
        <li key={item.id}>
          <p> {item.title}</p>
        </li>
      ))}
    </ul>
  );
};
