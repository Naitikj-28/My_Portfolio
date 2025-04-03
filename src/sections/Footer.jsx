const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5" style={{ zIndex: 100 }}>
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/Naitikj-28" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 mx-auto" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="www.linkedin.com/in/naitikjjain1228" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.svg" alt="linkedIn" className="w-1/2 h-1/2 mx-auto" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://instagram.com/naitik28_j" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 mx-auto" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">© Naitik Jain. All rights reserved.</p>
        </footer>
    );
};

export default Footer;