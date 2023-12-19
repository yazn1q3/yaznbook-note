import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
        
      <div className="flex items-center">
   
      <Image
        src="/z.jpg"
        height="200"
        className="rounded-[25px]"
        width="400"
        alt="Empty"

      />
      </div>
    </div>
  )
}