
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu.tsx";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-xl font-medium p-6", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Wallet">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Ethereum">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solana">
          <div className="flex flex-col space-y-4 text-sm">
          </div>
        </MenuItem>
      </Menu>
    </div >
  );
}
