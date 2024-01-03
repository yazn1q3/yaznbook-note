

"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "usehooks-ts";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const [sss, setSsss] = useState('');
  const [greeting, setGreeting] = useState('');
  const isMobile = useMediaQuery("(max-width: 768px)");




  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    let message = '';

    if (hour >= 0 && hour < 12) {
      message = 'Good Moring!';
    } else {
      message = 'Good evening';
    }

    setGreeting(message);
  }, []);



  const onCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`))

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    });
  };

  return ( 
    <>
    
    <div className="w-[100%]" >
 <div className={`${isMobile && "justify-center"} justify-between flex items-center  p-2`} >
 <Avatar className="w-[30px] h-[30px] m-2 rounded-[50px]" >
  <AvatarImage src={user?.imageUrl} />
 </Avatar>
 <Label>Hello {user?.fullName}&apos;s {greeting}</Label>
 </div>
  
    </div>

    <div>
      
      <Separator />
    

<div className="m-3" />
     <br />

     <br />
     <br />
  <div className="h-full flex flex-col items-center justify-center space-y-4">
  <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
 <h2 className="text-lg font-medium">
   Welcome to {user?.firstName}&apos;s Yaznbook
 </h2>
 <Button className=" rounded-[10px]"  onClick={onCreate}>
   <PlusCircle className="h-4 w-4 mr-2" />
   Create a Note
 </Button>

      </div>
      </div>
    </>
   );
}
 
export default DocumentsPage;
