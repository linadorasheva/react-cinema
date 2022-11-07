import React, { FC } from 'react';
import { useContextForOutlet } from '../../FilmPage';

const FilmOverview: FC = () => {
  const { content } = useContextForOutlet();

  return <p className="overview-text">{content}</p>;
};

export default FilmOverview;
