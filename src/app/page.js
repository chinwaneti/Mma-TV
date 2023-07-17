"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Navbar from "./components/Navbar";
import Down from "./components/Footer";

async function fetchShows() {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const data = await response.json();
  return data;
}

export default function Page() {
  const [shows, setShows] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchShowsData = async () => {
      const data = await fetchShows();
      setShows(data);
    };

    fetchShowsData();
  }, []);

  useEffect(() => {
    // Get watchlist from local storage on initial load
    const storedWatchlist = localStorage.getItem("watchlist");
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist));
    }
  }, []);

  useEffect(() => {
    // Store watchlist in local storage whenever it changes
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleAddToWatchlist = (show) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, show]);
  };

  const handleRemoveFromWatchlist = (show) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((item) => item.show.id !== show.show.id)
    );
  };

  return (
    <div>
    <div className="">
      <Navbar />

      <div className="flex md:space-x-[64%] space-x-[36%] text-red-500 py-5  ">
        <h1>Trending </h1>{" "}
        <Link href="popular-shows">
          <p className="text-xl">SEE ALL</p>
        </Link>
      </div>

      <div className="container  px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {shows.map((show) => (
            <div
              className={`relative rounded-lg overflow-hidden aspect-w-2 aspect-h-3 `}
              key={show.show.id}
            >
              <Image
                src={show.show.image?.original}
                alt="movie"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-2 right-2">
                {watchlist.some((item) => item.show.id === show.show.id) ? (
                  <AiFillHeart
                    onClick={() => handleRemoveFromWatchlist(show)}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => handleAddToWatchlist(show)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  );
}

