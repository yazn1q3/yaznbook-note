import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">

      
<br />
<h1 className="text-[27px] font-medium" >Introduthing Yaznbook Ai</h1>
<p>
The Ai Powred From Booke Ai,

  </p>
  <img src="yazn.png" className="  object-cover w-[100%] h-[20em] m-2 rounded-[10px]" />
  <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">what YaznbookAi?</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Yaznbook Ai</DrawerTitle>
            <DrawerDescription>The Ai Powred From Booke Ai,</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
          Yaznbook AI is an advanced artificial intelligence system developed to assist users in various tasks related to writing, language, and creativity. It is designed to provide intelligent suggestions, generate text, answer questions, and engage in natural language conversations.



          </div>
          <DrawerFooter>
        
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    </div>
   
    
  )
}