import Link from "next/link";
import Image from "next/image";
import { Briefcase } from "lucide-react";

export const Logoo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Briefcase  className="text-blue-500" height={40} width={40} />
        <p>BoardBuddy</p>
        
      </div>
    </Link>
  );
};
