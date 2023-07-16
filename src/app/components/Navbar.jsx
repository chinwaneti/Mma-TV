"use client"
import Link from 'next/link'
import React from 'react';

export default function Navbar() {


  return (
    <div>
   
      <nav className={` w-[95%] px-4 z-50 `}>
        <ul className="flex justify-center item-center space-x-9">
          <Link href="/">
            <li className=" hover:text-3xl text-red-500 text-xl font-bold mt-10">
              HOME
            </li>
          </Link>
          <Link href="/categories">
            <li className=" hover:text-3xl text-red-500 text-xl font-bold mt-10">
              SHOWS
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
  ;
}