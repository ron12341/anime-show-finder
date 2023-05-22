export const formatTime = (timeString: string) => {
  const timeInt = Number.parseInt(timeString);
  const hours = Math.floor(timeInt / 60);
  const minutes = timeInt % 60;

  let result = hours > 0 ? `${hours}h ` : '';
  return (result += `${minutes}m`);
};

export const formatDate = (dateString: string) => {
  if (!dateString) return '';

  const dateArr = dateString.split('-');
  const year = dateArr[0];
  const month = getMonth(Number.parseInt(dateArr[1]));
  const day = dateArr[2];

  return `${month} ${day}, ${year}`;
};

const getMonth = (month: number): string => {
  let monthString = '';

  switch (month) {
    case 1:
      monthString = 'Jan';
      break;
    case 2:
      monthString = 'Feb';
      break;
    case 3:
      monthString = 'Mar';
      break;
    case 4:
      monthString = 'Apr';
      break;
    case 5:
      monthString = 'May';
      break;
    case 6:
      monthString = 'Jun';
      break;
    case 7:
      monthString = 'Jul';
      break;
    case 8:
      monthString = 'Aug';
      break;
    case 9:
      monthString = 'Sep';
      break;
    case 10:
      monthString = 'Oct';
      break;
    case 11:
      monthString = 'Nov';
      break;
    case 12:
      monthString = 'Dec';
      break;
  }
  return monthString;
};

export const formatShowType = (title: string): string => {
  let result = '';
  if (title === 'TV') result = 'TV Series';
  else if (title === 'movie') result = 'Movie';
  else result = title.toUpperCase();

  return result;
};
