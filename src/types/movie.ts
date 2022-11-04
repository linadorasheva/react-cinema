import { IFact } from './common';

interface IMovieEntityPoster {
  _id?: string;
  url: string;
  previewUrl: string;
}
interface IMovieEntityLogo {
  _id?: string;
  url: string | null;
}

interface IMovieEntityBackdrop {
  url: string;
  previewUrl: string;
}

interface IMovieEntityRating {
  _id?: string;
  tmdb?: number;
  kp?: number;
  imdb?: number;
  filmCritics?: number;
  russianFilmCritics?: number;
  await?: number;
}

interface IMovieEntityVotes {
  _id?: string;
  tmdb?: number;
  kp?: number;
  imdb?: number;
  filmCritics?: number;
  russianFilmCritics?: number;
  await?: number;
}

interface IMovieEntityTrailer {
  _id?: string;
  url: string;
  name: string;
  site: string;
  size?: number;
  type?: string;
}

interface IMovieEntityBudget {
  value: number;
  currency: string;
}

interface IFee {
  value: number;
  currency: string;
}

interface IMovieEntityFees {
  usa?: IFee;
  russia?: IFee;
  world?: IFee;
}

interface IMovieEntityDistributors {
  distributor: string;
  distributorRelease: string | null;
}

interface IMovieEntityPremiere {
  country?: string;
  world?: Date;
  russia?: Date;
  bluray?: Date;
  dvd?: Date;
  cinema?: Date;
}

interface IMovieEntityImages {
  postersCount?: number;
  backdropsCount?: number;
  framesCount?: number;
}

interface IMovieEntityProductionCompanies {
  name: string;
  url: string;
  previewUrl: string;
}

interface IMovieEntityLang {
  name: string;
  nameEn: string;
}

interface IMovieEntityPerson {
  id: number;
  name: string;
  enName: string;
  photo: string;
  description: string;
  enProfession: string;
}

interface IMovieEntityExternalId {
  _id?: string;
  tmdb?: number | null;
  imdb?: string | null;
}

interface IMovieEntityGenre {
  name: string;
}

interface IMovieEntityCountry {
  name: string;
}

interface IMovieEntityNames {
  _id?: string;
  name: string | null;
}
interface IEpisode {
  _id?: string;
  number: number;
  name: string | null;
  enName: string;
  date: Date;
  description: string | null;
}
export interface ISerialEntity {
  movieId: number;
  number: number;
  episodesCount: number;
  episodes: IEpisode[];
}

export interface IMoviePoster {
  _id?: string;
  previewUrl: string;
  url: string;
}
export interface IMovieRating {
  _id: string;
  await: number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
}

interface IMovieEntitySeasonsInfo {
  number: number;
  episodesCount: number;
}

interface IMovieEntityTechnology {
  has3D: boolean;
  hasImax: boolean;
}

interface IMovieEntitySequels {
  alternativeName: string;
  enName: string;
  id: number;
  poster: IMoviePoster;
  type: string;
}

export interface ISimilarMovie {
  alternativeName: string;
  enName: string;
  id: number;
  name: string;
  poster: IMoviePoster;
}

export interface IMovieEntity {
  externalId: IMovieEntityExternalId;
  ageRating?: number;
  alternativeName?: string | null;
  backdrop?: IMovieEntityBackdrop;
  budget?: IMovieEntityBudget;
  countries?: IMovieEntityCountry[];
  createDate?: Date;
  description?: string;
  distributors?: IMovieEntityDistributors;
  fees?: IMovieEntityFees;
  facts?: IFact[];
  genres?: IMovieEntityGenre[];
  id: number;
  enName?: string | null;
  images?: IMovieEntityImages;
  lists?: [];
  logo?: IMovieEntityLogo;
  movieLength?: number | null;
  name?: string;
  names?: IMovieEntityNames[];
  persons?: IMovieEntityPerson[];
  poster?: IMovieEntityPoster;
  premiere?: IMovieEntityPremiere;
  productionCompanies?: IMovieEntityProductionCompanies[];
  rating?: IMovieEntityRating;
  ratingMpaa?: string;
  seasonsInfo?: IMovieEntitySeasonsInfo[];
  sequelsAndPrequels?: IMovieEntitySequels[];
  shortDescription?: string | null;
  similarMovies?: IMovieEntity[];
  slogan?: string;
  spokenLanguages?: IMovieEntityLang[];
  status?: string;
  technology?: IMovieEntityTechnology;
  ticketsOnSale?: boolean;
  type?: string;
  typeNumber?: number;
  updateDates?: Date[];
  updatedAt?: Date;
  videos?: { trailers: IMovieEntityTrailer[] };
  votes?: IMovieEntityVotes;
  year?: number;
}

export interface IMovieListEntity extends Partial<IMovieEntity> {}
