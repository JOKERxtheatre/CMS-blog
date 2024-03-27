import GlobalSearch from "@/components/shared/global-search";
import { navLinks } from "@/constants";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import ModeTheme from "./mode-theme";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[10vh] backdrop-blur-lg border-b-2 border-inherit inset-0">
      <div className="w-full flex items-center justify-between h-[10vh] px-12 py-2">
        <Link href={"/"} className="text-3xl font-createRound">
          <span>Xumoyun</span>
        </Link>
        <div className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.route}
              className="hover:bg-blue-400/20 px-2 rounded-sm py-1"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <GlobalSearch />
          <ModeTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
