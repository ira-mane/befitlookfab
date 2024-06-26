import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-[#3B5704] py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-[#3b5704] font-bold text-4xl">BeFit LookFab</h1>
        <p className='text-slate-900 text-xl mr-4'>Schedule your appointment today and let us guide you on your wellness journey.🌟</p>
        <div className="mt-4 md:mt-0">
          <a href="https://docs.google.com/document/d/1c7rMuX9hshuZFTSawrhCfu3Duk7zNKzXL0-ugAnN-v0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-slate-900 text-xl mr-4">
            Privacy Policy
          </a>
          <p className="text-slate-900 text-xl">Terms and Conditions</p>
        </div>
      </div>
      <p className="text-center mt-6 text-black text-sm">
        © {new Date().getFullYear()} All Rights Reserved. Made with ❤ by <a href='https://www.linkedin.com/in/ira-mane/' target="_blank" rel="noopener noreferrer">Ira</a>
      </p>
    </footer>
  );
};

export default Footer;

