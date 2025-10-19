import React from "react";

const Loader = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-b from-[#020305] to-[#060a0f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,120,255,0.25),transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(0,150,255,0.15),transparent_70%)] blur-3xl animate-pulse-slow"></div>

      <h1 className="relative z-10 mt-8 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide sm:tracking-widest text-center text-[#00bfff] px-4">
        Welcome to{" "}
        <span className="text-[#00ffff]">Prince&apos;s Portfolio</span>
      </h1>

      <div className="relative z-10 mt-4 flex space-x-2 sm:space-x-3">
        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00bfff] rounded-full animate-bounce delay-75"></span>
        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00bfff] rounded-full animate-bounce delay-150"></span>
        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-[#00bfff] rounded-full animate-bounce delay-300"></span>
      </div>

      <p className="relative z-10 mt-5 text-sm sm:text-base md:text-lg text-gray-300 animate-pulse-slow text-center px-6 leading-relaxed">
        Turning ideas into interactive experiences...
      </p>
    </div>
  );
};

export default Loader;
