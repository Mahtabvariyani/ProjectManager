"use client";
import { DarkMode } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import { Cog } from "lucide-react";
import Lottie from "lottie-react";
import task from "@/public/task.json";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center  shadow-sm p-4">
        
        </div>
        <h1
          className="text-lg md:text-6xl text-center text-gray-200 mb-6 
"
        >
          My Project Management
        </h1>
        <div className=" md:text-6xl  px-4 p-2 rounded-md pb-4 w-fit">
          <Lottie animationData={task} className="w-[600px]" />
        </div>
      </div>
      <Button className="bg-transparent text-lg hover:bg-blue-600 text-rose-600 hover:text-white ">
        <Link href="/sign-up" className="">
          Start here 
        </Link>
      </Button>
    </div>
  );
}
