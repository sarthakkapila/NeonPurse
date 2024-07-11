
import React from "react";
import Image from 'next/image'
import eth from '../../public/eth.png';
import sol from '../../public/sol.png';
import leverage from '../../public/leverage.png';
import people from '../../public/people.png';

export function GridBackgroundDemo() {
  return (
    <div className="h-auto w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-center py-20">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="pt-30 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
        Our Ecosystem
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 mt-8 relative z-20">
        <div className="flex flex-col items-center p-8">
          <Image
            src={eth}
            alt="Ethereum"
            width={200}
            height={200}
          />
          <p className="text-xl p-30 text-white mt-2">Ethereum</p>
        </div>
        <div className="flex flex-col items-center p-8">
          <Image
            src={sol}
            alt="Solana"
            width={200}
            height={200}
          />
          <p className="text-xl p-30 text-white mt-2">Solana</p>
        </div>
      </div>
      <div className="pb-20 text-5xl pb-30 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
        All in one wallet
      </div>
      <div className="bg-stone-500 rounded-xl w-full">
        <h1 className="text-lg font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-2">
          go-to solution for all your DeFi needs
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:space-x-8 mt-8 relative z-20 px-4">
        <div className="flex flex-col items-center p-8">
          <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Decentralized, Secure & Reliable
          </div>
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mt-4">
            Become part of a decentralized venture capital and development community with Metavault DAO!
          </div>
        </div>
        <div className="p-8">
          <Image
            src={leverage}
            alt="Leverage"
            width={700}
            height={400}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:space-x-8 mt-8 relative z-20 px-4">
        <div className="flex flex-col items-center p-8">
          <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Trade top Markets with up to 100x leverage directly from your Web3 wallet
          </div>
        </div>
        <div className="p-8">
          <Image
            src={people}
            alt="People"
            width={700}
            height={400}
          />
        </div>
      </div>
    </div >
  );
}

