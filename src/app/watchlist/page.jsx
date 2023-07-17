"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

export default function Watch() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  const toggleWishlist = (show) => {
    const showInWishlist = wishlist.some((item) => item.id === show.id);

    if (showInWishlist) {
      // Show is already in the wishlist, remove it
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== show.id));
    } else {
      // Show is not in the wishlist, add it
      setWishlist((prevWishlist) => [...prevWishlist, show]);
    }
  };

  useEffect(() => {
    // Save wishlist to local storage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const wishlistShows = wishlist.map((item) => (
    <li key={item.id}>
      <h3>{item.name}</h3>
      <button onClick={() => toggleWishlist(item)}>
        <AiOutlineDelete /> Remove
      </button>
    </li>
  ));

  return (
    <div>
      <h2 className='text-center'>Watch list</h2>
      <ul>{wishlistShows}</ul>
    </div>
  );
}





