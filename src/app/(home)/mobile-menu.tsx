"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Nav } from "./nav";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handlePathClick = (path: string) => {
    if (path !== pathname) {
      setOpen(false);
    }
  };

  return (
    <div className="md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full overflow-y-auto">
            <DrawerHeader className="hidden">
              <DrawerTitle />
              <DrawerDescription />
            </DrawerHeader>
            <div className="p-6">
              <Nav onPathClick={handlePathClick} showAside />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
