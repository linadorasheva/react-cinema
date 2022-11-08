import React, { FC, useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import SequelsAndPrequels from '../../components/SequelsAndPrequels/SequelsAndPrequels';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import TabBar from '../../components/TabBar/TabBar';
import { useGetFilmByIdQuery } from '../../services/MovieService';
import {
  IFact,
  ITabBar,
  RoutesNameEnum,
  TabsNameEnum,
} from '../../types/common';
import {
  IMovieEntity,
  IMovieEntitySequels,
  ISimilarMovie,
} from '../../types/movie';
import { convertNumbers, formatDate } from '../../utils/common';
import { getMovieDuration } from '../../utils/movieUtils';

interface IInfoItem {
  name: string;
  value: string | undefined;
  condition: boolean;
  extraClass?: string;
}

const FilmPage: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { data: film, isFetching: isFilmFetching } = useGetFilmByIdQuery(
    params.id
  );

  const getWorldFees = (): number => {
    if (film?.fees?.world?.value && film?.fees?.usa?.value) {
      return film?.fees?.world?.value - film?.fees?.usa?.value;
    }

    return 0;
  };

  const infoItems: IInfoItem[] = [
    {
      name: 'Год производства',
      value: `${film?.year}`,
      condition: Boolean(film?.year),
    },
    {
      name: 'Страна',
      value: film?.countries?.map((item) => item.name).join(', '),
      condition: Boolean(film?.countries?.length),
    },
    {
      name: 'Жанр',
      value: film?.genres?.map((item) => item.name).join(', '),
      condition: Boolean(film?.genres?.length),
    },
    {
      name: 'Слоган',
      value: `«${film?.slogan}»`,
      condition: Boolean(film?.slogan),
      extraClass: 'movie-info__data movie-info__data--slogan',
    },
    {
      name: 'Бюджет',
      value: `${film?.budget?.currency}${convertNumbers(film?.budget?.value)}`,
      condition: Boolean(film?.budget?.value),
    },
    {
      name: 'Сборы в США',
      value: `${film?.fees?.usa?.currency}${convertNumbers(
        film?.fees?.usa?.value
      )}`,
      condition: Boolean(film?.fees?.usa?.value),
    },
    {
      name: 'Сборы в мире',
      value: `+ ${film?.fees?.world?.currency}${convertNumbers(
        getWorldFees()
      )} = ${film?.fees?.world?.currency}${convertNumbers(
        film?.fees?.world?.value
      )}`,
      condition: Boolean(film?.fees?.world?.value),
    },
    {
      name: 'Премьера в Росcии',
      value: formatDate(film?.premiere?.russia),
      condition: Boolean(formatDate(film?.premiere?.russia)),
    },
    {
      name: 'Премьера в мире',
      value: formatDate(film?.premiere?.world),
      condition: Boolean(formatDate(film?.premiere?.world)),
    },
    {
      name: 'Возраст',
      value: `${film?.ageRating}+`,
      condition: Boolean(film?.ageRating),
      extraClass: 'movie-info__data movie-info__data--age',
    },
    {
      name: 'Время',
      value: `${film?.movieLength} мин / ${getMovieDuration(
        film?.movieLength
      )}`,
      condition: Boolean(film?.movieLength),
    },
  ];

  // todo заменить
  const [isFavourite, setIsFavourite] = useState(false);

  const getFavouriteClass = (): string => {
    return isFavourite
      ? 'section-main__favourite-btn section-main__favourite-btn--active'
      : 'section-main__favourite-btn';
  };

  const favouriteClickHandler = (): void => {
    setIsFavourite(!isFavourite);
  };
  // todo end

  const tabs: ITabBar[] = [
    {
      id: 0,
      name: TabsNameEnum.OVERVIEW,
      routeName: '',
    },
    {
      id: 1,
      name: TabsNameEnum.FACTS,
      routeName: RoutesNameEnum.FILM_FACTS,
    },
    {
      id: 2,
      name: TabsNameEnum.IMAGES,
      routeName: RoutesNameEnum.FILM_IMAGES,
    },
  ];

  const findActiveTab = (tabId: number): void => {
    const a = tabs.find((tab) => tab.id === tabId);
    navigate(a?.routeName ?? '');
  };

  const tabClickHandler = (tabId: number): void => {
    setActiveTab(tabId);
    findActiveTab(tabId);
  };

  useEffect(() => {
    const route = location.pathname.split('/')[3];
    if (route) {
      const activeTab = tabs.find((tab) => tab.routeName === route);
      activeTab && setActiveTab(activeTab.id);
    }
  }, []);

  const getSimilarMovies = (): ISimilarMovie[] => {
    return film?.similarMovies ?? ([] as ISimilarMovie[]);
  };

  const getSequelsAndPrequels = (): IMovieEntitySequels[] => {
    return film?.sequelsAndPrequels ?? ([] as IMovieEntitySequels[]);
  };

  const currentCards: IMovieEntitySequels[] | undefined =
    film?.sequelsAndPrequels?.filter(
      (card) => card.name || card.alternativeName || card.enName
    );

  return (
    <div className="film-page page">
      <div className="container film-page__container">
        {isFilmFetching && !film?.poster?.url ? (
          <h1>Loading ...</h1>
        ) : (
          <>
            <div className="film-page__content">
              <section className="film-page__section section-left">
                {film?.poster?.previewUrl ? (
                  <div className="section-left__poster">
                    <img
                      src={film?.poster?.previewUrl}
                      alt={film?.name}
                      className="section-left__img"
                    />
                  </div>
                ) : (
                  <div className="section-left__poster section-left__poster--empty">
                    <p className="section-left__poster-text">
                      К сожалению, постер отсутствует
                    </p>
                  </div>
                )}
              </section>
              <section className="film-page__section section-main">
                <div className="section-main__head">
                  <h1 className="section-main__title">{film?.name}</h1>
                  <p className="section-main__subtitle">
                    {film?.enName || film?.alternativeName}
                  </p>
                  <p className="section-main__short-description">
                    {film?.shortDescription}
                  </p>
                </div>
                <div className="section-main__buttons">
                  <button type="button" className="section-main__watch-btn">
                    <span className="section-main__watch-btn-icon">
                      <svg>
                        <use xlinkHref="/images/icon-play.svg#play" />
                      </svg>
                    </span>
                    <span className="section-main__watch-btn-name">
                      Смотреть
                    </span>
                  </button>
                  <button
                    onClick={() => favouriteClickHandler()}
                    className={getFavouriteClass()}
                    type="button"
                  >
                    <span className="section-main__favourite-btn-icon">
                      <svg>
                        <use xlinkHref="/images/icon-favourites-fill.svg#favourites" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="section-main__info movie-info">
                  <h3 className="movie-info__head">О фильме</h3>
                  <div className="movie-info__wrapper">
                    <div className="movie-info__main">
                      <ul className="movie-info__list">
                        {infoItems.map((item, index) => (
                          <li key={index} className="movie-info__item">
                            <span className="movie-info__name">
                              {item.name}
                            </span>

                            {item.extraClass ? (
                              <span className={item.extraClass}>
                                {item.condition ? item.value : '—'}
                              </span>
                            ) : (
                              <span className="movie-info__data">
                                {item.condition ? item.value : '—'}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                      {currentCards && currentCards.length ? (
                        <div className="movie-info__sequels">
                          <SequelsAndPrequels cards={getSequelsAndPrequels()} />
                        </div>
                      ) : null}
                    </div>

                    <div className="movie-info__actors">
                      <h4 className="movie-info__title">В ролях:</h4>
                      {film?.persons?.length ? (
                        <>
                          <ul className="movie-info__actors-list">
                            {film?.persons?.slice(0, 10).map((item, index) => (
                              <li
                                key={item.id || index}
                                className="movie-info__actors-item"
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                          <p className="movie-info__actors-number">
                            Актеров: {film?.persons?.length}
                          </p>
                        </>
                      ) : (
                        <p className="movie-info__actors-empty">
                          К сожалению информация отсутствует
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="film-page__tabs">
              <TabBar
                tabs={tabs}
                activeId={activeTab}
                onClick={tabClickHandler}
              />
              <div className="film-page__tabs-content">
                <Outlet
                  context={{
                    content: film?.description,
                    facts: film?.facts,
                  }}
                />
              </div>
            </div>
            {film?.similarMovies?.length ? (
              <div className="film-page__similar">
                <SimilarMovies items={getSimilarMovies()} />
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

type ContextType = {
  content: string | null;
  facts: IFact[] | null;
};

export const useContextForOutlet = () => {
  return useOutletContext<ContextType>();
};

export default FilmPage;
