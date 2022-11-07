import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieImagesQuery } from '../../../../services/MovieService';
import { IImageEntity } from '../../../../types/image';

const FilmImages = () => {
  const params = useParams();

  const { data: images, isFetching: imagesFetching } = useGetMovieImagesQuery({
    id: params.id,
    limit: 100,
  });

  console.log(images);

  return (
    <div className="film-images">
      <h2 className="film-images__title">Изображения</h2>
      <div className="film-images__content">
        {images?.docs.slice(35).map((img: IImageEntity) => (
          <div key={img.url} className="film-images__wrapper">
            <img
              src={img.url}
              alt=""
              loading="lazy"
              className="film-images__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmImages;
