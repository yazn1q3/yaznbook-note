"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";


const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error 404"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height="300"
        width="300"
        alt="Error 404"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        This Url it&apos;s not Found
      </h2>
      <Button asChild>
        <Link href="/">
          Go back
        </Link>
      </Button>
    </div>
  )
}

export default NotFoundPage;