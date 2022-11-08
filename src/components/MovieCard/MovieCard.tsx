import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMovieEntity } from '../../types/movie';

interface IMovieCardProps {
  card: IMovieEntity;
}

const MovieCard: FC<IMovieCardProps> = ({ card }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const formatRating = (): string => {
    if (!card.rating?.kp) {
      return '0';
    }

    return Number.isInteger(card.rating.kp)
      ? `${card.rating.kp}.0`
      : card.rating.kp?.toFixed(1);
  };

  const getYear = (): string => {
    return card.year ? `${card.year}, ` : '';
  };

  const favouriteClickHandler = (): void => {
    setIsFavourite(!isFavourite);
  };

  const getRatingClass = (): string => {
    if (card.rating?.kp) {
      if (card.rating.kp >= 7) {
        return 'movie-card__rating movie-card__rating--green';
      } else if (card.rating.kp >= 5 && card.rating.kp < 7) {
        return 'movie-card__rating movie-card__rating--grey';
      }
    }

    return 'movie-card__rating';
  };

  const getFavouriteClass = (): string => {
    return isFavourite
      ? 'movie-card__favourites movie-card__favourites--active'
      : 'movie-card__favourites';
  };

  return (
    <div className="movie-card">
      <Link
        to={`films/${card.id}`}
        className="movie-card__link movie-card__link--img"
      >
        <div className="movie-card__wrapper-img">
          <img
            src={`${card.poster?.previewUrl}` || card.poster?.url || ''}
            alt={card.name}
            className="movie-card__img"
          />
        </div>
      </Link>

      <header className="movie-card__header">
        <div className={getRatingClass()}>
          <span>{formatRating()}</span>
        </div>
        <button
          onClick={() => favouriteClickHandler()}
          className={getFavouriteClass()}
        >
          <svg>
            <use xlinkHref="/images/icon-favourites-fill.svg#favourites" />
          </svg>
        </button>
      </header>
      <div className="movie-card__description">
        <Link to={`films/${card.id}`} className="movie-card__link">
          <h3 className="movie-card__title">{card.name || 'name'}</h3>
        </Link>
        <p className="movie-card__info">
          <span className="movie-card__year">{getYear()}</span>
          <span className="movie-card__type">{card.type || ''}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
