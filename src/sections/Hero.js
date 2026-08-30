'use client';
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.js';
import CanvasLoader from '../components/CanvasLoader.js';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from '../components/Target.js';
import ReactLogo from '../components/ReactLogo.js';
import Cube from '../components/Cube.js';
import Rings from '../components/Rings.js';
import HeroCamera from '../components/HeroCamera.js';
import Button from '../components/Button.js';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-24 mt-20 c-space gap-2.5 relative z-10 pointer-events-none items-center text-center">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D6C2A5]/70 backdrop-blur-md mb-1 shadow-warm-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#527A55] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#527A55]" />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#1F2922]">
            Frontend Developer &bull; MedsCred
          </span>
        </div>

        <p className="sm:text-3xl text-2xl font-medium text-[#1F2922] text-center font-generalsans">
          Hi, I am <span className="text-[#527A55] font-bold">Naitik Jain</span> <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag max-w-4xl text-[#1F2922]">
          Building Scalable <span className="text-[#527A55]">Web Applications</span> & Solutions
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {mounted ? (
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                  scale={sizes.deskScale}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
              <ambientLight intensity={1.6} color="#FFFBF2" />
              <directionalLight position={[10, 15, 10]} intensity={1.3} color="#FFF5E4" />
              <directionalLight position={[-10, 10, -5]} intensity={0.6} color="#D6C2A5" />
            </Suspense>
          </Canvas>
        ) : null}
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
