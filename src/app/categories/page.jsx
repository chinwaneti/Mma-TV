"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Categories() {
  const [allDetails, setAllDetails] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);

  useEffect(() => {
    fetchSummary();
  }, []);

  async function fetchSummary() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    setAllDetails(data);
    setFilteredDetails(data.slice());
  }

  function filterByGenre(genre) {
    const filteredShows = allDetails.filter((show) =>
      show.show.genres.includes(genre)
    );
    setFilteredDetails(filteredShows);
  }

  return (
      <div>
    <div><Navbar /> </div>      
      <div className="bg-cyan-950 grid grid-cols-2  mt-20 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      {filteredDetails.map((show) => (
        <section
          key={show.score}
          className="text-left px-10 py-5 shadow-xl text-xl mt-5 mb-8 shadow-black rounded-lg bg-cyan-500"
        >
          <Link href={`categories/${show.score}`}>
            <div>
              <Image
                src={show.show.image?.original}
                alt={show.show.name}
                width={200}
                height={200}
              />
            </div>
            <p>{show.show.name}</p>
          </Link>
        </section>
      ))}
    </div>
    <div className="mb-4 flex justify-evenly   grid grid-cols-2 mt-5 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-2">
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'> <button onClick={() => setFilteredDetails(allDetails)}>All</button></div>
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'><button onClick={() => filterByGenre("Drama")}>Drama</button></div>
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'><button onClick={() => filterByGenre("Horror")}>Horror</button></div>
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'><button onClick={() => filterByGenre("Sports")}>Sports</button></div>
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'><button onClick={() => filterByGenre("Comedy")}>Comedy</button></div>
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'><button onClick={() => filterByGenre("Anime")}>Anime</button></div>
      <div className='w-32 text-center mt-5 p-3 text-xl  rounded-lg bg-cyan-500'><button onClick={() => filterByGenre("Medical")}>Medical</button></div>
      </div>
    </div>
  );
}
