import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-gray-400 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <Link href="/signup">
            <p className="text-blue-500">Sign Up</p>
          </Link>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
