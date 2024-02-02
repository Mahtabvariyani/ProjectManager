import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { Logoo } from "@/components/Logoo";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./MobileSidebar";
// import { FormPopover } from "@/components/form/form-popover";


export const Navbar = () => {
  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm  flex items-center">
      <MobileSidebar />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logoo />
        </div>
        <div>
          <Button
            size="sm"
            className="ease-in duration-700  transition bg-purple-500 hover:bg-violet-700 rounded-sm hidden md:block h-auto  py-1.5 px-2"
          >
            Create
          </Button>
        </div>
        <div>
          <Button size="sm" className="rounded-sm block md:hidden">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
        
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:"#bfdbfe",
                borderRadius:"10px"
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
