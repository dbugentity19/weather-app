import React from 'react';
import Input from './Input';
import Dropdown from './Dropdown';
import { ClockIcon } from '@heroicons/react/20/solid';
import { fetch15DaysWeatherData, getRepeatedWeekDayData } from '../api';
import { times, weekDays } from '../data';

const ActionsNav = ({
  location,
  setLocation,
  selectedDay,
  setSelectedDay,
  selectedTime,
  setSelectedTime,
  setLoading,
  setWeatherData,
}) => {
  return (
    <>
      <div className="border-b-[3px] border-black pb-2 mt-4 mb-4 max-w-[800px] mx-auto block sm:flex">
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
          <button
            onClick={() => {
              if (selectedDay === 'First 15 Days') {
                fetch15DaysWeatherData(
                  location,
                  setLoading,
                  selectedTime,
                  setWeatherData
                );
              } else {
                getRepeatedWeekDayData(
                  location,
                  setLoading,
                  selectedDay,
                  selectedTime,
                  setWeatherData
                );
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ActionsNav;
