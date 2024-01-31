"use client";
import { SignUp } from "@clerk/nextjs";
import Lottie from "lottie-react";
import signup from "@/public/signup.json";

export default function Page() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="p-10 sm:p-0">
        <Lottie animationData={signup} className="w-full sm:w-[900px]" />
      </div>
      <SignUp />
    </div>
  );
}
