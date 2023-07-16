"use client"
import Link from 'next/link'
import React, { useState } from 'react';

export default function Navbar() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleTheme = () => {
    setIsNightMode(prev => !prev);
  };

  return (
    <div>
   
      <nav className={`fixed  w-[95%] px-4 z-50 `}>
        <ul className="flex justify-center item-center space-x-9">
          <Link href="/">
            <li className=" hover:text-3xl hover:text-red-500 text-xl font-bold mt-10">
              HOME
            </li>
          </Link>
          <Link href="/categories">
            <li className=" hover:text-3xl hover:text-red-500 text-xl font-bold mt-10">
              SHOWS
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
  ;
}