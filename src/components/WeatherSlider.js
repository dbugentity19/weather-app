import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import WeatherChart from './WeatherChart';
import { isChanceOfRain, isNiceDay } from '../util';
import moment from 'moment';

const WeatherSlider = ({ loading, weatherData }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showIcon = (icon) => {
    if (icon === 'partly-cloudy-day') {
      return (
        <img
          className="w-[80px]"
          src="/partiallycloudy.png"
          alt="partiallycloudy.png"
        />
      );
    } else if (icon === 'rain') {
      return <img className="w-[80px]" src="/rain.png" alt="rain.png" />;
    } else if (icon === 'cloudy') {
      return <img className="w-[80px]" src="/cloudy.png" alt="cloudy.png" />;
    } else if (icon === 'sunny') {
      return <img className="w-[80px]" src="/sunny.png" alt="sunny.png" />;
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center pt-[100px]">
          <Circles
            height="80"
            width="80"
            color="#FF385C"
            ariaLabel="circles-loading"
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Swiper
          navigation={true}
          freeMode={true}
          slidesPerView={width < 900 ? 1 : 2}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {weatherData.map((wd, i) => (
            <SwiperSlide key={`wd_${i}`}>
              {wd && (
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl">
                    {moment(wd.datetime).format('MMMM Do YYYY')}
                  </h1>
                  <div className="flex items-center gap-3">
                    {showIcon(wd.icon)}
                    {isNiceDay(wd.temp) ? (
                      <>
                        {isNiceDay(wd.temp)}
                        <br />
                      </>
                    ) : null}
                    {isChanceOfRain(wd.humidity) ? (
                      <>
                        {isChanceOfRain(wd.humidity)}
                        <br />
                      </>
                    ) : null}
                    {wd.description}
                  </div>
                </div>
              )}
              <div className="w-full" style={{ height: 'calc(100vh - 300px)' }}>
                {weatherData[0] && <WeatherChart data={weatherData[0]?.data} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default WeatherSlider;