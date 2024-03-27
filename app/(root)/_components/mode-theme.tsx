"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ModeTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [mound, setMound] = useState(false);

  useEffect(() => {
    setMound(true);
  }, []);

  return mound && resolvedTheme === "dark" ? (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("light")}>
      <Sun />
    </Button>
  ) : (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  );
};

export default ModeTheme;
