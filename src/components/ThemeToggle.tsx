"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
   const { setTheme } = useTheme();

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="text-black dark:text-white/90">
               <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
               <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
               <span className="sr-only">Toggle theme</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
               <Sun className="mr-2 h-4 w-4" />
               Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
               <Moon className="mr-2 h-4 w-4" />
               Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
               <Laptop className="mr-2 h-4 w-4" />
               System
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
