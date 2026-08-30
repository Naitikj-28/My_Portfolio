'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="bg-[#010103] text-white flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <button onClick={() => reset()} className="p-3 bg-white text-black rounded">
          Try again
        </button>
      </body>
    </html>
  );
}
