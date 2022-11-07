import React, { FC } from 'react';

interface FooterProps {
  className: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className} page-footer`}>
      <div className="container">
        <div className="page-footer__content">
          <p className="page-footer__city">С.-Петербург</p>
          <p>2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
