"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return <TypeAnimation sequence={["is all you need.", 1000, "is lightning fast.", 1000, "has bank grade security.", 1000, "is everyone's favourite Dex.", 1000]} wrapper="span" speed={50} className="text-4xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" repeat={Infinity} />;
};

export default TypingAnimation;
