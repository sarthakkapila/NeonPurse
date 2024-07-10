import { GridBackgroundDemo } from "@/components/grid";
import { Navbar } from "@/components/navbar-landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-grid bg-gray-950">
      <div className="flex justify-between p-4">
        <div className="text-3xl font-extrabold">
          NeonPurse
        </div>
        <div>
          <Navbar className="p-8" />
        </div>
        <div>
          <button className="p-[3px] relative flex justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-950 rounded-lg" />
            <div className="px-8 py-4 relative group transition duration-200 text-white font-extrabold text-xl hover:bg-transparent">
              Launch App
            </div>
          </button>
        </div>
      </div>
      <GridBackgroundDemo />
    </div>
  );
}

