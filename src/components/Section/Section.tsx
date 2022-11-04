import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ISectionProps {
  children: React.ReactNode;
  title?: string;
  linkName?: string;
  url?: string;
}

const Section: FC<ISectionProps> = ({ children, title, linkName, url }) => {
  return (
    <div className="section">
      {title && (
        <header className="section__header">
          <h2 className="section__title">{title}</h2>

          {linkName && url && (
            <Link to={url} className="section__link">
              <span>{linkName}</span>
              <span className="section__link-icon">
                <svg>
                  <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
                </svg>
              </span>
            </Link>
          )}
        </header>
      )}

      <div className="section__content">{children}</div>
    </div>
  );
};

export default Section;
