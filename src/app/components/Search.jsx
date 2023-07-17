"use client"
import React, { useState, useEffect } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setFilteredShows(data); // Initialize filteredShows with all shows
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the shows based on the search query
    const filteredResults = shows.filter((show) =>
      show.show.name.toLowerCase().includes(query)
    );

    // If there are no matches, display "Oops! Not available"
    setFilteredShows(filteredResults.length > 0 ? filteredResults : [{ show: { id: 0, name: "Oops! Not available" } }]);
  };

  return (
    <div className='text-xl'>
    
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder=" Search shows..."
      className='w-full border-2 border-red border-double rounded-lg text-black'/>
      <ul>
        {filteredShows.map((show) => (
          <li key={show.show.id}>
            {searchQuery && <h3>{show.show.name}</h3>}
          </li>
        ))}
      </ul>

    </div>
  );
}

