import axios from 'axios';
import { afternoonTimes, eveningTimes, morningTimes } from '../data';
import { convertTimeTo12HourFormat, getAllDatesInMonthForDay } from '../util';

export const fetchWeatherData = async (location, date) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  // Ensure to encode the location to handle spaces and special characters.
  const encodedLocation = encodeURIComponent(location);
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}/${date}?key=${API_KEY}`;

  try {
    console.log(`Fetching weather data for ${location} on date: ${date}`); // Confirm function call
    const response = await axios.get(url);
    console.log(`Weather data for ${location} on ${date}:`, response.data); // Log actual data
    return response.data; // Return the weather data
  } catch (error) {
    console.error(
      `Error fetching weather data for ${location} on date ${date}:`,
      error
    );
    return {}; // Return empty object to indicate failed request
  }
};

export const fetchAllWeatherData = async (location, dates) => {
  const weatherDataArray = [];

  for (const date of dates) {
    try {
      const data = await fetchWeatherData(location, date);
      weatherDataArray.push(data);
    } catch (error) {
      console.error('Failed to fetch data for date:', date, error);
      weatherDataArray.push(null); // Push null to maintain array structure
    }
  }

  console.log('All fetched weather data:', weatherDataArray);
  return weatherDataArray;
};

export const getRepeatedWeekDayData = (
  location,
  setLoading,
  selectedDay,
  selectedTime,
  setWeatherData
) => {
  if (location === '') {
    alert('Please select a location first');
  } else {
    setLoading(true);
    let dayOfWeek = selectedDay.split(' ').pop();
    const days = getAllDatesInMonthForDay(dayOfWeek);
    console.log('days', days);
    // Call the function with the dates array to fetch weather data for each date
    fetchAllWeatherData(location, days).then((weatherDataArray) => {
      console.log('weatherData', weatherDataArray);
      // localStorage.setItem('weatherData', JSON.stringify(weatherDataArray));
      let newArray = [];
      for (let i = 0; i < weatherDataArray.length; i++) {
        const element = weatherDataArray[i];
        console.log('element', element);
        newArray[i] = {
          datetime: element.days[0].datetime,
          temp: element.days[0].temp,
          humidity: element.days[0].humidity,
          description: element.days[0].description,
          icon: element.days[0].icon,
          data: element.days[0].hours.map((item) => {
            return {
              ...item,
              datetime: convertTimeTo12HourFormat(item.datetime),
            };
          }),
        };
      }
      setWeatherData(newArray);
      setLoading(false);
    });
  }
};

export const fetch15DaysWeatherData = async (
  location,
  setLoading,
  selectedTime,
  setWeatherData
) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;
  setLoading(true);
  try {
    const response = await axios.get(url);
    console.log(`15 Days:`, response.data.days);
    let newArray = [];
    for (let i = 0; i < response.data.days.length; i++) {
      const element = response.data.days[i];
      console.log('element', element);
      newArray[i] = {
        datetime: element.datetime,
        temp: element.temp,
        humidity: element.humidity,
        description: element.description,
        icon: element.icon,
        data: element.hours.map((item) => {
          return {
            ...item,
            datetime: convertTimeTo12HourFormat(item.datetime),
          };
        }),
      };
    }
    setWeatherData(newArray);
    setLoading(false);
  } catch (error) {
    console.error(`Error fetching weather 15 days data:`, error);
    return {}; // Return empty object to indicate failed request
  }
};
