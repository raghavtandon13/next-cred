"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex h-[8vh] bg-slate-50 items-center justify-center">
        <div className="flex h-full flex-1 items-center justify-center">
          <Image className="h-[80%] w-auto rounded-[4px]" src={logo} alt="" />
        </div>
        <div className="hidden lg:flex flex-[3] items-center justify-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 font-medium text-lg focus-visible:outline-none underline-offset-4 hover:underline">Personal Loans</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 font-medium text-lg focus-visible:outline-none text-primary underline-offset-4 hover:underline">Loans</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="text-lg" variant="link">
            Credit Card
          </Button>
          <Button className="text-lg" variant="link">
            Our Team
          </Button>
          <Button className="text-lg" variant="link">
            Blog
          </Button>
          <Button className="text-lg" variant="default">
            Login
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <Button className="mr-10" variant="outline">
            <AlignJustify onClick={toggleDrawer} />
          </Button>
        </div>
      </div>
      <div
        className={`fixed top-0 transition-all duration-300  ${
          isDrawerOpen ? "right-0" : "right-[-60vw]"
        } bottom-0 w-[60vw] border-l border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-zinc-900`}
      >
        <div className="flex h-[70px] w-full items-center justify-end gap-1 border-none  border-gray-300 pr-10">
          <Button variant={"ghost"}>
            <X className="text-black dark:text-white" onClick={toggleDrawer} />
          </Button>
        </div>
        <div className="flex h-full w-full flex-col items-stretch justify-start gap-4 p-10 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Personal Loans</AccordionTrigger>
              <AccordionContent>Personal Loan</AccordionContent>
              <AccordionContent>Short-term Loan</AccordionContent>
              <AccordionContent>Pay-Later</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Loans</AccordionTrigger>
              <AccordionContent>Line of Credit</AccordionContent>
              <AccordionContent>Business Loan</AccordionContent>
              <AccordionContent>Home Loans</AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="text-lg" variant="link">
            Credit Card
          </Button>
          <Button className="text-lg" variant="link">
            Our Team
          </Button>
          <Button className="text-lg" variant="link">
            Blog
          </Button>
          <Button size={"full"} variant={"default"}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
