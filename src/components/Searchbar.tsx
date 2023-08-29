import React, { useState } from 'react';



interface SearchBarProps{
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city.trim() !== '') {
            onSearch(city);
        }
    }
    return (
        <div>
            <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar; 

