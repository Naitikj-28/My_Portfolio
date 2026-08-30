'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.js';
import DemoComputer from '../components/DemoComputer.js';

const projectCount = myProjects.length;

const Projects = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className="c-space my-24" id="projects">
            <div className="flex flex-col gap-2 mb-12 text-center sm:text-left">
                <p className="text-sm font-bold tracking-widest text-[#527A55] uppercase">Portfolio Showcase</p>
                <h2 className="head-text">Selected Featured Projects</h2>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-full items-stretch">
                {/* Project Details Card */}
                <div className="flex flex-col justify-between relative sm:p-10 p-6 rounded-2xl border border-[#D6C2A5]/70 bg-white/90 backdrop-blur-xl shadow-warm-md hover:border-[#527A55]/60 hover:shadow-warm-lg transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 pointer-events-none opacity-20">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="p-3 backdrop-filter backdrop-blur-2xl w-fit rounded-xl border border-[#D6C2A5]/60 shadow-warm-sm" style={currentProject.logoStyle}>
                                <img className="w-9 h-9 object-contain" src={currentProject.logo} alt="logo" />
                            </div>
                            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#F0E8DC] border border-[#D6C2A5] text-[#1F2922]">
                                0{selectedProjectIndex + 1} / 0{projectCount}
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 mb-6">
                            <p className="text-[#1F2922] text-2xl font-bold animatedText tracking-tight font-generalsans">{currentProject.title}</p>
                            <p className="text-[#4D5E52] text-base leading-relaxed animatedText">{currentProject.desc}</p>
                            <p className="text-[#76887B] text-sm leading-relaxed animatedText">{currentProject.subdesc}</p>
                        </div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-[#D6C2A5]/50">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2.5 flex-wrap">
                                {currentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo" title={tag.name}>
                                        <img src={tag.path} alt={tag.name} className="w-5 h-5 object-contain" />
                                    </div>
                                ))}
                            </div>

                            {currentProject.href && (
                                <a
                                    href={currentProject.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold text-[#527A55] hover:text-[#3E5E41] transition-colors group"
                                >
                                    <span>Live Preview</span>
                                    <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ filter: 'brightness(0.3)' }} />
                                </a>
                            )}
                        </div>

                        <div className="flex justify-between items-center">
                            <button className="arrow-btn" onClick={() => handleNavigation('previous')} aria-label="Previous project">
                                <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" style={{ filter: 'brightness(0.2)' }} />
                            </button>

                            <button className="arrow-btn" onClick={() => handleNavigation('next')} aria-label="Next project">
                                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" style={{ filter: 'brightness(0.2)' }} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3D Demo Computer Canvas */}
                <div className="border border-[#D6C2A5]/70 bg-[#F0E8DC]/80 backdrop-blur-xl rounded-2xl min-h-[380px] md:min-h-full flex flex-col items-center justify-center relative overflow-hidden shadow-warm-md">
                    <div className="absolute top-4 right-4 z-10 text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-md bg-white/90 border border-[#D6C2A5] text-[#4D5E52] pointer-events-none shadow-warm-sm">
                        Interactive 3D &bull; Drag to Rotate
                    </div>

                    {mounted ? (
                        <Canvas className="w-full h-full">
                            <ambientLight intensity={1.6} color="#FFFBF2" />
                            <directionalLight position={[10, 15, 10]} intensity={1.3} color="#FFF5E4" />
                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                    <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                        <DemoComputer texture={currentProject.texture} />
                                    </group>
                                </Suspense>
                            </Center>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                        </Canvas>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="canvas-loader" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;