import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import CurrentWeather from './components/CurrentWeather';
import { fetchWeatherData } from './api/Weatherapi';
import { WeatherData } from './components/CurrentWeather';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>()
  
  const handleSearch = async (city: string) => {
    const data = (await fetchWeatherData(city));
    if (data) {
      setWeatherData({
        temperature: data.current.temp_c,
        description: data.current.condition.text, 
      });
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <CurrentWeather
          data={weatherData}
        />
      )}
    </div>
  );
};

export default App;
