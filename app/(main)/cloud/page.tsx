"use client";


import { DocumentList } from "../_components/document-list";
import Navbere from "../_components/navbere";


const MeetsPage = ({}) => {

  return (
   <>
    <div className="flex justify-center items-center" >
    <Navbere

    />
</div>
<div className="flex items-center justify-center" >
<div className="w-[20em] h-[25em] rounded-[10px]  bg-white m-5 shadow-sm">

<div className="p-1 flex justify-center items-center">
   <p>Cloud</p>
</div>

<DocumentList crah />
      </div> 
      </div>
     </>
  )
}

export default MeetsPage;