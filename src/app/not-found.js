import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-[#010103] text-white">
      <h1 className="text-6xl font-bold mb-4 font-generalsans">404</h1>
      <p className="text-xl text-[#AFB0B6] mb-8 font-generalsans">Page Not Found</p>
      <Link href="/" className="btn">
        Return Home
      </Link>
    </div>
  );
}
