import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import { ClockIcon } from '@heroicons/react/20/solid';

function App() {
  const [location, setLocation] = useState('');
  const [selectedDay, setSelectedDay] = useState('Every Friday');
  const [selectedTime, setSelectedTime] = useState('Afternoon');
  const weekDays = [
    'Every Sunday',
    'Every Monday',
    'Every Tusday',
    'Every Wednesday',
    'Every Thursday',
    'Every Friday',
    'Every Saturday',
  ];
  const times = ['Morning', 'Afternoon', 'Evening'];

  return (
    <div className="border-[15px] border-pink-300 min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="border-b-[3px] border-black pb-2 mt-4 max-w-[800px] mx-auto block sm:flex">
        {/* Input */}
        <div className="w-full sm:w-[40%]">
          <Input
            name={'location'}
            type={'text'}
            value={location}
            placeholder={'Dolors Park, SF'}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex ml-3 sm:justify-center w-full sm:w-[60%]">
          <div className="flex items-center">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <Dropdown
              name={'selectedDay'}
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              options={weekDays}
            />
          </div>
          <Dropdown
            name={'selectedTime'}
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            options={times}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
