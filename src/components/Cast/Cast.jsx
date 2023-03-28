import { getMovieCast } from 'fetch-services/Fetch-servises';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastImage, Actor, Character, NoCast} from './Cast.styled';

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
          <CastList>
            {movieCast.map(({ id, name, profile_path, character }) => {
              return (
                <li key={id}>

                 
 <CastImage
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                    }
                    alt={name}
                    
                  />
                 
                 
                  <Actor>{name}</Actor>
                  <Character>
                    Character: <span>{character}</span>
                  </Character>
                </li>
              );
            })}
          </CastList>
        ) : (
          <NoCast>We don't have any information about the cast of this movie</NoCast>
        )}
      </section>
    </>
  );
};

export default Cast;
