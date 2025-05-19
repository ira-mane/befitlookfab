import React from "react";
import logo1 from '../assets/images/logo1.png'

const Value = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="bg-[#EDFFCC] p-4 md:p-8 lg:p-10 rounded-lg shadow-md">
        <h2 className="font-bold text-2xl md:text-2xl lg:text-4xl text-[#3B5704] mb-4">About Diet Fusion</h2>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl text-justify mb-4">
          Welcome to Diet Fusion – where science meets nature, and premium wellness becomes your new normal.
        </p>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl text-justify mb-4">
          We are not just another wellness brand. We are the future of personalized, high-impact nutrition rooted in deep internal healing and premium lifestyle transformation.
          Our programs are built for discerning individuals who are done with generic diets, quick fixes, and confusing advice. You're here because you're ready for real, lasting change—and so are we.
        </p>
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-[#3B5704] mt-6 mb-2">💎 Who We Serve</h3>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl text-justify mb-4">
          At Diet Fusion, we work exclusively with clients who demand results and are committed to long-term well-being.
          Our clients are entrepreneurs, professionals, and health-conscious individuals who want to look, feel, and perform at their peak—without fad diets or false promises.
        </p>
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-[#3B5704] mt-6 mb-2">🔥 What Makes Us Different</h3>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl text-justify mb-4">
          <strong>Mastered Niche Selection:</strong> Our focus isn't scattered. We specialize in metabolism-boosting, emotional eating correction, natural detoxification, and safe, sustainable weight loss—no crash diets, ever.
          Every plan is 100% personalized, evidence-backed, and infused with both ancient healing wisdom and modern nutrition science.
        </p>
        <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl text-[#3B5704] mt-6 mb-2">🌿 You're Not Just Buying a Plan.</h3>
        <p className="text-gray-800 text-base md:text-lg lg:text-xl text-justify">
          You're investing in a premium, life-altering transformation.
          Join the Diet Fusion movement, where results are holistic, clients are family, and wellness becomes your superpower.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Value);
