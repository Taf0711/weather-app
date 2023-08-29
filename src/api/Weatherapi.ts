import axios from 'axios';


const API_KEY = '1b212074246c4f67a6f10440230508';
const BASE_URL = 'http://api.weatherapi.com/v1';

interface WeatherApiResponse {
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
    };
}

export const fetchWeatherData =  async (city: string): Promise<WeatherApiResponse | null => {
    try {
        const response = await axios.get('${BASE_URL}/current.json?key=${API_KEY}&sq=${city}');
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

