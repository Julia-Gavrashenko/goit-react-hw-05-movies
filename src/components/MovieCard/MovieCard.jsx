import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

 const MovieCard = ({
  movie: { poster_path, title, vote_average, overview, genres, id },
}) => {
  return (
    <section>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
          }
          alt={title}
          width={250}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Additional Information</h4>

        <ul>
          <li>
            <Link to={`cast`}>
              <p>Cast</p>
            </Link>
          </li>

          <li>
            <Link to={`reviews`}>
              <p>Reviews</p>
            </Link>
          </li>
        </ul>
      </div>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};


export default MovieCard