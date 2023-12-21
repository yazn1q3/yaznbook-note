import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
           <Label className="text-[24px]">Community and Estabilshments To make Success from Yaznbook</Label>

      <div className="flex  font-medium  items-center">

     <img  className="rounded-[10px] cursor-pointer  m-1 w-[35px] h-[35px]" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3NTo6IytBRD82QzhFOkMBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3NzgzNzc3NzA3KzgvODc3Ny4yLTI3NzI3Ky83Ny84LTcrLys1LS0rLTcuNf/AABEIAB8AHwMBEQACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAFBgcEAv/EACsQAAIBAwIDBgcAAAAAAAAAAAEDAgAEBRExEiGTBgeBs9HSIjJBR1Fxc//EABgBAQEBAQEAAAAAAAAAAAAAAAUGBwQD/8QAJxEAAgIBAwIFBQAAAAAAAAAAAQIAAwQRMdGRoQUhQXHBMjRCUoH/2gAMAwEAAhEDEQA/AAkVLND8cxyyx981cWKsbqa5fLOCZEH9HSvI0WsNQp6SgxnUbmJJxuQG9hd9CXpXO2Lf+h6GPUX1Ddh1E8SiYyMZAiQOhBGhBrlIIOhiIII1Ek00w0y3HM2HF37sZ3d297bxhJqlDhDASObNPoR+aYFrVYYddwIvSodwphC+3WVlumy6cvdRR8ZvH4jvzGqvC6H3J7cQR7ZPex0wBJkzM6bak60NY5scufWUCKEUKPSR6aWaZZjmbHhn2lt3e2rsigvtoqHGsRBMvj5ciQN9KaVkTEDONRpGKgxYBT5we9y/Zx9i5dliWJfKOkJlUBwnwlRWRlYTVsqpofYcxvEoyhYrF/L3PEAoGUIkknemmmU0Gav9q4fyj5opOz7D+fMbxvrWRaKmHlRjGdQ2rxiY2n//2Q==" /> <a>Farisbook</a>
<img src="data:image/png;base64,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"  className="rounded-[10px] w-[35px] m-1 h-[35px] cursor-pointer"/> <a>Jaco</a>
    
      </div>
<br />
      <Label className="text-[18px]">Make Note && Doucments with Ai <Badge> Coming Soon...</Badge></Label>

    </div>
  )
}