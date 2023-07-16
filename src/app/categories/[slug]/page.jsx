"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsArrowLeft, BsBack } from 'react-icons/bs';
import { Orbitron } from 'next/font/google'


const mine = Orbitron({ subsets: ['latin'] })

export default function Page({ params }) {
  const { slug } = params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
    const data = await response.json();
    console.log('Fetched data:', data);
    const matchingDetails = data.find((detail) => detail.score.toString() === slug);
    console.log('Matching details:', matchingDetails);
    setDetails(matchingDetails);
  } catch (error) {
    console.error('Error fetching details:', error);
  }
};





    fetchDetails();
  }, [slug]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className={mine.className}>
    <div className='flex md:space-x-[45%] sm:space-x[40%] space-x-[32%] mt-10 text-3xl p-8 font-bold'> 
    <Link href='/categories'><span><BsArrowLeft size={30} /></span></Link><p>Details</p> </div>
    <div className='text-center font-bold text-2xl'>
    {details.show.image && (
      <Image src={details.show.image.original} alt="slug" width={100} height={100} className='w-full h-screen object-contain' />
      )}
    <div className='text-red-500'>
      {details.show.name}  </div>
      <div className='text-red-500'>Language: {details.show.language}</div>
      <div className='mt-5 mx-auto md:w-[70%] sm:w-[50%] p-5 mb-10 font-light text-red-500'>
      {details.show.summary}</div>
      </div>
    </div>
  );
}
