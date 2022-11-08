import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMovieEntitySequels } from '../../types/movie';

interface ISequelsAndPrequelsCardProps {
  card: IMovieEntitySequels;
}

const SequelsAndPrequelsCard: FC<ISequelsAndPrequelsCardProps> = ({ card }) => {
  return (
    <div className="sequels-card">
      <Link
        to={`/films/${card.id}`}
        className="sequels-card__link sequels-card__link--img"
      >
        <div className="sequels-card__wrapper-img">
          <img
            src={`${card.poster?.previewUrl}` || card.poster?.url || ''}
            alt={card.name || card.enName || card.alternativeName}
            className="sequels-card__img"
          />
        </div>
      </Link>

      <div className="sequels-card__description">
        <Link to={`/films/${card.id}`} className="sequels-card__link">
          <h3 className="sequels-card__title">
            {card.name || card.enName || card.alternativeName}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default SequelsAndPrequelsCard;
