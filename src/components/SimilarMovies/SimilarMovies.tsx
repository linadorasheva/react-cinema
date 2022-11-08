import React, { FC, useRef } from 'react';
import SwiperClass, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { ISimilarMovie } from '../../types/movie';
import SimilarMovieCard from '../SimilarMovieCard/SimilarMovieCard';

interface ISimilarMoviesProps {
  items: ISimilarMovie[];
}

const SimilarMovies: FC<ISimilarMoviesProps> = ({ items }) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const navigation = {
    prevEl: navigationPrevRef.current,
    nextEl: navigationNextRef.current,
  };

  const onSwiper = (swiper: SwiperClass) => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      swiper.params.navigation.nextEl = navigationNextRef.current;

      // Re-init navigation
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    });
  };

  return (
    <div className="similar-movies">
      <h2 className="similar-movies__title">Похожее кино</h2>
      <div className="similar-movies__slider">
        <button
          ref={navigationPrevRef}
          className="similar-movies__slider-btn similar-movies__slider-btn--prev"
        >
          <svg>
            <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={onSwiper}
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

        <button
          ref={navigationNextRef}
          className="similar-movies__slider-btn similar-movies__slider-btn--next"
        >
          <svg>
            <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimilarMovies;
