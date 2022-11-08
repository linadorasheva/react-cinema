import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISimilarMovie } from '../../types/movie';

interface ISimilarMovieCardProps {
  card: ISimilarMovie;
}

const SimilarMovieCard: FC<ISimilarMovieCardProps> = ({ card }) => {
  return (
    <div className="similar-movie-card">
      <Link
        to={`/films/${card.id}`}
        className="similar-movie-card__link similar-movie-card__link--img"
      >
        <div className="similar-movie-card__wrapper-img">
          <img
            src={`${card.poster?.previewUrl}` || card.poster?.url || ''}
            alt={card.name}
            className="similar-movie-card__img"
          />
        </div>
      </Link>

      <div className="similar-movie-card__description">
        <Link to={`/films/${card.id}`} className="similar-movie-card__link">
          <h3 className="similar-movie-card__title">{card.name || 'name'}</h3>
        </Link>
      </div>
    </div>
  );
};

export default SimilarMovieCard;
