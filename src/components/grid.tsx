
import React from "react";
import Image from 'next/image'
import p1 from '../../public/p1.png';
import p2 from '../../public/p2.png';

export function GridBackground() {
  return (
    <div className="h-auto w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-center py-20 rounded-full">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  rounded-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 mt-8 relative z-20">
        <div className="flex flex-col items-center p-8">
          <Image
            src={p1}
            alt="Ethereum"
            width={500}
            height={500}
          />
          <p className="text-xl p-30 text-white font-medium mt-2">Crypto to fiat off-ramp</p>
        </div>
        <div className="flex flex-col items-center p-8">
          <Image
            src={p2}
            alt="Solana"
            width={500}
            height={500}
          />
          <p className="text-xl p-30 text-white font-medium mt-2">Fiat to crypto on-ramp</p>
        </div>
      </div>
      <div className="text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
        Based on Pancake-V3
      </div>
    </div >
  );
}

