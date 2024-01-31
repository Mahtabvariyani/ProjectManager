"use client";
import { SignIn } from "@clerk/nextjs";
import Lottie from "lottie-react";
import signin from "@/public/signin.json";

export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row">
          <div className="mt-5 sm:ml-5 sm:mt-0">
      <SignIn />
    </div>
    <div className="p-10 sm:p-0">
      <Lottie animationData={signin} className="w-full sm:w-[700px]" />
    </div>
  
  </div>
  );
}
