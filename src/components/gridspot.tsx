
"use client"
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import TypingAnimation from "@/components/TypingAnimation";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
export function SpotlightPreview() {
  return (
    <div className="h-[60rem] w-full rounded-lg flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Neon Purse
          <br />
          <motion.h1 variants={textVariants} className="text-4xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <TypingAnimation />
          </motion.h1>
        </h1>
        <p className="mt-3 bg-clip-text text-left font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 sm:mt-5 sm:text-lg smrmax-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          NeonPurse is a decentralized, secure, and easy-to-use wallet.
          <br className="p-10" />
          Swap, stake, and earn with a splash of neon!
        </p>
        <div className="flex justify-start space-x-8 pt-5">
          <button className="relative p-[3px] flex justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-lg" />
            <div className="relative px-8 py-4 text-gray-300 font-extrabold text-xl bg-transparent hover:bg-transparent transition duration-200">
              Create Wallet
            </div>
          </button>
          <button className="relative p-[3px] flex justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-600 to-neutral-800 rounded-lg" />
            <div className="relative px-8 py-4 text-gray-300 font-extrabold text-xl bg-transparent hover:bg-transparent transition duration-200">
              Import Wallet
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
