"use client";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/clerk-react";
import { MenuIcon } from "lucide-react";



 const Navbere = ({

}) => {
    const user = useUser();
  return (
<>
     <nav className="justify-center bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
    
     <span className="truncate  text-[19px]">Wolcome  {user?.user?.firstName}&apos;s  Yaznbook Cloud</span>
     </nav>
 </> 
  )
}


export default Navbere;