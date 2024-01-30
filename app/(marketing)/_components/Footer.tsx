import { Logoo } from "@/components/Logoo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 backdrop-blur-lg">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
          <Button size="sm" variant="ghost">
            <Link href="https://github.com/Mahtabvariyani">Mah Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
