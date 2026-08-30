'use client';
import { useState } from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-24" id="work">
            <div className="flex flex-col gap-2 mb-12 text-center sm:text-left">
                <p className="text-sm font-bold tracking-widest text-[#527A55] uppercase">Career Milestones</p>
                <h2 className="head-text">Professional Experience</h2>
            </div>

            <div className="work-content w-full">
                <div className="sm:py-8 py-5 sm:px-6 px-4 flex flex-col gap-8">
                    {workExperiences.map((company, index) => (
                        <div key={index} className="work-content_container group">
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className="work-content_logo shrink-0 group-hover:border-[#527A55] group-hover:shadow-forest-glow transition-all duration-300">
                                    <img className="w-10 h-10 object-contain" src={company.icon} alt={company.name} />
                                </div>

                                <div className="flex flex-col w-full">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                        <h3 className="font-bold text-[#1F2922] text-xl sm:text-2xl tracking-tight font-generalsans">
                                            {company.name}
                                        </h3>
                                        <span className="text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full bg-[#527A55]/10 border border-[#527A55]/30 text-[#527A55]">
                                            {company.duration}
                                        </span>
                                    </div>

                                    <div className="space-y-6 mt-2">
                                        {company.roles.map((role, rIndex) => (
                                            <div
                                                key={rIndex}
                                                className="p-5 rounded-xl bg-[#F8F7F2] border border-[#D6C2A5]/60 hover:border-[#527A55]/50 hover:bg-[#EFECE4] transition-all duration-300 shadow-warm-sm"
                                            >
                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                    <p className="font-bold text-[#1F2922] text-lg">
                                                        {role.pos}
                                                    </p>
                                                    <span className="text-xs font-semibold text-[#4D5E52]">
                                                        {role.duration}
                                                    </span>
                                                </div>
                                                <p className="text-[#4D5E52] text-sm sm:text-base leading-relaxed">
                                                    {role.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {index < workExperiences.length - 1 && (
                                <hr className="my-8 border-[#D6C2A5]/50" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
