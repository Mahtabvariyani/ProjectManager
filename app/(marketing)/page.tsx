import { DarkMode } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import { Cog } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center  shadow-sm p-4">
          <Cog className="h-6 w-6 mr-2 text-red-400 " />
          <div className="mr-2">

          <DarkMode />
          </div>
          My Project Management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-gray-200 mb-6 
">
          Manage The Projects and Tasks for Each Project
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-50-60 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Lets Manage
        </div>
      </div>
      <Button>
        <Link href="/sign-up" className="text-white">Get The App</Link>
      </Button>
    </div>
  );
}
