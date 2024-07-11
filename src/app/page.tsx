
import { GridBackgroundDemo } from "@/components/grid";
import { Navbar } from "@/components/navbar-landing";
import { SpotlightPreview } from "@/components/gridspot";
import { NavbarDemo } from "@/components/navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 bg-grid p-4 ">
      <div className="flex justify-between items-center">
        <div className="text-4xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-950 py-4">
          NeonPurse
        </div>
        <div className="p-10">
          <NavbarDemo />
        </div>
        <div>

          <button className="relative p-[3px] flex justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-400 to-gray-950 rounded-lg" />
            <div className="relative px-8 py-4 text-white font-extrabold text-xl bg-transparent hover:bg-transparent transition duration-200">
              Launch App
            </div>
          </button>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-2 py-4 pt-16 ">
        <SpotlightPreview />


        <div className="bg-stone-700 rounded-xl">
          <h1 className="text-lg font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-950 py-2">Earn points by using our wallets</h1>
        </div>
        <GridBackgroundDemo />
      </div>
    </div>
  );
}
