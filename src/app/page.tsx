import { Navbar } from "@/components/navbar-landing";

export default function Home() {
  return (
    <div className="flex justify-between p-4">
      <div className="text-3xl text-extrabold">
        NeonPurse
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <button className="p-[3px] relative flex justify-end">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-950 rounded-lg" />
          <div className="px-8 py-4 relative group transition duration-200 text-white text-extrabold text-xl hover:bg-transparent">
            Launch App
          </div>
        </button>
      </div>
    </div>
  );
}
