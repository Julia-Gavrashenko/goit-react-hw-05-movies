import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieBox,
  Card,
  CardInfo,
  CardImg,
  InfoTitle,
  InfoTitle2,
  Info,
  GenreList,
  GenreItem,
  AddInfo,
  InfoLinks,
  LinkItem,
  InfoSection
} from './MovieCard.styled';

const MovieCard = ({
  movie: { poster_path, title, vote_average, overview, genres, id },
}) => {
  return (
    <MovieBox>
      <Card>
        <div>
          <CardImg
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
            }
            alt={title}
          />
        </div>

        <CardInfo>
          <InfoTitle>{title}</InfoTitle>
          <Info>User Score: {Math.round(vote_average * 10)}%</Info>
          <InfoTitle2>Overview</InfoTitle2>
          <Info>{overview}</Info>
          <InfoTitle2>Genres</InfoTitle2>
          <GenreList>
            {genres?.map(({ id, name }) => (
              <GenreItem key={id}>{name}</GenreItem>
            ))}
          </GenreList>
        </CardInfo>
      </Card>

      <InfoSection>
        <AddInfo>Additional Information:</AddInfo>

        <InfoLinks>
          <LinkItem>
            <Link to={`cast`}>
              <p>Cast</p>
            </Link>
          </LinkItem>

          <LinkItem>
            <Link to={`reviews`}>
              <p>Reviews</p>
            </Link>
          </LinkItem>
        </InfoLinks>
      </InfoSection>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieBox>
  );
};

export default MovieCard;



MovieCard.propTypes = {
  movie: PropTypes.any.isRequired,
};

