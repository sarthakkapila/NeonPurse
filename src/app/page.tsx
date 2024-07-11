
import Head from 'next/head';
import Image from 'next/image';
import { NavbarDemo } from '@/components/navbar';
import { SpotlightPreview } from '@/components/gridspot';
import { GridBackgroundDemo } from '@/components/grid';
import Footer from '../components/Footer'; // Ensure correct path to Footer component

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 bg-grid p-4">
      <Head>
        <title>NeonPurse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-4xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-950 py-4">
          NeonPurse
        </div>
        <div className="p-10">
          <NavbarDemo />
        </div>
        <div>
          <button className="relative p-[3px] flex justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-800 rounded-lg" />
            <div className="relative px-8 py-4 text-gray-500 font-extrabold text-xl bg-transparent hover:bg-transparent transition duration-200">
              Launch App
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-2 py-4 pt-16">
        <SpotlightPreview />

        <div className="bg-stone-500 rounded-xl mt-8">
          <h1 className="text-lg font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-2">
            Earn points by using our wallets
          </h1>
        </div>

        <GridBackgroundDemo />
      </div>
    </div>
  );
}

