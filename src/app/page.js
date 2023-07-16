"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {  BsMoonFill, BsSunFill } from "react-icons/bs";
import Navbar from "./components/Navbar";

async function fetchShows() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
  const data = await response.json();
  return data;
}

export default function Page() {
  const [shows, setShows] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const fetchShowsData = async () => {
      const data = await fetchShows();
      setShows(data);
    };

    fetchShowsData();
  }, []);

  const toggleTheme = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  return (
    <div className="">
    <Navbar />
    <div className="flex md:space-x-[64%] space-x-[36%] text-red-500 py-5  "><h1>Trending </h1> <Link href='popular-shows'><p className="text-xl">SEE ALL</p></Link></div>
     
      <div className="container  px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {shows.map((show) => (
              <div className={`relative rounded-lg overflow-hidden aspect-w-2 aspect-h-3 `} key={show.show}>
                <Image src={show.show.image?.original}
                alt='movie'
                width={200} height={200}
                className="object-cover w-full h-full"
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
