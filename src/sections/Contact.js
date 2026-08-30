'use client';
const Contact = () => {
    return (
        <section className="c-space my-24" id="contact">
            <div className="relative min-h-[480px] flex items-center justify-center flex-col">
                {/* Document Card Container */}
                <div className="w-full max-w-2xl border border-[#D6C2A5]/70 bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-warm-lg hover:border-[#527A55]/60 hover:shadow-warm-lg transition-all duration-500 relative overflow-hidden text-center">
                    {/* Top Bar */}
                    <div className="flex items-center gap-2 pb-6 border-b border-[#D6C2A5]/50 mb-8">
                        <span className="w-3 h-3 rounded-full bg-[#D6C2A5]" />
                        <span className="w-3 h-3 rounded-full bg-[#B8955A]" />
                        <span className="w-3 h-3 rounded-full bg-[#527A55]" />
                        <span className="text-xs font-mono text-[#4D5E52] ml-2 tracking-wide font-semibold">naitik_resume_2026.pdf</span>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm font-bold tracking-widest text-[#527A55] uppercase">Let&apos;s Connect</p>
                        <h3 className="head-text">Get in Touch & Download Resume</h3>
                        <p className="text-base sm:text-lg text-[#4D5E52] max-w-lg leading-relaxed">
                            Interested in collaborating on innovative web platforms? Call me directly or access my official resume below.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center w-full">
                            <a
                                href="tel:+919909741013"
                                className="field-btn group flex-1 min-w-[200px]"
                            >
                                <svg className="w-5 h-5 text-[#B8955A] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 99097-41013</span>
                            </a>
                            <a
                                href="/assets/NaitikJain_Resume.pdf"
                                download
                                className="field-btn group flex-1 min-w-[200px]"
                            >
                                <svg className="w-5 h-5 text-[#F0E8DC] group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
