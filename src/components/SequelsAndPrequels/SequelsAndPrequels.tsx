import React, { FC } from 'react';
import { IMovieEntitySequels } from '../../types/movie';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import SequelsAndPrequelsCard from '../SequelsAndPrequelsCard/SequelsAndPrequelsCard';

interface ISequelsAndPrequelsProps {
  cards: IMovieEntitySequels[];
}

const SequelsAndPrequels: FC<ISequelsAndPrequelsProps> = ({ cards }) => {
  const navigation = {
    prevEl: '.sequels-section__slider-btn--prev',
    nextEl: '.sequels-section__slider-btn--next',
  };

  return (
    <div className="sequels-section">
      <h3 className="sequels-section__title">
        Сиквелы и приквелы
        <span className="sequels-section__num"> {cards.length}</span>
      </h3>

      <div className="sequels-section__slider">
        <Swiper
          modules={[Navigation]}
          watchOverflow={true}
          updateOnWindowResize={true}
          spaceBetween={15}
          slidesPerView={3}
          navigation={navigation}
        >
          <button className="sequels-section__slider-btn sequels-section__slider-btn--prev">
            <svg>
              <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
            </svg>
          </button>
          {cards.map((item) => (
            <SwiperSlide key={item.id}>
              <SequelsAndPrequelsCard card={item} />
            </SwiperSlide>
          ))}
          <button className="sequels-section__slider-btn sequels-section__slider-btn--next">
            <svg>
              <use xlinkHref="/images/icon-arrow-right.svg#arrow" />
            </svg>
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default SequelsAndPrequels;
