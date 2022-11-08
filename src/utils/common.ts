const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

// дата в формате d month year
export const formatDate = (value: string | undefined): string => {
  if (!value) {
    return '';
  }

  const date = new Date(value);
  const year = date.getFullYear();
  const month: number = date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${day} ${months[month]} ${year}`;
};

export function convertNumbers(price: number | undefined) {
  return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

export function getCurrentYear() {
  return new Date().getFullYear();
}
