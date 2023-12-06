"use client";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/app/(marketing)/_components/logo";



export const Headers = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
       
      
          <>
           
       <Link href="/">
              <Button size="sm">
                Make a doucment
              </Button>
              </Link>
          </>
    
        
        <ModeToggle />
      </div>
    </div>
  )
}