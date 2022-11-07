import React from 'react';
import { useContextForOutlet } from '../../FilmPage';

const FilmFacts = () => {
  const { facts } = useContextForOutlet();
  return (
    <div className="film-facts">
      <h2 className="film-facts__title">Знаете ли вы, что…</h2>
      <ul className="film-facts__list">
        {facts?.map((fact, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: fact.value }}
            className="film-facts__item"
          />
        ))}
      </ul>
    </div>
  );
};

export default FilmFacts;
