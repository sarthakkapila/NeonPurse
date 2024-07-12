
"use client";
import React from "react";
import SparklesCore from '@/components/ui/SparklesCore';

export function SparklesBackground() {
  return (
    <div className="h-screen relative w-full flex flex-col items-center justify-center">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
