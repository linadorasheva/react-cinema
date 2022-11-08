import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMovieEntitySequels } from '../../types/movie';

interface ISequelsAndPrequelsCardProps {
  card: IMovieEntitySequels;
}

const SequelsAndPrequelsCard: FC<ISequelsAndPrequelsCardProps> = ({ card }) => {
  return (
    <div className="sequels-card">
      <Link to="/" className="sequels-card__link sequels-card__link--img">
        <div className="sequels-card__wrapper-img">
          <img
            src={`${card.poster?.previewUrl}` || card.poster?.url || ''}
            alt={card.name}
            className="sequels-card__img"
          />
        </div>
      </Link>

      <div className="sequels-card__description">
        <Link to="/" className="sequels-card__link">
          <h3 className="sequels-card__title">{card.name || 'name'}</h3>
        </Link>
      </div>
    </div>
  );
};

export default SequelsAndPrequelsCard;
