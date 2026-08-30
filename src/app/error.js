'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-[#010103] text-white">
      <h2 className="text-3xl font-bold mb-4 font-generalsans">Something went wrong!</h2>
      <p className="text-[#AFB0B6] mb-6 max-w-md">{error?.message || 'An unexpected error occurred.'}</p>
      <button onClick={() => reset()} className="btn">
        Try again
      </button>
    </div>
  );
}
