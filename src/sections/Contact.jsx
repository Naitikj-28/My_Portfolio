const Contact = () => {
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" style={{ zIndex: -1, height: "100%", width: "100%" }} />

                <div className="contact-container text-center">
                    <h3 className="head-text">Download My Documents</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Click the buttons below to download my CV or Resume directly.
                    </p>

                    <div className="mt-8 flex space-x-4 justify-center">
                        <a href="/assets/Naitik_Jain_CV.pdf" download className="field-btn">
                            Download CV
                        </a>
                        <a href="/assets/Naitik_Jain_Resume.pdf" download className="field-btn">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
