import React from 'react';
import { BsPerson} from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer fixed bottom-0 px-10 left-0 right-0 md:w-full sm:w-[60%] w-[100%]'>
      <div className='flex h-10 items-center justify-between px-4
       bg-gray-50 border-t border-r-green-600 hover:border-4 z-50 text-black mb-5'>
        <Link href='/'>
          <div className='hover:text-red-600'>
            <AiOutlineHome />Home
          </div>
        </Link>
        <Link href='/watchlist'><div className='hover:text-red-600'>
        <AiOutlineHeart /> Watchlist
        </div></Link>
      
        <Link href='/profile'>
          <div className='hover:text-red-600'>
            <BsPerson size={20} className='' />Profile
          </div>
        </Link>
      </div>
    </div>
  );
}
