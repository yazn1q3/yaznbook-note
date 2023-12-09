"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useUser } from "@clerk/clerk-react";
import { Label } from "@radix-ui/react-label";
import { useMediaQuery } from "usehooks-ts";


const AiPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { user } = useUser();
  return (
    <div>
      <div className="flex items-center" >
   <img src="channels4_profile.jpg" className="w-[35px] h-[35px] rounded-[50px] m-1" />   <Label className="m-5 text-[20px]" >Yaznbook Ai</Label>
   </div>
   <main className="h-[50vh] flex items-center justify-center" >
    <Label className="p-2" >Use Yaznbook Ai for Work or Notes or want templore </Label> 

   </main>
       <div className=" flex justify-center items-center py-2">
  
       <hr className="m-1" />
       <Popover>
            <PopoverTrigger className="w-full mt-4">
            <Button>Join Whitelist</Button>
            </PopoverTrigger>
            <PopoverContent
              className="p-2 w-50"
          
            >
            successfully , to add {user?.firstName}'s Whitelist!
            </PopoverContent>
          </Popover>
   
      </div> 
    </div>
  )
}

export default AiPage;