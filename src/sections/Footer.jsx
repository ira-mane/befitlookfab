import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-3">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-[#3B5704] font-bold text-3xl md:text-4xl">BeFit LookFab</h1>
                    <p className="mt-2 text-base text-gray-800 leading-relaxed">
                        Schedule your appointment today and let us guide you on your wellness journey. 🌟
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap justify-center md:justify-end">
                    <a
                        href="https://befitlookfab.tiiny.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 text-base mr-6 hover:text-green-800 transition duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href='https://www.instagram.com/befitlookfab'
                        target="_blank"
                        rel='noopener noreferrer'
                        className="text-gray-800 text-base mr-6 hover:text-green-800 transition duration-300"
                    >
                        Instagram
                    </a>
                    <a
                        href='https://youtube.com/@befitlookfab9957?si=EHWaTdPcR6syqYZL'
                        target="_blank"
                        rel='noopener noreferrer'
                        className="text-gray-800 text-base mr-6 hover:text-green-800 transition duration-300"
                    >
                        Youtube
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <p className="text-center mt-6 text-gray-800 text-sm">
                © {new Date().getFullYear()} All Rights Reserved. 
                Designed and Developed by{' '}
                <a
                    href="https://www.linkedin.com/in/ira-mane/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 hover:underline"
                >
                    Ira | irammane14@gmail.com
                </a>
            </p>
        </footer>
    );
};

export default Footer;


