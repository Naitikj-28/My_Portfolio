import { useState } from 'react';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text text-3xl font-extrabold mb-10">My Work Experience</p>

                <div className="work-content w-full">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map((company, index) => (
                            <div key={index} className="work-content_container group">
                                {/* Company & Roles */}
                                <div className="flex flex-col sm:flex-row gap-5 items-start py-2">
                                    <div className="work-content_logo shrink-0">
                                        <img className="w-16 h-16 object-contain" src={company.icon} alt={company.name} />
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <p className="font-bold text-white-800 text-2xl">{company.name}</p>
                                        <p className="text-base text-white-500 mb-4">{company.duration}</p>

                                        {company.roles.map((role, rIndex) => (
                                            <div
                                                key={rIndex}
                                                className="mb-6 cursor-pointer"
                                                onClick={() => setAnimationName(company.animation.toLowerCase())}
                                                onPointerOver={() => setAnimationName(company.animation.toLowerCase())}
                                                onPointerOut={() => setAnimationName('idle')}
                                            >
                                                <p className="font-semibold text-white-700 text-xl">
                                                    {role.pos}{' '}
                                                    <span className="text-white-500 text-base">({role.duration})</span>
                                                </p>
                                                <p className="text-white-400 text-base group-hover:text-white transition-all ease-in-out duration-500 mt-2 leading-relaxed">
                                                    {role.title}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <hr className="my-6 border-white-300/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
