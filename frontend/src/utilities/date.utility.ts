export const getParseDate = (date: Date) => {
  return `${new Date(date).getDate()}/${new Date(date).getDay()}/${new Date(
    date
  ).getFullYear()} a las ${new Date(date).getHours()}:${new Date(
    date
  ).getMinutes()}`;
};
