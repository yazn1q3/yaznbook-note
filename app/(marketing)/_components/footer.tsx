import { Button } from "@/components/ui/button"

import { Logo } from "./logo"
import { Label } from "@/components/ui/label"

import { AlertDialog,  AlertDialogAction,    AlertDialogContent,  AlertDialogHeader,    AlertDialogTrigger } from "@/components/ui/alert-dialog"
import {  File, Globe,  Paperclip, Sidebar } from "lucide-react"

export const Footer =  () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
      
        <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="flex items-center" >
            <h2>Privacy Policy</h2>
            <hr className="m-2"/>
          </AlertDialogHeader>
          <div className="flex items-center">
        <Paperclip className="m-1" /> Yaznbook Thia Connected Workspaces
        </div>
        <div className="flex items-center">
        <File className="m-1" /> Create Doucments and Note to easy life or work
        </div>
        <div className="flex items-center">
          <Sidebar className="m-1"  /> Have Perfect Navigation Bar easy to change size more
        </div>
        <div className="flex items-center">
          <Globe className="m-1"  /> Can Publish you work or doucemnts from Publish  
        </div>
     <AlertDialogAction  className="rounded-[10px]" >
   Cancel
      
     </AlertDialogAction>
        </AlertDialogContent>
      
     
        </AlertDialog>
      
        <AlertDialog>
            <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm">
         Terms & Conditions
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader className="flex items-center" >
            <h2>Terms & Conditions</h2>
            <hr className="m-2"/>
          </AlertDialogHeader>
          1- Yaznbook it&apos;s app from Booke inc
          <br />
          2- Yaznbook Notes from Yb or ts (User)
          <br />
          3- Yaznbook or Yb i'll anyday or tomorow it auto update 
          <br />
          4- Yaznbook have right all Stuff apps from Notes
     
     <AlertDialogAction  className="rounded-[10px]" >
   Cancel
      
     </AlertDialogAction>
        </AlertDialogContent>
      
     
        </AlertDialog>

      
        <Label>Booke inc ©</Label>
      </div>
    </div>
  )
}