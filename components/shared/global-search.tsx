import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Badge, badgeVariants } from "../ui/badge";
import Link from "next/link";

const GlobalSearch = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="flex items-center gap-2">
          {" "}
          <span>Search</span>
          <Search className="w-4 h-4" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="container">
              Are you absolutely sure?
            </DrawerTitle>
          </DrawerHeader>
          <div className="container">
            <Input
              placeholder="Search something . . ."
              className="outline-none bg-secondary"
            />
            <div className="py-3">
              <span>Choose the direction</span>
              <div className="flex gap-2 py-1">
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  Frontend
                </Link>
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  Backend
                </Link>
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  Mobile
                </Link>
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  Game
                </Link>
              </div>
            </div>
            <div className="py-3">
              <span>Choose the texnology</span>
              <div className="flex gap-2 py-1">
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  React
                </Link>
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  Flutter
                </Link>
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  Laravel
                </Link>
                <Link
                  href={"/"}
                  className={badgeVariants({ variant: "secondary" })}
                >
                  UnrealEngine
                </Link>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default GlobalSearch;
