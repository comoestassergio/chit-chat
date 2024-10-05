export const MONTH_MAP = {
  "0": "января",
  "1": "февраля",
  "2": "мартя",
  "3": "апреля",
  "4": "мая",
  "5": "июня",
  "6": "июля",
  "7": "августа",
  "8": "сентября",
  "9": "октября",
  "10": "ноября",
  "11": "декабря",
};

export function getDay(date: Date) {
  const localeDate = date.toLocaleDateString("en");
  const day = localeDate.split("/")[1];
  return day.length > 1 ? day : `0${day}`;
}

export function getMonth(date: Date) {
  const month = date.getMonth().toString();
  const monthString = MONTH_MAP[month];
  return monthString;
}

export function getTime(date: Date) {
  const localeTime = date.toLocaleTimeString("ru");
  const splitTime = localeTime.split(":");
  const time = `${splitTime[0]}:${splitTime[1]}`;
  return time;
}
