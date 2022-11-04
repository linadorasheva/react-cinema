import React, { FC } from 'react';
import Navigation from '../Navigation/Navigation';

interface IHeaderProps {
  className: string;
}

const Header: FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={`${className} header`}>
      <div className="container">
        <div className="header__wrapper">
          <Navigation />
          <button type="button" className="header__button">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
