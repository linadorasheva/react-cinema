export const getMovieDuration = (
  duration: number | undefined | null
): string => {
  if (!duration) {
    return '';
  }
  return duration / 60 < 10
    ? `0${(duration / 60).toFixed()}:${duration % 60}`
    : `${duration / 60}:${duration % 60}`;
};
