export interface IImageEntity {
  movieId: number;
  type: string;
  language: string | null;
  url: string;
  previewUrl: string;
  height: number | null;
  width: number | null;
}
