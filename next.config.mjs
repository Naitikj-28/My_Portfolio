/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', 'react-globe.gl', 'three-globe'],
  reactStrictMode: false,
};

export default nextConfig;

