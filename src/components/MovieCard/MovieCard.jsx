import { Link } from 'react-router-dom';

export const MovieCard = ({
  movie: { poster_path, title,  vote_average, overview, genres, id },
}) => {
  return (
    <section>
      <div>
        <img src={poster_path} alt={title} width={250} />
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
            <Link to={`/movies/${id}/cast`}>
              <p>Cast</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
