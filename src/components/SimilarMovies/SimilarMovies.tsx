import React, { FC } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { ISimilarMovie } from '../../types/movie';
import SimilarMovieCard from '../SimilarMovieCard/SimilarMovieCard';

interface ISimilarMoviesProps {
  items: ISimilarMovie[];
}

const SimilarMovies: FC<ISimilarMoviesProps> = ({ items }) => {
  const navigation = {
    prevEl: '.similar-movies__slider-btn--prev',
    nextEl: '.similar-movies__slider-btn--next',
  };

  return (
    <div className="similar-movies">
      <h2 className="similar-movies__title">Похожее кино</h2>
      <div className="similar-movies__slider">
        <button className="similar-movies__slider-btn similar-movies__slider-btn--prev">
          <svg>
            <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={navigation}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <SimilarMovieCard card={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="similar-movies__slider-btn similar-movies__slider-btn--next">
          <svg>
            <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimilarMovies;
