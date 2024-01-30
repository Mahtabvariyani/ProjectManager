import Link from "next/link";
import {Logoo} from '@/components/Logoo'
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 shadow-sm  flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logoo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in" className="">
              Login
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up" className="bg-none">
              Get BoardBuddy  for free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};