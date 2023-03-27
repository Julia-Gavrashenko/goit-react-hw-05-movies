import { getMovieCast } from 'fetch-services/Fetch-servises';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responce = await getMovieCast(movieId);
        console.log(responce);
        setMovieCast(responce);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [error, movieId]);

  return (
    <>
      <section>
        {loading && <div>Loading...</div>}
        {movieCast.length !== 0 ? (
          <ul>
            {movieCast.map(({ id, name, profile_path, character }) => {
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                    }
                    alt={name}
                    width={200}
                  />
                  <p>{name}</p>
                  <p>
                    Character: <span>{character}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any information about the cast of this movie</p>
        )}
      </section>
    </>
  );
};

export default Cast;
