"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";
import { Group } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
    <div>
   
      
      
 </div>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">

        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
      
            <SignInButton mode="modal">
              <Button  size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get Yaznbook free
              </Button>
            </SignInButton>
          </>
        )}
    
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter Yaznbook
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}

    
        <ModeToggle />
      </div>
      
    </div>
  )
}