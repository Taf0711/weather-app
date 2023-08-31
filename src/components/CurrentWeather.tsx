import React from 'react';

export interface WeatherData {
    temperature: number;
    description: string;
}

interface CurrentWeatherProps { 
    data: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
    return (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {data.temperature}°C</p>
            <p>Description: {data.description}</p>
        </div>
    );
};

export default CurrentWeather;


