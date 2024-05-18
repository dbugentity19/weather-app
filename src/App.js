import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WeatherSlider from './components/WeatherSlider';
import ActionsNav from './components/ActionsNav';
import { fetch15DaysWeatherData } from './api';

function App() {
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState('');
  const [selectedDay, setSelectedDay] = useState('First 15 Days');
  const [selectedTime, setSelectedTime] = useState('Morning');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (location === '') {
      setWeatherData([]);
    }
  }, [location]);

  return (
    <div className="border-[15px] border-pink-300 min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* ActionsNav */}
      <ActionsNav
        location={location}
        setLocation={setLocation}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        setLoading={setLoading}
        setWeatherData={setWeatherData}
      />
      {/* WeatherSlider */}
      {location === '' || weatherData.length === 0 ? (
        <h1 className="text-3xl text-center text-gray-500 mt-[150px]">
          Enter the Location and Day to get the Weather
        </h1>
      ) : (
        <WeatherSlider loading={loading} weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
