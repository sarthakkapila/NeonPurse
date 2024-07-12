
"use client";
import React from "react";

export function BackgroundBeams() {
  return (
    <div className="h-[40rem] rounded-4xl relative flex flex-col justify-center items-center antialiased">
      <div className="max-w-2xl text-center">
        <h1 className="relative z-10 text-3lg md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-750 font-bold">
          Join Now!
        </h1>
        <p className="text-neutral-400 text-xl max-w-lg mx-auto my-2 relative z-10">
        </p>
        <div className="relative z-10 p-7">
          <button className="relative p-[3px]">
            <div className="absolute inset-0 pt-10 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-lg" />
            <div className="relative px-8 py-4 text-neutral-400 font-extrabold text-xl bg-transparent hover:bg-transparent transition duration-200">
              connect wallet
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

