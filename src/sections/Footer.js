'use client';
const Footer = () => {
    return (
        <footer className="c-space pt-10 pb-8 border-t border-[#D6C2A5]/60 flex justify-between items-center flex-wrap gap-5 relative z-20">
            <div className="text-[#4D5E52] flex items-center gap-2 text-sm font-semibold">
                <span>&copy; {new Date().getFullYear()} Naitik Jain. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-3">
                <a
                    href="https://github.com/Naitikj-28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    aria-label="GitHub Profile"
                >
                    <img src="/assets/github.svg" alt="github" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" style={{ filter: 'brightness(0.2)' }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/naitikjjain1228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    aria-label="LinkedIn Profile"
                >
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" style={{ filter: 'brightness(0.2)' }} />
                </a>
                <a
                    href="https://instagram.com/naitik28_j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon group"
                    aria-label="Instagram Profile"
                >
                    <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" style={{ filter: 'brightness(0.2)' }} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;