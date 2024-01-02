import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
  });
  
  export const Logo = () => {
    return (
      <div className="hidden md:flex items-center gap-x-2">
 
        <Image
          src="/channels4_profile.jpg"
          height="35"
          width="35"

          alt="Logo"
          style={{borderRadius:"10px"}}
          className="dark:hidden "
        />      
       
        <Image
          src="/channels4_profile.jpg"
          height="35"
          width="35"
          style={{borderRadius:"10px"}}
          alt="Logo"
          className="hidden dark:block"
        />
      
        <p className={cn("font-semibold", font.className)}>
          Yaznbook
        </p>
      </div>
    )
  }