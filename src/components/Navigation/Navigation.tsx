import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`navigation ${isMenuOpen ? 'navigation--open' : ''}`}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="navigation__button"
      >
        <span className="navigation__button-icon navigation__button-icon--burger">
          <svg>
            <use xlinkHref="/images/icon-burger.svg#burger" />
          </svg>
        </span>
        <span className="navigation__button-icon navigation__button-icon--close">
          <svg>
            <use xlinkHref="/images/icon-cross.svg#cross" />
          </svg>
        </span>
      </button>
      <a href="/" className="navigation__logo">
        <svg>
          <use xlinkHref="/images/logo.svg#logo" />
        </svg>
      </a>
      <ul className="navigation__list navigation-list">
        <li className="navigation-list__item">
          <Link to="/" className="navigation-list__link">
            Главная
          </Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/films" className="navigation-list__link">
            Фильмы
          </Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/serials" className="navigation-list__link">
            Сериалы
          </Link>
        </li>
        <li className="navigation-list__item">
          <Link to="/cartoons" className="navigation-list__link">
            Мультфильмы
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
