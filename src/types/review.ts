export interface IReviewEntity {
  id: number;
  movieId: number;
  title: string;
  type: string;
  review: string;
  date: Date;
  author: string;
  userRating: number;
}
