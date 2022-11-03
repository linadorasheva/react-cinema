import React, { FC } from 'react';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {
  className: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
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
