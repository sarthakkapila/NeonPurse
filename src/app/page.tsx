
import Head from 'next/head';
import { NavbarDemo } from '@/components/navbar';
import { SpotlightPreview } from '@/components/gridspot';
import { GridBackground } from '@/components/grid';
import { BackgroundBeams } from '@/components/BackgroundSign';
import SparklesCore from '@/components/ui/SparklesCore';
import { SiteFooter } from '@/components/Footer';
export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 bg-grid p-4">
      <SparklesCore
        className="absolute inset-0 w-full h-full"
        background="transparent"
        minSize={1}
        maxSize={3}
        speed={2}
        particleColor="#ffffff"
        particleDensity={150}
      />

      <div className="relative z-10">
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
              <div className="relative px-8 py-4 text-neutral-400 font-extrabold text-xl bg-transparent hover:bg-transparent transition duration-200">
                Launch App
              </div>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-screen-2xl mx-auto px-2 py-4 pt-16">
          <SpotlightPreview />

          <br />
          <div className="p-30 text-4xl sm:text-7xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
            Our Ecosystem
          </div>

          <GridBackground />
        </div>
        <div>
          <BackgroundBeams />
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

