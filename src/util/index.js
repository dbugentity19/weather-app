export const getAllDatesInMonthForDay = (dayName) => {
  const daysOfWeek = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const dayOfWeek = daysOfWeek[dayName];
  if (dayOfWeek === undefined) {
    throw new Error('Invalid day name');
  }

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const dates = [];

  const firstDayOfMonth = new Date(year, month, 1);

  // Find the first specified day in the month
  let day = new Date(firstDayOfMonth);
  while (day.getDay() !== dayOfWeek) {
    day.setDate(day.getDate() + 1);
  }

  // Loop through the month, adding 7 days for every subsequent specified day
  while (day.getMonth() === month) {
    const yyyy = day.getFullYear();
    const mm = String(day.getMonth() + 1).padStart(2, '0');
    const dd = String(day.getDate()).padStart(2, '0');
    dates.push(`${yyyy}-${mm}-${dd}`);
    day.setDate(day.getDate() + 7);
  }

  return dates;
};

export const isNiceDay = (temp) => {
  if (temp >= 60 && temp <= 75) {
    return 'Nice day.';
  } else {
    return false;
  }
};

export const isChanceOfRain = (humidity) => {
  if (humidity >= 25 && humidity <= 75) {
    return 'Chance of rain.';
  } else {
    return false;
  }
};

export const convertTimeTo12HourFormat = (timeString) => {
  // First, convert the time string into a Date object
  const [hours24, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours24, 10), parseInt(minutes, 10), 0); // set seconds to 0

  // Then, retrieve 12-hour formatted time
  let hours12 = date.getHours() % 12;
  hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${hours12}:${
    date.getMinutes() < 10 ? '0' : ''
  }${date.getMinutes()} ${ampm}`;
};
