'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const GlobeComponent = dynamic(() => import('../components/GlobeComponent.js'), {
    ssr: false,
    loading: () => (
        <div className="w-[300px] h-[300px] flex items-center justify-center">
            <span className="canvas-loader" />
        </div>
    ),
});

const About = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('naitikjain2810@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-24" id="about">
            <div className="flex flex-col gap-2 mb-12 text-center sm:text-left">
                <p className="text-sm font-bold tracking-widest text-[#527A55] uppercase">About Me</p>
                <h2 className="head-text">Crafting Modern, Scalable Web Products</h2>
            </div>

            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 h-full">
                {/* Card 1 - Bio */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container group">
                        <div className="overflow-hidden rounded-xl bg-[#F0E8DC] border border-[#D6C2A5]/70 flex items-center justify-center p-2">
                            <img src="/assets/grid1.jpg" alt="grid-1" className="w-full sm:h-[220px] h-[180px] object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg" />
                        </div>

                        <div>
                            <p className="grid-headtext">Hi, I’m Naitik Jain</p>
                            <p className="grid-subtext">
                                Frontend Developer with 2+ years of experience building scalable, production-grade applications across fintech, healthcare, and geospatial domains.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Tech Stack */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container group">
                        <div className="overflow-hidden rounded-xl bg-[#F0E8DC] border border-[#D6C2A5]/70 flex items-center justify-center p-2">
                            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[180px] h-[150px] object-contain group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        <div>
                            <p className="grid-headtext">Tech Stack & Ecosystem</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Zustand', 'Framer Motion', 'GeoServer', 'REST APIs'].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1.5 rounded-lg bg-[#F0E8DC] border border-[#D6C2A5] text-[#1F2922] font-semibold hover:border-[#527A55] hover:bg-[#527A55] hover:text-[#F8F7F2] transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 - Light Theme Globe pointing to Ahmedabad */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-2xl w-full sm:h-[300px] h-[280px] flex justify-center items-center overflow-hidden relative bg-[#F0E8DC] border border-[#D6C2A5]/70">
                            {mounted ? (
                                <GlobeComponent />
                            ) : (
                                <div className="w-[300px] h-[300px] flex items-center justify-center">
                                    <span className="canvas-loader" />
                                </div>
                            )}
                        </div>
                        <div>
                            <p className="grid-headtext">Global & Remote Collaboration</p>
                            <p className="grid-subtext">Based in Ahmedabad, Gujarat (IST) & comfortable working across global time zones.</p>
                        </div>
                    </div>
                </div>

                {/* Card 4 - Passion */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container group">
                        <div className="overflow-hidden rounded-xl bg-[#F0E8DC] border border-[#D6C2A5]/70 flex items-center justify-center p-2">
                            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[200px] h-[160px] object-contain group-hover:scale-105 transition-transform duration-500" />
                        </div>

                        <div>
                            <p className="grid-headtext">Passion for High-Performance Engineering</p>
                            <p className="grid-subtext">
                                Driven by clean code, interactive 3D visualizations, and optimized performance. Every interface is built with precision, accessibility, and delightful user experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Contact */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container justify-center">
                        <div className="overflow-hidden rounded-xl bg-[#F0E8DC] border border-[#D6C2A5]/70 flex items-center justify-center p-2">
                            <img src="/assets/grid4.png" alt="grid-4" className="w-full sm:h-[100px] h-[80px] object-contain" />
                        </div>

                        <div className="space-y-2">
                            <p className="text-xs font-bold tracking-wider text-[#527A55] text-center uppercase">Get in touch</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="w-4 h-4" style={{ filter: 'brightness(0.3)' }} />
                                <p className="text-sm sm:text-base font-bold text-[#1F2922] group-hover:text-[#527A55] transition-colors truncate">
                                    {hasCopied ? 'Email Copied!' : 'naitikjain2810@gmail.com'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;