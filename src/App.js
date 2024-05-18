import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WeatherSlider from './components/WeatherSlider';
import ActionsNav from './components/ActionsNav';
import { fetch15DaysWeatherData } from './api';

function App() {
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState('New York, NY');
  const [selectedDay, setSelectedDay] = useState('First 15 Days');
  const [selectedTime, setSelectedTime] = useState('Morning');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch15DaysWeatherData(location, setLoading, selectedTime, setWeatherData);
  }, []);

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
      <WeatherSlider loading={loading} weatherData={weatherData} />
    </div>
  );
}

export default App;
