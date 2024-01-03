import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const Heroes = () => {
  return (
    <>
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

Coming Soon...


          </div>
          <DrawerFooter>
        
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    <br />
    <main>
      <Separator className="w-[100%]" />
    <br />
<h1 className="text-[27px] font-medium" >What Yaznbook?</h1>
<br />
<Separator className="w-[100%]" />
<Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can make on Yaznbook Dashboard Life?</AccordionTrigger>
        <AccordionContent>
          Yes, Yaznbook is app note and doucment&apos;s make notes and doucments with ai
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Yaznbook is app Free?</AccordionTrigger>
        <AccordionContent>
         Yes. Yaznbook is free forever can make yaznbook
         <br />
          doucments and whatever no reqiure Card.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Yaznbook have Ai can help me for work</AccordionTrigger>
        <AccordionContent>
          Yes. yaznbook ai can make with yaznbook ai anything blog. whatever
        </AccordionContent>
      </AccordionItem>
         <AccordionItem value="item-4">
        <AccordionTrigger>Can Publish my note or doucment to send url published note?</AccordionTrigger>
        <AccordionContent>
          Yes. yaznbook Publish help you to publish doucments is here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Yaznbook is secure?</AccordionTrigger>
        <AccordionContent>
          Yes. Yaznbook secure from booke inc and Honistger
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </main>
    </div>
    </>
    
  )
}