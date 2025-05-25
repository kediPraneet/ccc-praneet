import React from "react";
import vi1 from "../assets/vi1.mp4"; // Updated video import
import im from "../assets/im.jpeg"; // Changed from videoplayback.mp4 to im.jpeg

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Cognitive Cyber
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Center
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        EY's Cognitive Cyber Centre (CCC) in Chennai is a Security Operations Centre (SOC) that provides 24/7 security monitoring and threat response. It offers a Next Gen SOC solution with AI-based threat detection, integrated SOAR, and threat intelligence, helping clients improve their cyber defense posture. The facility provides a hybrid approach, combining onsite resources with a remote team of analysts for continuous monitoring
      </p>
      <div className="flex justify-center my-10">
        <a 
          href="https://www.ey.com/en_in/services/cybersecurity/cognitive-cyber-centre"
          target="_blank" 
          rel="noopener noreferrer"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={vi1} type="video/mp4" /> {/* Updated video source */}
          Your browser does not support the video tag.
        </video>
        <img
          src={im}
          alt="EY Cognitive Cyber"
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;