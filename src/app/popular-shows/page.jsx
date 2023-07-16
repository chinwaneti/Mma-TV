"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  const [newDetails, setNewDetails] = useState([]);

  useEffect(() => {
    fetchSummary();
  }, []);

  async function fetchSummary() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();
    setNewDetails(data.slice(5, 10));
  }

  return (
    <div className="bg-cyan-950 mt-20 grid px-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      {newDetails.map((show) => (
        <section
          key={show.score}
          className="text-left text-xl px-10 py-5 shadow-xl mt-5 mb-8 shadow-black rounded-lg bg-cyan-500 "
        >
          <Link href={`/categories/${show.score}`}>
            <div>
              <Image
                src={show.show.image?.original}
                alt={show.show.name}
                width={200}
                height={200}
              />
            </div>
            <h2 className="font-bold mt-3">Show Genre:</h2>  {show.show.genres.join(', ')}
          </Link>
        </section>
      ))}
    </div>
  );
}

