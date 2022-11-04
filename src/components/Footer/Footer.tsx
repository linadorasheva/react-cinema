import React, { FC } from 'react';

interface FooterProps {
  className: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return <footer className={className}>2022</footer>;
};

export default Footer;
