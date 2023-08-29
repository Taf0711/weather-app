import React, { useState } from 'react';
import SearchBar from './components/Searchbar';
import CurrentWeather from './components/CurrentWeather';
import { fetchWeatherData } from './api/Weatherapi';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  
  const handleSearch = async (city: string) => {
    const data = await fetchWeatherData(city);
    if (data) {
      setWeatherData(data);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <CurrentWeather
          data={{
            temperature: weatherData.current.temp_c,
            description: weatherData.current.condition.text,
          }}
        />
      )}
    </div>
  );
};

export default App;
